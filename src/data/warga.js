export const wargaMetrik = [
  {
    id: 'jiwa',
    label: 'Total Jiwa Terdata',
    icon: 'groups',
    iconClass: 'bg-secondary-container/40 text-secondary',
    value: '486',
    badge: '+6 bulan ini',
    badgeClass: 'bg-secondary-container text-secondary',
    bar: { width: '100%', className: 'bg-primary' }
  },
  {
    id: 'kk',
    label: 'Kepala Keluarga (KK)',
    icon: 'home',
    iconClass: 'bg-primary-fixed text-primary',
    value: '132',
    unit: 'Keluarga',
    metaLeft: 'Rerata: 3.6 jiwa/rumah',
    metaRight: '100% Terverifikasi'
  },
  {
    id: 'kontrak',
    label: 'Warga Kontrak / Kos',
    icon: 'apartment',
    iconClass: 'bg-tertiary-fixed text-tertiary',
    value: '86',
    valueClass: 'text-tertiary-container',
    badge: '17.7% Rasio',
    badgeClass: 'bg-tertiary-fixed text-tertiary',
    bar: { width: '18%', className: 'bg-tertiary-container' }
  },
  {
    id: 'mutasi',
    label: 'Mutasi & Pindah',
    icon: 'transfer_within_a_station',
    iconClass: 'bg-surface-container-highest text-outline',
    value: '14',
    unit: 'Keluar Wilayah',
    metaLeft: 'Surat Pengantar terbit',
    metaRight: 'Semua Tuntas'
  }
]

export const statusDomisili = {
  tetap: { label: 'Tetap', tab: 'Warga Tetap', className: 'bg-primary-container/15 text-primary', dot: 'bg-primary' },
  kontrak: { label: 'Kontrak', tab: 'Kontrak / Kos', className: 'bg-tertiary-fixed text-tertiary-container', dot: 'bg-tertiary-container' },
  pindah: { label: 'Pindah', tab: 'Pindah / Mutasi', className: 'bg-surface-container text-on-surface-variant', dot: 'bg-outline' },
  meninggal: { label: 'Meninggal', tab: 'Meninggal', className: 'bg-surface-container-highest text-on-surface-variant', dot: 'bg-on-surface-variant' }
}

export const peranKK = {
  'Kepala Keluarga': { icon: 'person', className: 'bg-secondary-container text-on-secondary-container', filter: 'kk' },
  Istri: { icon: 'family_restroom', className: 'bg-surface-container text-on-surface-variant', filter: 'istri' },
  Anak: { icon: 'child_care', className: 'bg-surface-container text-on-surface-variant', filter: 'anak' },
  'Famili Lain': { icon: 'diversity_3', className: 'bg-surface-container text-on-surface-variant', filter: 'lainnya' },
  'Penyewa Kos': { className: 'bg-surface-container text-on-surface-variant', filter: 'lainnya' }
}

export const opsiBlok = [
  { value: 'A', label: 'Blok A (42 Rumah)' },
  { value: 'B', label: 'Blok B (38 Rumah)' },
  { value: 'C', label: 'Blok C (30 Rumah)' },
  { value: 'D', label: 'Blok D (22 Rumah)' }
]

export const opsiPeran = [
  { value: 'kk', label: 'Kepala Keluarga' },
  { value: 'istri', label: 'Istri' },
  { value: 'anak', label: 'Anak' },
  { value: 'lainnya', label: 'Famili Lain' }
]

export const opsiPekerjaan = [
  { value: 'karyawan', label: 'Karyawan Swasta' },
  { value: 'pns', label: 'ASN / TNI / Polri' },
  { value: 'wiraswasta', label: 'Wiraswasta' },
  { value: 'mahasiswa', label: 'Pelajar / Mahasiswa' },
  { value: 'pensiun', label: 'Pensiunan' },
  { value: 'lainnya', label: 'Lainnya / Mengurus RT' }
]

