export const tabStatus = [
  { id: 'menunggu', label: 'Menunggu Persetujuan', badge: 'bg-tertiary-container text-on-tertiary font-bold' },
  { id: 'disetujui', label: 'Disetujui', badge: 'bg-secondary-container text-on-secondary-container font-bold' },
  { id: 'ditolak', label: 'Ditolak', badge: 'bg-error-container text-on-error-container font-bold' },
  { id: 'arsip', label: 'Arsip Selesai', badge: 'bg-surface-container-highest text-on-surface font-semibold' }
]

export const labelStatus = {
  menunggu: { text: 'Menunggu Approval', className: 'bg-tertiary-fixed text-tertiary-container', dot: 'bg-tertiary-container animate-pulse' },
  disetujui: { text: 'Diterbitkan', className: 'bg-secondary-container text-on-secondary-container', dot: 'bg-secondary' },
  ditolak: { text: 'Ditolak', className: 'bg-error-container text-on-error-container', dot: 'bg-error' },
  arsip: { text: 'Arsip Selesai', className: 'bg-surface-container-highest text-on-surface', dot: 'bg-outline' }
}

const RT = 'lingkungan RT 04 / RW 07 Kelurahan Sukamaju'

export const jenisSurat = {
  skck: {
    kategori: 'SKCK',
    judul: 'Surat Pengantar SKCK',
    judulResmi: 'SURAT PENGANTAR CATATAN KEPOLISIAN (SKCK)',
    keterangan: () =>
      `Nama tersebut di atas adalah benar-benar warga yang berdomisili menetap di ${RT}. Berdasarkan catatan dan pengamatan pengurus, yang bersangkutan berkelakuan baik, tidak sedang menjalani proses pidana, dan aktif bergotong royong di lingkungan.`,
    penutup:
      'Demikian surat pengantar ini dibuat dengan sebenar-benarnya untuk dipergunakan sebagai kelengkapan berkas pengurusan Surat Keterangan Catatan Kepolisian (SKCK) di Polsek Cilodong / Polres Metro Depok.'
  },
  usaha: {
    kategori: 'Domisili Usaha',
    judul: 'Surat Keterangan Domisili Usaha',
    judulResmi: 'SURAT KETERANGAN DOMISILI USAHA',
    keterangan: (s) =>
      `Nama tersebut di atas adalah benar warga ${RT} dan menjalankan usaha "${s.namaUsaha ?? '-'}" di alamat tersebut. Kegiatan usaha yang dijalankan tidak mengganggu ketertiban dan kenyamanan lingkungan.`,
    penutup:
      'Demikian surat keterangan ini dibuat dengan sebenar-benarnya untuk dipergunakan sebagai kelengkapan pengurusan perizinan usaha di Kelurahan Sukamaju.'
  },
  ktp: {
    kategori: 'Kependudukan',
    judul: 'Surat Pengantar Pembuatan KTP Baru',
    judulResmi: 'SURAT PENGANTAR PEMBUATAN KTP ELEKTRONIK',
    keterangan: () =>
      `Nama tersebut di atas adalah benar warga ${RT}, tercatat dalam Kartu Keluarga yang sah, dan telah memenuhi syarat usia wajib KTP Elektronik.`,
    penutup:
      'Demikian surat pengantar ini dibuat untuk dipergunakan sebagai kelengkapan perekaman KTP Elektronik di Kantor Kecamatan Cilodong / Disdukcapil Kota Depok.'
  },
  perdata: {
    kategori: 'Status Perdata',
    judul: 'Surat Keterangan Belum Menikah',
    judulResmi: 'SURAT KETERANGAN BELUM MENIKAH',
    keterangan: () =>
      `Nama tersebut di atas adalah benar warga ${RT}. Sepanjang pengetahuan pengurus dan berdasarkan data kependudukan RT, yang bersangkutan hingga saat ini berstatus belum pernah menikah.`,
    penutup: 'Demikian surat keterangan ini dibuat dengan sebenar-benarnya untuk dipergunakan sebagaimana mestinya.'
  },
  pindah: {
    kategori: 'Mutasi Warga',
    judul: 'Surat Pengantar Pindah Domisili (Keluar)',
    judulResmi: 'SURAT PENGANTAR PINDAH DOMISILI',
    keterangan: () =>
      `Nama tersebut di atas adalah benar warga ${RT} yang bermaksud pindah domisili keluar wilayah. Yang bersangkutan tidak memiliki tunggakan iuran maupun kewajiban lain terhadap lingkungan.`,
    penutup:
      'Demikian surat pengantar ini dibuat untuk dipergunakan sebagai kelengkapan pengurusan Surat Keterangan Pindah WNI di Kelurahan Sukamaju.'
  }
}

