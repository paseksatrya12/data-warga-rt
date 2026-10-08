function hitungMetrik(warga) {
  const aktif = warga.filter((w) => w.status === 'tetap' || w.status === 'kontrak')
  const kontrak = warga.filter((w) => w.status === 'kontrak').length
  const pindah = warga.filter((w) => w.status === 'pindah').length
  const jumlahKK = new Set(aktif.map((w) => w.noKK)).size

  const awalBulan = new Date()
  awalBulan.setDate(1)
  awalBulan.setHours(0, 0, 0, 0)
  const baruBulanIni = aktif.filter((w) => w.createdAt && new Date(w.createdAt) >= awalBulan).length

  const rasioKontrak = aktif.length ? (kontrak / aktif.length) * 100 : 0
  const rerata = jumlahKK ? aktif.length / jumlahKK : 0

  return [
    {
      id: 'jiwa',
      label: 'Total Jiwa Terdata',
      icon: 'groups',
      iconClass: 'bg-secondary-container/40 text-secondary',
      value: aktif.length,
      badge: `+${baruBulanIni} bulan ini`,
      badgeClass: 'bg-secondary-container text-secondary',
      bar: { width: aktif.length ? '100%' : '0%', className: 'bg-primary' }
    },
    {
      id: 'kk',
      label: 'Kepala Keluarga (KK)',
      icon: 'home',
      iconClass: 'bg-primary-fixed text-primary',
      value: jumlahKK,
      unit: 'Keluarga',
      metaLeft: `Rerata: ${rerata.toLocaleString('id-ID', { maximumFractionDigits: 1 })} jiwa/rumah`,
      metaRight: 'Data Supabase'
    },
    {
      id: 'kontrak',
      label: 'Warga Kontrak / Kos',
      icon: 'apartment',
      iconClass: 'bg-tertiary-fixed text-tertiary',
      value: kontrak,
      valueClass: 'text-tertiary-container',
      badge: `${rasioKontrak.toLocaleString('id-ID', { maximumFractionDigits: 1 })}% Rasio`,
      badgeClass: 'bg-tertiary-fixed text-tertiary',
      bar: { width: `${rasioKontrak}%`, className: 'bg-tertiary-container' }
    },
    {
      id: 'mutasi',
      label: 'Mutasi & Pindah',
      icon: 'transfer_within_a_station',
      iconClass: 'bg-surface-container-highest text-outline',
      value: pindah,
      unit: 'Keluar Wilayah',
      metaLeft: 'Surat Pengantar terbit',
      metaRight: 'Semua Tuntas'
    }
  ]
}

export default function WargaMetrik({ warga }) {
  return (
    <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 xl:grid-cols-4">
      {hitungMetrik(warga).map((m) => (
        <div key={m.id} className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-label-md font-medium text-on-surface-variant">{m.label}</span>
            <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${m.iconClass}`}>
              <span className="material-symbols-outlined text-title-md">{m.icon}</span>
            </span>
          </div>
          <div className="mt-space-sm flex items-baseline gap-space-sm">
            <span className={`text-headline-lg font-bold ${m.valueClass ?? 'text-on-surface'}`}>{m.value}</span>
            {m.badge ? (
              <span className={`rounded-full px-space-xs py-0.5 text-label-sm ${m.badgeClass}`}>{m.badge}</span>
            ) : (
              <span className="text-label-sm text-on-surface-variant">{m.unit}</span>
            )}
          </div>
          {m.bar ? (
            <div className="mt-space-xs h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
              <div className={`h-full rounded-full ${m.bar.className}`} style={{ width: m.bar.width }}></div>
            </div>
          ) : (
            <div className="mt-space-xs flex items-center justify-between text-label-sm text-on-surface-variant">
              <span>{m.metaLeft}</span>
              <span className="font-semibold text-secondary">{m.metaRight}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
