-- =====================================================================
-- WargaHub RT 04 / RW 07 — Skema Data Warga & Kartu Keluarga
-- Jalankan di: Supabase Dashboard > SQL Editor > New query > Run
-- =====================================================================

-- ---------------------------------------------------------------------
-- 1. Tabel Kartu Keluarga (satu baris per nomor KK / rumah)
-- ---------------------------------------------------------------------
create table if not exists public.kartu_keluarga (
  no_kk       text primary key check (no_kk ~ '^\d{16}$'),
  alamat      text not null check (length(trim(alamat)) > 0),   -- mis. 'Blok A2 No. 8'
  blok        text not null check (blok in ('A', 'B', 'C', 'D')),
  created_at  timestamptz not null default now()
);

comment on table public.kartu_keluarga is 'Kartu Keluarga warga RT 04 / RW 07';

-- ---------------------------------------------------------------------
-- 2. Tabel Warga (satu baris per jiwa)
-- ---------------------------------------------------------------------
create table if not exists public.warga (
  id                  bigint generated always as identity primary key,
  nik                 text not null unique check (nik ~ '^\d{16}$'),
  no_kk               text not null references public.kartu_keluarga (no_kk) on update cascade,
  nama                text not null check (length(trim(nama)) > 0),
  peran               text not null check (peran in ('Kepala Keluarga', 'Istri', 'Anak', 'Famili Lain', 'Penyewa Kos')),
  status              text not null default 'tetap' check (status in ('tetap', 'kontrak', 'pindah', 'meninggal')),
  kepemilikan         text,                                   -- 'Milik Sendiri', 'Sewa Bulanan', dst.
  jk                  text not null check (jk in ('Laki-laki', 'Perempuan')),
  tempat_lahir        text not null,
  tgl_lahir           date not null check (tgl_lahir <= current_date),
  gol_darah           text check (gol_darah in ('A', 'B', 'AB', 'O', '-')),
  pekerjaan           text,
  kategori_pekerjaan  text check (kategori_pekerjaan in ('karyawan', 'pns', 'wiraswasta', 'mahasiswa', 'pensiun', 'lainnya')),
  asal                text,                                   -- kota asal, khusus warga kontrak / kos
  created_at          timestamptz not null default now()
);

comment on table public.warga is 'Data jiwa warga RT 04 / RW 07';

create index if not exists warga_no_kk_idx  on public.warga (no_kk);
create index if not exists warga_status_idx on public.warga (status);

-- ---------------------------------------------------------------------
-- 3. View gabungan warga + alamat KK (dipakai halaman Direktori)
--    security_invoker = true  →  view tetap tunduk pada RLS tabel asal
-- ---------------------------------------------------------------------
create or replace view public.v_warga
with (security_invoker = true) as
select
  w.id, w.nik, w.no_kk, w.nama, w.peran, w.status, w.kepemilikan, w.jk,
  w.tempat_lahir, w.tgl_lahir, w.gol_darah, w.pekerjaan, w.kategori_pekerjaan,
  w.asal, w.created_at,
  kk.alamat, kk.blok
from public.warga w
join public.kartu_keluarga kk on kk.no_kk = w.no_kk;

-- ---------------------------------------------------------------------
-- 4. Hak akses & Row Level Security (RLS)
-- ---------------------------------------------------------------------
alter table public.kartu_keluarga enable row level security;
alter table public.warga          enable row level security;

grant select, insert on public.kartu_keluarga to anon, authenticated;
grant select, insert on public.warga          to anon, authenticated;
grant select         on public.v_warga        to anon, authenticated;

-- ⚠️ KEBIJAKAN MODE PENGEMBANGAN
-- Aplikasi belum punya fitur login, jadi sementara siapa pun yang memegang
-- anon key (yang ikut terkirim ke browser) dapat MEMBACA & MENAMBAH data.
-- Jangan dipakai untuk data warga asli sebelum diganti dengan kebijakan
-- produksi di bawah (wajib login pengurus RT).
drop policy if exists "dev: baca kk"     on public.kartu_keluarga;
drop policy if exists "dev: tambah kk"   on public.kartu_keluarga;
drop policy if exists "dev: baca warga"  on public.warga;
drop policy if exists "dev: tambah warga" on public.warga;

create policy "dev: baca kk"      on public.kartu_keluarga for select to anon, authenticated using (true);
create policy "dev: tambah kk"    on public.kartu_keluarga for insert to anon, authenticated with check (true);
create policy "dev: baca warga"   on public.warga          for select to anon, authenticated using (true);
create policy "dev: tambah warga" on public.warga          for insert to anon, authenticated with check (true);

-- ✅ KEBIJAKAN PRODUKSI (aktifkan setelah ada login Supabase Auth):
-- drop policy "dev: baca kk"      on public.kartu_keluarga;
-- drop policy "dev: tambah kk"    on public.kartu_keluarga;
-- drop policy "dev: baca warga"   on public.warga;
-- drop policy "dev: tambah warga" on public.warga;
-- revoke select, insert on public.kartu_keluarga, public.warga from anon;
-- revoke select on public.v_warga from anon;
-- create policy "pengurus: baca kk"      on public.kartu_keluarga for select to authenticated using (true);
-- create policy "pengurus: tambah kk"    on public.kartu_keluarga for insert to authenticated with check (true);
-- create policy "pengurus: baca warga"   on public.warga          for select to authenticated using (true);
-- create policy "pengurus: tambah warga" on public.warga          for insert to authenticated with check (true);