const KTP = { icon: 'badge', iconClass: 'text-primary', label: 'Foto KTP Elektronik', status: 'Terlampir (Jelas)', varian: 'ok' }
const KK = { icon: 'family_restroom', iconClass: 'text-primary', label: 'Salinan Kartu Keluarga', status: 'Terlampir (Jelas)', varian: 'ok' }
const IURAN = { icon: 'payments', iconClass: 'text-secondary', label: 'Iuran RT Mar 2025', status: 'Lunas Terverifikasi', varian: 'lunas' }

export const lampiranStandar = [KTP, IURAN]

export const daftarPengajuan = [
  {
    id: 1,
    jenis: 'skck',
    status: 'menunggu',
    nomor: '042/SP-RT04/III/2025',
    tanggal: '2025-03-20',
    diajukan: '2 jam lalu',
    diajukanPada: '2025-03-20T08:10',
    namaSingkat: 'Ahmad Fadhil',
    rumah: 'Blok B2 / 07',
    info: 'Pelamar Kerja',
    verif: { text: 'KTP & Iuran Valid', ok: true },
    pemohon: { nama: 'Ahmad Fadhil Pratama', nik: '3276021804980004', kk: '3276020509120011', tempatLahir: 'Depok', tglLahir: '1998-04-18', jk: 'Laki-laki', agama: 'Islam', pekerjaan: 'Karyawan Swasta', statusKawin: 'Belum Menikah', alamat: 'Jl. Kemang Dahlia Blok B2 No. 07' },
    keperluan: 'Persyaratan melamar pekerjaan sebagai Network Operations Engineer di PT Telkom Indonesia (Persero) Tbk.',
    lampiran: [KTP, IURAN]
  },
  {
    id: 2,
    jenis: 'usaha',
    status: 'menunggu',
    nomor: '043/SP-RT04/III/2025',
    tanggal: '2025-03-20',
    diajukan: '5 jam lalu',
    diajukanPada: '2025-03-20T05:05',
    namaSingkat: 'Ibu Sri Mulyani',
    rumah: 'Blok A4 / 15',
    info: 'Katering Berkah Rasa',
    verif: { text: 'Tinjau Foto Lokasi', ok: false },
    namaUsaha: 'Katering Berkah Rasa',
    pemohon: { nama: 'Sri Mulyani', nik: '3276024306750002', kk: '3276021103990005', tempatLahir: 'Klaten', tglLahir: '1975-06-03', jk: 'Perempuan', agama: 'Islam', pekerjaan: 'Wiraswasta', statusKawin: 'Kawin', alamat: 'Jl. Kemang Dahlia Blok A4 No. 15' },
    keperluan: 'Pengurusan Nomor Induk Berusaha (NIB) untuk usaha katering rumahan "Katering Berkah Rasa".',
    lampiran: [KTP, { icon: 'photo_camera', iconClass: 'text-tertiary-container', label: 'Foto Lokasi Usaha', status: 'Perlu Ditinjau', varian: 'tinjau' }, IURAN]
  },
  {
    id: 3,
    jenis: 'ktp',
    status: 'menunggu',
    nomor: '044/SP-RT04/III/2025',
    tanggal: '2025-03-19',
    diajukan: 'Kemarin, 16:45',
    diajukanPada: '2025-03-19T16:45',
    namaSingkat: 'Nadia Putri (Usia 17 Th)',
    rumah: 'Blok C1 / 03',
    info: 'Pemohon Pemula',
    verif: { text: 'KK Terverifikasi', ok: true },
    pemohon: { nama: 'Nadia Putri Ramadhani', nik: '3276024512070003', kk: '3276021408050009', tempatLahir: 'Depok', tglLahir: '2007-12-05', jk: 'Perempuan', agama: 'Islam', pekerjaan: 'Pelajar', statusKawin: 'Belum Menikah', alamat: 'Jl. Kemang Dahlia Blok C1 No. 03' },
    keperluan: 'Perekaman KTP Elektronik pertama sebagai pemohon pemula usia 17 tahun.',
    lampiran: [KK, IURAN]
  },
  {
    id: 4,
    jenis: 'perdata',
    status: 'menunggu',
    nomor: '045/SP-RT04/III/2025',
    tanggal: '2025-03-19',
    diajukan: 'Kemarin, 11:20',
    diajukanPada: '2025-03-19T11:20',
    namaSingkat: 'Dimas Anggoro',
    rumah: 'Blok D2 / 10',
    info: 'Keperluan: KPR Bank Mandiri',
    verif: { text: 'Lengkap', ok: true },
    pemohon: { nama: 'Dimas Anggoro Saputra', nik: '3276020911940006', kk: '3276021702100004', tempatLahir: 'Bandung', tglLahir: '1994-11-09', jk: 'Laki-laki', agama: 'Islam', pekerjaan: 'Karyawan BUMN', statusKawin: 'Belum Menikah', alamat: 'Jl. Kemang Dahlia Blok D2 No. 10' },
    keperluan: 'Persyaratan pengajuan Kredit Pemilikan Rumah (KPR) di Bank Mandiri.',
    lampiran: [KTP, IURAN]
  },
  {
    id: 5,
    jenis: 'pindah',
    status: 'menunggu',
    nomor: '046/SP-RT04/III/2025',
    tanggal: '2025-03-18',
    diajukan: '2 hari lalu',
    diajukanPada: '2025-03-18T09:30',
    namaSingkat: 'Bpk. Agus Setiawan',
    rumah: 'Blok B1 / 02',
    info: 'Tujuan: Kota Bekasi',
    verif: { text: 'Bebas Tunggakan RT', ok: false },
    pemohon: { nama: 'Agus Setiawan', nik: '3276021307800001', kk: '3276020802080002', tempatLahir: 'Purwokerto', tglLahir: '1980-07-13', jk: 'Laki-laki', agama: 'Islam', pekerjaan: 'Wiraswasta', statusKawin: 'Kawin', alamat: 'Jl. Kemang Dahlia Blok B1 No. 02' },
    keperluan: 'Pindah domisili sekeluarga (4 jiwa) ke Kota Bekasi mengikuti penempatan kerja.',
    lampiran: [KTP, KK, IURAN]
  },
  {
    id: 6,
    jenis: 'skck',
    status: 'disetujui',
    nomor: '041/SP-RT04/III/2025',
    tanggal: '2025-03-17',
    diajukan: '3 hari lalu',
    diajukanPada: '2025-03-17T10:00',
    namaSingkat: 'Rizky Hidayat',
    rumah: 'Blok C2 / 11',
    info: 'Pendaftaran CPNS',
    verif: { text: 'Terbit', ok: true },
    pemohon: { nama: 'Rizky Hidayat', nik: '3276022205000007', kk: '3276021912060003', tempatLahir: 'Depok', tglLahir: '2000-05-22', jk: 'Laki-laki', agama: 'Islam', pekerjaan: 'Belum Bekerja', statusKawin: 'Belum Menikah', alamat: 'Jl. Kemang Dahlia Blok C2 No. 11' },
    keperluan: 'Persyaratan pendaftaran seleksi CPNS Kementerian Keuangan tahun 2025.',
    lampiran: [KTP, IURAN]
  },
  {
    id: 7,
    jenis: 'usaha',
    status: 'disetujui',
    nomor: '040/SP-RT04/III/2025',
    tanggal: '2025-03-15',
    diajukan: '5 hari lalu',
    diajukanPada: '2025-03-15T13:00',
    namaSingkat: 'Bpk. Hasan Basri',
    rumah: 'Blok D1 / 05',
    info: 'Bengkel Motor Hasan Jaya',
    verif: { text: 'Terbit', ok: true },
    namaUsaha: 'Bengkel Motor Hasan Jaya',
    pemohon: { nama: 'Hasan Basri', nik: '3276020104720002', kk: '3276021005000001', tempatLahir: 'Padang', tglLahir: '1972-04-01', jk: 'Laki-laki', agama: 'Islam', pekerjaan: 'Wiraswasta', statusKawin: 'Kawin', alamat: 'Jl. Kemang Dahlia Blok D1 No. 05' },
    keperluan: 'Perpanjangan izin usaha bengkel sepeda motor.',
    lampiran: [KTP, IURAN]
  },
  {
    id: 8,
    jenis: 'perdata',
    status: 'ditolak',
    nomor: '039/SP-RT04/III/2025',
    tanggal: '2025-03-14',
    diajukan: '6 hari lalu',
    diajukanPada: '2025-03-14T19:15',
    namaSingkat: 'Yudi Prakoso',
    rumah: 'Blok A3 / 02',
    info: 'Keperluan: Administrasi Kantor',
    verif: { text: 'Data Tidak Sesuai', ok: false },
    catatanTolak: 'Status perkawinan di Kartu Keluarga tercatat "Kawin". Mohon lampirkan akta cerai atau perbarui data KK terlebih dahulu.',
    pemohon: { nama: 'Yudi Prakoso', nik: '3276021708890005', kk: '3276020603150002', tempatLahir: 'Semarang', tglLahir: '1989-08-17', jk: 'Laki-laki', agama: 'Kristen', pekerjaan: 'Karyawan Swasta', statusKawin: 'Belum Menikah', alamat: 'Jl. Kemang Dahlia Blok A3 No. 02' },
    keperluan: 'Kelengkapan administrasi tunjangan di kantor.',
    lampiran: [KTP, IURAN]
  },
  {
    id: 9,
    jenis: 'ktp',
    status: 'arsip',
    nomor: '037/SP-RT04/III/2025',
    tanggal: '2025-03-05',
    diajukan: '5 Mar 2025',
    diajukanPada: '2025-03-05T09:00',
    namaSingkat: 'Fajar Nugroho',
    rumah: 'Blok B4 / 08',
    info: 'KTP Sudah Terbit',
    verif: { text: 'Selesai', ok: true },
    pemohon: { nama: 'Fajar Nugroho', nik: '3276020302080004', kk: '3276021211040006', tempatLahir: 'Depok', tglLahir: '2008-02-03', jk: 'Laki-laki', agama: 'Islam', pekerjaan: 'Pelajar', statusKawin: 'Belum Menikah', alamat: 'Jl. Kemang Dahlia Blok B4 No. 08' },
    keperluan: 'Perekaman KTP Elektronik pertama sebagai pemohon pemula.',
    lampiran: [KK, IURAN]
  },
  {
    id: 10,
    jenis: 'pindah',
    status: 'arsip',
    nomor: '038/SP-RT04/III/2025',
    tanggal: '2025-03-08',
    diajukan: '8 Mar 2025',
    diajukanPada: '2025-03-08T14:20',
    namaSingkat: 'Ibu Lestari Handayani',
    rumah: 'Blok C3 / 06',
    info: 'Tujuan: Kota Bogor',
    verif: { text: 'Selesai', ok: true },
    pemohon: { nama: 'Lestari Handayani', nik: '3276025109830003', kk: '3276021507090004', tempatLahir: 'Bogor', tglLahir: '1983-09-11', jk: 'Perempuan', agama: 'Islam', pekerjaan: 'Guru Honorer', statusKawin: 'Kawin', alamat: 'Jl. Kemang Dahlia Blok C3 No. 06' },
    keperluan: 'Pindah domisili sekeluarga (3 jiwa) ke Kota Bogor.',
    lampiran: [KTP, KK, IURAN]
  }
]

export const infoLayanan = [
  { icon: 'mark_email_read', iconClass: 'bg-secondary-container text-secondary', nilai: '3 Menit', ket: 'Rata-rata persetujuan pengurus RT pada jam operasional' },
  { icon: 'receipt_long', iconClass: 'bg-tertiary-fixed text-tertiary-container', nilai: '98.4%', ket: 'Pemohon berstatus tertib administrasi iuran lingkungan' },
  { icon: 'account_balance', iconClass: 'bg-surface-container-highest text-primary', nilai: 'Kel. Sukamaju', ket: 'Terhubung dengan Sistem Pelayanan Terpadu Kelurahan' }
]

const ROMAWI = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']

export const nomorBerikutnya = (list, tanggal = new Date()) => {
  const urut = Math.max(0, ...list.map((s) => parseInt(s.nomor, 10))) + 1
  return `${String(urut).padStart(3, '0')}/SP-RT04/${ROMAWI[tanggal.getMonth()]}/${tanggal.getFullYear()}`
}

export const formatTanggalPanjang = (iso) =>
  new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
