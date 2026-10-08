import { wajibSupabase } from '../lib/supabase'

// Baris database (snake_case) → objek yang dipakai komponen (camelCase)
const keWarga = (r) => ({
  id: r.id,
  nik: r.nik,
  noKK: r.no_kk,
  nama: r.nama,
  peran: r.peran,
  status: r.status,
  kepemilikan: r.kepemilikan,
  jk: r.jk,
  tempatLahir: r.tempat_lahir,
  tglLahir: r.tgl_lahir,
  golDarah: r.gol_darah,
  pekerjaan: r.pekerjaan,
  kategoriPekerjaan: r.kategori_pekerjaan,
  asal: r.asal,
  alamat: r.alamat,
  blok: r.blok,
  createdAt: r.created_at
})

function pesanGalat(error) {
  if (error.code === '23505') return 'NIK tersebut sudah terdaftar di direktori warga.'
  if (error.code === '23514') return 'Data tidak valid. Periksa kembali NIK/No. KK (16 digit angka) dan isian lainnya.'
  if (error.code === '42P01' || error.code === 'PGRST205') return 'Tabel belum dibuat. Jalankan supabase/schema.sql di SQL Editor Supabase.'
  if (error.code === '42501') return 'Akses ditolak oleh Row Level Security. Periksa policy di supabase/schema.sql.'
  return error.message
}

export async function ambilDaftarWarga() {
  const { data, error } = await wajibSupabase()
    .from('v_warga')
    .select('*')
    // Data terbaru di atas; data yang dibuat bersamaan (seed) tetap berurutan
    .order('created_at', { ascending: false })
    .order('id', { ascending: true })

  if (error) throw new Error(pesanGalat(error))
  return data.map(keWarga)
}

export async function tambahWarga(w) {
  const db = wajibSupabase()

  // 1. Pastikan Kartu Keluarga ada. Jika No. KK sudah terdaftar, data KK lama dipertahankan.
  const { error: galatKK } = await db
    .from('kartu_keluarga')
    .upsert({ no_kk: w.noKK, alamat: w.alamat, blok: w.blok }, { onConflict: 'no_kk', ignoreDuplicates: true })
  if (galatKK) throw new Error(pesanGalat(galatKK))

  // 2. Simpan data jiwa
  const { data, error } = await db
    .from('warga')
    .insert({
      nik: w.nik,
      no_kk: w.noKK,
      nama: w.nama,
      peran: w.peran,
      status: w.status,
      kepemilikan: w.kepemilikan,
      jk: w.jk,
      tempat_lahir: w.tempatLahir,
      tgl_lahir: w.tglLahir,
      gol_darah: w.golDarah,
      pekerjaan: w.pekerjaan,
      kategori_pekerjaan: w.kategoriPekerjaan
    })
    .select('id')
    .single()
  if (error) throw new Error(pesanGalat(error))

  // 3. Ambil kembali lewat view agar alamat & blok mengikuti data KK
  const { data: baris, error: galatBaca } = await db.from('v_warga').select('*').eq('id', data.id).single()
  if (galatBaca) throw new Error(pesanGalat(galatBaca))
  return keWarga(baris)
}
