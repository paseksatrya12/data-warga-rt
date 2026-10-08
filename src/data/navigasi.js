export const navItems = [
  { id: 'dasbor', label: 'Dasbor & Statistik', icon: 'dashboard' },
  { id: 'warga', label: 'Data Warga & KK', icon: 'badge' },
  { id: 'surat', label: 'Layanan Surat', icon: 'mark_email_read' },
  { id: 'keuangan', label: 'Keuangan & Ronda', icon: 'account_balance_wallet' }
]

export const kpiCards = [
  {
    id: 'penduduk',
    label: 'Total Penduduk Terdata',
    icon: 'groups',
    iconBg: 'bg-primary-fixed',
    iconColor: 'text-primary',
    value: '486',
    unit: 'Jiwa',
    badgeIcon: 'trending_up',
    badgeText: '+8 Warga Baru',
    badgeBg: 'bg-secondary-container',
    badgeColor: 'text-secondary',
    suffix: 'Bulan ini',
    barWidth: '78%',
    barColor: 'bg-primary'
  },
  {
    id: 'kk',
    label: 'Kepala Keluarga (KK)',
    icon: 'family_restroom',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-secondary',
    value: '142',
    unit: 'KK',
    metaLeft: 'Rata-rata 3,42 jiwa/KK',
    metaRight: '100% Valid',
    barWidth: '90%',
    barColor: 'bg-secondary'
  }
]
