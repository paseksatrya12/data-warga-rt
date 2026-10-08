import { usiaSegments, usiaCards } from '../data/metrik'

export default function DemografiUsia() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-7">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-label-sm font-bold uppercase tracking-wider text-primary">Piramida Kependudukan</span>
          <h2 className="text-headline-sm font-bold text-on-surface">Distribusi Rentang Usia Warga</h2>
        </div>
        <div className="flex items-center gap-space-xs rounded-lg bg-surface-container-low px-space-sm py-1">
          <span className="material-symbols-outlined text-title-md text-primary">bar_chart</span>
          <span className="text-label-sm font-semibold text-on-surface-variant">Aktif 2025</span>
        </div>
      </div>
      <div className="my-space-lg flex flex-col gap-space-md">
        <div className="flex h-5 w-full overflow-hidden rounded-full bg-surface-container p-0.5">
          {usiaSegments.map((seg) => (
            <div key={seg.title} className={`h-full ${seg.className}`} style={{ width: seg.width }} title={seg.title}></div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-space-md pt-space-xs sm:grid-cols-2">
          {usiaCards.map((item) => (
            <div key={item.nama} className="flex flex-col gap-1 rounded-lg bg-surface-container-low p-space-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-label-md font-semibold text-on-surface">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.dot}`}></span> {item.nama}
                </span>
                <span className="text-label-md font-bold text-on-surface">{item.persen}</span>
              </div>
              <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
                <span>{item.jiwa}</span>
                <span>{item.ket}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-space-sm rounded-lg bg-primary-fixed/20 p-space-sm text-body-sm text-on-surface">
        <span className="material-symbols-outlined text-title-md text-primary">lightbulb</span>
        <span>Kelompok usia produktif mendominasi 55%, sangat ideal untuk agenda kerja bakti.</span>
      </div>
    </div>
  )
}
