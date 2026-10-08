-- =====================================================================
-- Data contoh (fiktif) untuk Direktori Warga — jalankan SETELAH schema.sql
-- Aman dijalankan ulang: baris yang sudah ada dilewati.
-- =====================================================================

insert into public.kartu_keluarga (no_kk, alamat, blok) values
  ('3171092809180004', 'Blok A2 No. 8',      'A'),
  ('3171091504780002', 'Blok B3 No. 12',     'B'),
  ('3171091201830001', 'Blok A1 No. 05',     'A'),
  ('3273011409990007', 'Kost Paviliun C2',   'C'),
  ('3201022203950001', 'Kontrakan B1 No. 4', 'B'),
  ('3171091212650001', 'Blok D1 No. 02',     'D'),
  ('3171092006720003', 'Blok A3 No. 08',     'A'),
  ('3171090807870004', 'Blok C3 No. 10',     'C'),
  ('3171090503480001', 'Blok D2 No. 07',     'D')
on conflict (no_kk) do nothing;

insert into public.warga
  (nik, no_kk, nama, peran, status, kepemilikan, jk, tempat_lahir, tgl_lahir, gol_darah, pekerjaan, kategori_pekerjaan, asal)
values
  ('3171092809180004', '3171092809180004', 'Ir. Hendra Gunawan',     'Kepala Keluarga', 'tetap',     'Milik Sendiri',   'Laki-laki', 'Bandung',    '1976-09-28', 'O',  'Insinyur Sipil',        'karyawan',   null),
  ('3171094102800002', '3171092809180004', 'Dra. Endah Puspitasari', 'Istri',           'tetap',     'Milik Sendiri',   'Perempuan', 'Solo',       '1980-02-01', 'B',  'Guru SMA Negeri',       'pns',        null),
  ('3171095505030008', '3171092809180004', 'Nn. Siti Sarah Gunawan', 'Anak',            'tetap',     'Ikut Orang Tua',  'Perempuan', 'Jakarta',    '2003-05-15', 'O',  'Mahasiswa Univ. UI',    'mahasiswa',  null),
  ('3171091210080005', '3171092809180004', 'Ananda Fikri Gunawan',   'Anak',            'tetap',     'Ikut Orang Tua',  'Laki-laki', 'Jakarta',    '2008-10-12', 'B',  'Pelajar SMP',           'mahasiswa',  null),
  ('3171091504780002', '3171091504780002', 'Bpk. Joko Susilo',       'Kepala Keluarga', 'tetap',     'Milik Sendiri',   'Laki-laki', 'Klaten',     '1978-04-15', 'A',  'Pedagang Grosir',       'wiraswasta', null),
  ('3171095708810003', '3171091504780002', 'Ibu Sri Lestari',        'Istri',           'tetap',     'Milik Sendiri',   'Perempuan', 'Klaten',     '1981-08-17', 'A',  'Mengurus Rumah Tangga', 'lainnya',    null),
  ('3171090311060004', '3171091504780002', 'Dimas Aji Susilo',       'Anak',            'tetap',     'Ikut Orang Tua',  'Laki-laki', 'Jakarta',    '2006-11-03', 'A',  'Pelajar SMA',           'mahasiswa',  null),
  ('3171091201830001', '3171091201830001', 'Bpk. Slamet Riyadi',     'Kepala Keluarga', 'tetap',     'Milik Sendiri',   'Laki-laki', 'Semarang',   '1983-01-12', 'AB', 'ASN Pemkot',            'pns',        null),
  ('3171096208840003', '3171091201830001', 'Ibu Ratna Wulandari',    'Istri',           'tetap',     'Milik Sendiri',   'Perempuan', 'Yogyakarta', '1984-08-22', 'O',  'Staf Bank Swasta',      'karyawan',   null),
  ('3273011409990007', '3273011409990007', 'Sdr. Muhammad Rifki',    'Penyewa Kos',     'kontrak',   'Sewa Bulanan',    'Laki-laki', 'Bandung',    '1999-09-14', 'A',  'Programmer Startup',    'karyawan',   'Kota Bandung'),
  ('3201026503950002', '3201022203950001', 'Ny. Dewi Anggraini',     'Penyewa Kos',     'kontrak',   'Kontrak Tahunan', 'Perempuan', 'Bogor',      '1995-03-25', 'B',  'Perawat RS Swasta',     'karyawan',   'Kab. Bogor'),
  ('3171091212650001', '3171091212650001', 'Bpk. Ahmad Dahlan',      'Kepala Keluarga', 'tetap',     'Milik Sendiri',   'Laki-laki', 'Surabaya',   '1965-12-12', 'B',  'Pensiunan BUMN',        'pensiun',    null),
  ('3171094706680002', '3171091212650001', 'Hj. Siti Aminah',        'Istri',           'tetap',     'Milik Sendiri',   'Perempuan', 'Gresik',     '1968-06-07', 'O',  'Mengurus Rumah Tangga', 'lainnya',    null),
  ('3171095001420001', '3171091212650001', 'Ibu Nur Halimah',        'Famili Lain',     'tetap',     'Ikut Keluarga',   'Perempuan', 'Gresik',     '1942-01-10', 'O',  'Tidak Bekerja',         'lainnya',    null),
  ('3171092006720003', '3171092006720003', 'Bpk. Bambang Sutrisno',  'Kepala Keluarga', 'tetap',     'Milik Sendiri',   'Laki-laki', 'Malang',     '1972-06-20', 'A',  'Anggota TNI AD',        'pns',        null),
  ('3171090807870004', '3171090807870004', 'Bpk. Yusuf Maulana',     'Kepala Keluarga', 'pindah',    'Pindah ke Depok', 'Laki-laki', 'Cirebon',    '1987-07-08', 'B',  'Karyawan Swasta',       'karyawan',   null),
  ('3171090503480001', '3171090503480001', 'Alm. Bpk. Suparman',     'Kepala Keluarga', 'meninggal', 'Milik Sendiri',   'Laki-laki', 'Madiun',     '1948-03-05', 'O',  'Pensiunan Guru',        'pensiun',    null)
on conflict (nik) do nothing;
