export const kasMetrik = [
  {
    id: 'saldo',
    label: 'Saldo Kas Berjalan',
    icon: 'account_balance',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-secondary',
    value: 'Rp 18.450.000',
    valueClass: 'text-on-background',
    metaIcon: 'verified_user',
    metaText: 'Kas RT 04 Tertib & Sehat',
    metaClass: 'text-secondary',
    decor: true
  },
  {
    id: 'pemasukan',
    label: 'Pemasukan Maret',
    icon: 'arrow_downward',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    value: 'Rp 7.200.000',
    valueClass: 'text-primary',
    metaStrong: '92.5%',
    metaText: 'target iuran bulanan terkumpul',
    metaClass: 'text-on-surface-variant'
  },
  {
    id: 'pengeluaran',
    label: 'Pengeluaran Maret',
    icon: 'arrow_upward',
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-tertiary',
    value: 'Rp 3.450.000',
    valueClass: 'text-tertiary',
    metaIcon: 'info',
    metaIconClass: 'text-body-sm text-tertiary',
    metaText: 'Surplus bersih: +Rp 3.750.000',
    metaClass: 'text-on-surface-variant'
  }
]

export const arusKas = [
  { bulan: 'Okt', masuk: 65, keluar: 40 },
  { bulan: 'Nov', masuk: 72, keluar: 48 },
  { bulan: 'Des', masuk: 85, keluar: 60 },
  { bulan: 'Jan', masuk: 70, keluar: 35 },
  { bulan: 'Feb', masuk: 78, keluar: 42 },
  { bulan: 'Mar', masuk: 90, keluar: 45, aktif: true }
]

export const iuranBlok = [
  { blok: 'Blok A (Jl. Flamboyan Utama)', lunas: 38, total: 40 },
  { blok: 'Blok B (Jl. Melati Barat)', lunas: 35, total: 38 },
  { blok: 'Blok C (Jl. Dahlia Tengah)', lunas: 29, total: 33 },
  { blok: 'Blok D (Jl. Cempaka Timur)', lunas: 30, total: 32 }
]

export const kategoriTransaksi = {
  'Iuran Warga': 'bg-secondary-container text-on-secondary-container',
  'Operasional RT': 'bg-surface-container text-on-surface-variant',
  'Sarana Keamanan': 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
}

export const mutasiAwal = [
  {
    id: 1,
    waktu: '12 Mar 2025 · 09:15 WIB',
    judul: 'Iuran Sampah & Keamanan Bulan Maret',
    detail: 'Bpk. Bambang Sutrisno — Blok A3/08 (Transfer BCA)',
    kategori: 'Iuran Warga',
    nominal: 50000,
    status: 'Lunas Otomatis'
  },
  {
    id: 2,
    waktu: '10 Mar 2025 · 16:40 WIB',
    judul: 'Honor Petugas Kebersihan & Angkut Sampah',
    detail: 'Pencairan Operasional Minggu ke-2 (Pak Joko & Pak Yanto)',
    kategori: 'Operasional RT',
    nominal: -750000,
    status: 'Kuitansi Terlampir'
  },
  {
    id: 3,
    waktu: '08 Mar 2025 · 19:20 WIB',
    judul: 'Pembelian Lampu PJU & Perkabelan Pos Ronda',
    detail: 'Penggantian 2 titik penerangan redup di Gang C (Toko Sinar Terang)',
    kategori: 'Sarana Keamanan',
    nominal: -300000,
    status: 'Nota Toko Valid'
  }
]

// status: 'selesai' | 'malam-ini' | 'mendatang'
export const jadwalRonda = [
  { hari: 'Senin', regu: 'Regu 1', koord: 'Pak Herman (A1)', anggota: ['Bpk. Agus Salim', 'Bpk. Dedi Kusuma', 'Bpk. Rizal Fahri'], status: 'selesai' },
  { hari: 'Selasa', regu: 'Regu 2', koord: 'Pak Bowo (B2)', anggota: ['Bpk. Surya Dinata', 'Bpk. Eko Prasetyo', 'Bpk. Farhan Ali'], status: 'selesai' },
  { hari: 'Rabu', regu: 'Regu 3', koord: 'Pak Bambang (A3)', anggota: ['Bpk. Teguh Wibowo', 'Bpk. Ilham Habibie', 'Bpk. Wahyu Utomo'], status: 'malam-ini' },
  { hari: 'Kamis', regu: 'Regu 4', koord: 'Pak Sukirno (C1)', anggota: ['Bpk. Aris Munandar', 'Bpk. Dimas Pandu', 'Bpk. Hidayat'], status: 'mendatang' },
  { hari: 'Jumat', regu: 'Regu 5', koord: 'Pak Arif (C3)', anggota: ['Bpk. Taufik Gunawan', 'Bpk. Indra Jaya', 'Bpk. Rahmat Efendi'], status: 'mendatang' },
  { hari: 'Sabtu', regu: 'Regu 6', koord: 'Pak Rudi (D1)', anggota: ['Bpk. Guntur Pratama', 'Bpk. Yoga Ananda', 'Bpk. Dani Setiawan'], status: 'mendatang' },
  { hari: 'Minggu', regu: 'Regu 7', koord: 'Pak Hendra (D2)', anggota: ['Bpk. Zulkifli', 'Bpk. Gilang Ramadhan', 'Bpk. Anshar Fauzi'], status: 'mendatang' }
]

export const logKeamanan = [
  {
    id: 1,
    icon: 'report_problem',
    iconClass: 'text-tertiary-container',
    judul: 'Lampu Jalan Mati di Depan Blok D4',
    waktu: 'Kemarin, 21:10 WIB',
    deskripsi: 'Dilaporkan oleh Bpk. Yoga. Tim teknis RT dijadwalkan mengganti bohlam saat kerja bakti.',
    badge: 'Tindak Lanjut',
    badgeClass: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    catatan: 'Ditugaskan ke: Sie Sarana',
    catatanClass: 'text-secondary'
  },
  {
    id: 2,
    icon: 'verified_user',
    iconClass: 'text-secondary',
    judul: 'Pintu Gerbang Portal Malam Terkunci Aman',
    waktu: 'Tadi Malam, 23:05 WIB',
    deskripsi: 'Portal utama ditutup tepat waktu sesuai SOP jam malam RT 04. Gembok & rantai terverifikasi baik.',
    badge: 'Ronda Terverifikasi',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    catatan: 'Oleh: Regu 2 (Pak Surya)',
    catatanClass: 'text-on-surface-variant'
  }
]

export const agendaWarga = [
  {
    id: 1,
    tanggal: '16 MAR',
    judul: 'Kerja Bakti Bersama',
    jam: '07:00 WIB',
    deskripsi: 'Pembersihan saluran air (drainase) menjelang musim hujan dan perapian dahan pohon di sepanjang Gang Melati.',
    lokasi: { icon: 'pin_drop', text: 'Pos Ronda RT 04' },
    peserta: { icon: 'groups', text: 'Semua KK' },
    sorot: true
  },
  {
    id: 2,
    tanggal: '22 MAR',
    judul: 'Rapat Pengurus & Evaluasi',
    jam: '19:30 WIB',
    deskripsi: 'Laporan pertanggungjawaban kas triwulan I tahun 2025 bersama Ketua RW dan perwakilan tokoh masyarakat.',
    lokasi: { icon: 'home', text: 'Rumah Ketua RT' },
    peserta: { icon: 'badge', text: 'Pengurus RT' }
  }
]

export const formatRupiah = (n) =>
  `${n < 0 ? '-' : '+'}Rp ${Math.abs(n).toLocaleString('id-ID')}`
