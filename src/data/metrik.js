export const kasSuratCards = [
  {
    id: 'kas',
    label: 'Kas & Iuran Warga',
    icon: 'account_balance',
    iconBg: 'bg-primary-fixed-dim/40',
    iconColor: 'text-primary-container',
    prefix: 'Rp',
    value: '14.850.000',
    badgeText: 'Target 92% tercapai',
    suffix: '131 KK Lunas',
    barWidth: '92%',
    barColor: 'bg-primary-container'
  },
  {
    id: 'surat',
    label: 'Pengajuan Surat',
    icon: 'mark_email_unread',
    iconBg: 'bg-tertiary-fixed',
    iconColor: 'text-tertiary',
    value: '6',
    valueClass: 'text-tertiary',
    unit: 'Menunggu TTD',
    badgeText: 'Perlu Persetujuan',
    badgeIcon: 'priority_high',
    action: 'Proses →',
    barWidth: '45%',
    barColor: 'bg-tertiary'
  }
]

export const usiaSegments = [
  { width: '12%', className: 'bg-secondary-fixed rounded-l-full', title: 'Balita: 12%' },
  { width: '18%', className: 'bg-secondary-fixed-dim', title: 'Anak-anak: 18%' },
  { width: '55%', className: 'bg-primary', title: 'Produktif 18-50 thn: 55%' },
  { width: '15%', className: 'bg-tertiary-fixed-dim rounded-r-full', title: 'Lansia: 15%' }
]

export const usiaCards = [
  { nama: 'Balita (0-5 thn)', persen: '12%', jiwa: '58 Jiwa', ket: 'Posyandu Melati', dot: 'bg-secondary-fixed' },
  { nama: 'Anak (6-17 thn)', persen: '18%', jiwa: '87 Jiwa', ket: 'Usia Sekolah', dot: 'bg-secondary-fixed-dim' },
  { nama: 'Produktif (18-50 thn)', persen: '55%', jiwa: '268 Jiwa', ket: 'Mayoritas Penggerak', dot: 'bg-primary', highlight: true },
  { nama: 'Lansia (>50 thn)', persen: '15%', jiwa: '73 Jiwa', ket: 'Lansia Siaga', dot: 'bg-tertiary-fixed-dim' }
]

export const pekerjaan = [
  { nama: 'Karyawan Swasta', detail: '164 Orang (34%)', width: '34%', bar: 'bg-primary', text: 'text-primary' },
  { nama: 'PNS / BUMN', detail: '92 Orang (19%)', width: '19%', bar: 'bg-secondary', text: 'text-secondary' },
  { nama: 'Wirausaha / Pedagang', detail: '81 Orang (17%)', width: '17%', bar: 'bg-tertiary-container', text: 'text-tertiary-container' },
  { nama: 'Mahasiswa / Pelajar', detail: '74 Orang (15%)', width: '15%', bar: 'bg-outline-variant', text: 'text-on-surface-variant' }
]