export const daftarWarga = [
  // KK Hendra Gunawan — Blok A2 No. 8
  { id: 1, nama: 'Ir. Hendra Gunawan', nik: '3171092809180004', noKK: '3171092809180004', alamat: 'Blok A2 No. 8', blok: 'A', peran: 'Kepala Keluarga', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Laki-laki', tempatLahir: 'Bandung', tglLahir: '1976-09-28', golDarah: 'O', pekerjaan: 'Insinyur Sipil', kategoriPekerjaan: 'karyawan' },
  { id: 2, nama: 'Dra. Endah Puspitasari', nik: '3171094102800002', noKK: '3171092809180004', alamat: 'Blok A2 No. 8', blok: 'A', peran: 'Istri', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Perempuan', tempatLahir: 'Solo', tglLahir: '1980-02-01', golDarah: 'B', pekerjaan: 'Guru SMA Negeri', kategoriPekerjaan: 'pns' },
  { id: 3, nama: 'Nn. Siti Sarah Gunawan', nik: '3171095505030008', noKK: '3171092809180004', alamat: 'Blok A2 No. 8', blok: 'A', peran: 'Anak', status: 'tetap', kepemilikan: 'Ikut Orang Tua', jk: 'Perempuan', tempatLahir: 'Jakarta', tglLahir: '2003-05-15', golDarah: 'O', pekerjaan: 'Mahasiswa Univ. UI', kategoriPekerjaan: 'mahasiswa' },
  { id: 4, nama: 'Ananda Fikri Gunawan', nik: '3171091210080005', noKK: '3171092809180004', alamat: 'Blok A2 No. 8', blok: 'A', peran: 'Anak', status: 'tetap', kepemilikan: 'Ikut Orang Tua', jk: 'Laki-laki', tempatLahir: 'Jakarta', tglLahir: '2008-10-12', golDarah: 'B', pekerjaan: 'Pelajar SMP', kategoriPekerjaan: 'mahasiswa' },

  // KK Joko Susilo — Blok B3 No. 12
  { id: 5, nama: 'Bpk. Joko Susilo', nik: '3171091504780002', noKK: '3171091504780002', alamat: 'Blok B3 No. 12', blok: 'B', peran: 'Kepala Keluarga', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Laki-laki', tempatLahir: 'Klaten', tglLahir: '1978-04-15', golDarah: 'A', pekerjaan: 'Pedagang Grosir', kategoriPekerjaan: 'wiraswasta' },
  { id: 6, nama: 'Ibu Sri Lestari', nik: '3171095708810003', noKK: '3171091504780002', alamat: 'Blok B3 No. 12', blok: 'B', peran: 'Istri', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Perempuan', tempatLahir: 'Klaten', tglLahir: '1981-08-17', golDarah: 'A', pekerjaan: 'Mengurus Rumah Tangga', kategoriPekerjaan: 'lainnya' },
  { id: 7, nama: 'Dimas Aji Susilo', nik: '3171090311060004', noKK: '3171091504780002', alamat: 'Blok B3 No. 12', blok: 'B', peran: 'Anak', status: 'tetap', kepemilikan: 'Ikut Orang Tua', jk: 'Laki-laki', tempatLahir: 'Jakarta', tglLahir: '2006-11-03', golDarah: 'A', pekerjaan: 'Pelajar SMA', kategoriPekerjaan: 'mahasiswa' },

  // KK Slamet Riyadi — Blok A1 No. 05
  { id: 8, nama: 'Bpk. Slamet Riyadi', nik: '3171091201830001', noKK: '3171091201830001', alamat: 'Blok A1 No. 05', blok: 'A', peran: 'Kepala Keluarga', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Laki-laki', tempatLahir: 'Semarang', tglLahir: '1983-01-12', golDarah: 'AB', pekerjaan: 'ASN Pemkot', kategoriPekerjaan: 'pns' },
  { id: 9, nama: 'Ibu Ratna Wulandari', nik: '3171096208840003', noKK: '3171091201830001', alamat: 'Blok A1 No. 05', blok: 'A', peran: 'Istri', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Perempuan', tempatLahir: 'Yogyakarta', tglLahir: '1984-08-22', golDarah: 'O', pekerjaan: 'Staf Bank Swasta', kategoriPekerjaan: 'karyawan' },

  // Warga kontrak / kos
  { id: 10, nama: 'Sdr. Muhammad Rifki', nik: '3273011409990007', noKK: '3273011409990007', alamat: 'Kost Paviliun C2', asal: 'Kota Bandung', blok: 'C', peran: 'Penyewa Kos', status: 'kontrak', kepemilikan: 'Sewa Bulanan', jk: 'Laki-laki', tempatLahir: 'Bandung', tglLahir: '1999-09-14', golDarah: 'A', pekerjaan: 'Programmer Startup', kategoriPekerjaan: 'karyawan' },
  { id: 11, nama: 'Ny. Dewi Anggraini', nik: '3201026503950002', noKK: '3201022203950001', alamat: 'Kontrakan B1 No. 4', asal: 'Kab. Bogor', blok: 'B', peran: 'Penyewa Kos', status: 'kontrak', kepemilikan: 'Kontrak Tahunan', jk: 'Perempuan', tempatLahir: 'Bogor', tglLahir: '1995-03-25', golDarah: 'B', pekerjaan: 'Perawat RS Swasta', kategoriPekerjaan: 'karyawan' },

  // KK Ahmad Dahlan — Blok D1 No. 02
  { id: 12, nama: 'Bpk. Ahmad Dahlan', nik: '3171091212650001', noKK: '3171091212650001', alamat: 'Blok D1 No. 02', blok: 'D', peran: 'Kepala Keluarga', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Laki-laki', tempatLahir: 'Surabaya', tglLahir: '1965-12-12', golDarah: 'B', pekerjaan: 'Pensiunan BUMN', kategoriPekerjaan: 'pensiun' },
  { id: 13, nama: 'Hj. Siti Aminah', nik: '3171094706680002', noKK: '3171091212650001', alamat: 'Blok D1 No. 02', blok: 'D', peran: 'Istri', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Perempuan', tempatLahir: 'Gresik', tglLahir: '1968-06-07', golDarah: 'O', pekerjaan: 'Mengurus Rumah Tangga', kategoriPekerjaan: 'lainnya' },
  { id: 14, nama: 'Ibu Nur Halimah', nik: '3171095001420001', noKK: '3171091212650001', alamat: 'Blok D1 No. 02', blok: 'D', peran: 'Famili Lain', status: 'tetap', kepemilikan: 'Ikut Keluarga', jk: 'Perempuan', tempatLahir: 'Gresik', tglLahir: '1942-01-10', golDarah: 'O', pekerjaan: 'Tidak Bekerja', kategoriPekerjaan: 'lainnya' },

  // KK Bambang Sutrisno — Blok A3 No. 08
  { id: 15, nama: 'Bpk. Bambang Sutrisno', nik: '3171092006720003', noKK: '3171092006720003', alamat: 'Blok A3 No. 08', blok: 'A', peran: 'Kepala Keluarga', status: 'tetap', kepemilikan: 'Milik Sendiri', jk: 'Laki-laki', tempatLahir: 'Malang', tglLahir: '1972-06-20', golDarah: 'A', pekerjaan: 'Anggota TNI AD', kategoriPekerjaan: 'pns' },

  // Pindah / mutasi & meninggal
  { id: 16, nama: 'Bpk. Yusuf Maulana', nik: '3171090807870004', noKK: '3171090807870004', alamat: 'Blok C3 No. 10', blok: 'C', peran: 'Kepala Keluarga', status: 'pindah', kepemilikan: 'Pindah ke Depok', jk: 'Laki-laki', tempatLahir: 'Cirebon', tglLahir: '1987-07-08', golDarah: 'B', pekerjaan: 'Karyawan Swasta', kategoriPekerjaan: 'karyawan' },
  { id: 17, nama: 'Alm. Bpk. Suparman', nik: '3171090503480001', noKK: '3171090503480001', alamat: 'Blok D2 No. 07', blok: 'D', peran: 'Kepala Keluarga', status: 'meninggal', kepemilikan: 'Milik Sendiri', jk: 'Laki-laki', tempatLahir: 'Madiun', tglLahir: '1948-03-05', golDarah: 'O', pekerjaan: 'Pensiunan Guru', kategoriPekerjaan: 'pensiun' }
]

export const inisial = (nama) =>
  nama
    .replace(/^((Ir|Dra|Dr|Bpk|Ibu|Ny|Nn|Sdr|Hj|H|Alm)\.?\s+)+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map((kata) => kata[0])
    .join('')
    .toUpperCase()

export const umur = (tglLahir, kini = new Date()) => {
  const lahir = new Date(tglLahir)
  let u = kini.getFullYear() - lahir.getFullYear()
  if (kini < new Date(kini.getFullYear(), lahir.getMonth(), lahir.getDate())) u -= 1
  return u
}

export const formatTanggal = (tglLahir) => tglLahir.split('-').reverse().join('-')
