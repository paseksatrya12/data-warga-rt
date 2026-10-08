import { statusDomisili, opsiBlok, opsiPeran, opsiPekerjaan } from '../../data/warga'

const badgeTab = {
  semua: 'bg-primary/10 text-primary font-bold',
  kontrak: 'bg-tertiary-fixed text-tertiary-container font-semibold'
}

const selectClass =
  'h-11 w-full cursor-pointer appearance-none rounded-xl bg-surface-container px-space-md text-body-md text-on-surface transition-all focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20'

export default function FilterWarga({ tab, onTab, jumlah, filter, onFilter, onReset }) {
  const tabs = [{ id: 'semua', label: 'Semua' }, ...Object.entries(statusDomisili).map(([id, s]) => ({ id, label: s.tab }))]
  const ubah = (field) => (e) => onFilter({ ...filter, [field]: e.target.value })

  return (
    <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-md pb-space-xs">
        <div className="max-w-full overflow-x-auto">
          <div className="inline-flex gap-1 rounded-xl bg-surface-container p-1">
            {tabs.map((t) => {
              const aktif = tab === t.id
              return (
                <button
                  key={t.id}
                  className={`flex items-center gap-space-xs whitespace-nowrap rounded-lg px-space-md py-space-xs text-label-md transition-all ${
                    aktif
                      ? 'bg-surface-container-lowest font-bold text-primary shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`}
                  onClick={() => onTab(t.id)}
                  type="button"
                >
                  <span>{t.label}</span>
                  <span
                    className={`rounded-full px-space-xs py-0.5 text-label-sm ${
                      badgeTab[t.id] ?? 'bg-surface-container-highest text-on-surface-variant'
                    }`}
                  >
                    {jumlah[t.id]}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
        <div className="flex items-center gap-space-sm text-label-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary"></span> {jumlah.tetap} Warga Tetap (Aktif Iuran)
          </span>
          <span className="ml-space-sm flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-tertiary-container"></span> {jumlah.kontrak} Domisili Sementara
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-space-sm pt-space-xs sm:grid-cols-2 lg:grid-cols-12">
        <div className="relative lg:col-span-4">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-title-md text-outline">search</span>
          <input
            className="h-11 w-full rounded-xl bg-surface-container pl-11 pr-space-md text-body-md text-on-surface transition-all placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20"
            onChange={ubah('cari')}
            placeholder="Cari NIK, Nama Warga, No Rumah..."
            type="text"
            value={filter.cari}
          />
        </div>
        <div className="lg:col-span-2">
          <select className={selectClass} onChange={ubah('blok')} value={filter.blok}>
            <option value="">Semua Blok Rumah</option>
            {opsiBlok.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <select className={selectClass} onChange={ubah('peran')} value={filter.peran}>
            <option value="">Status Hubungan KK</option>
            {opsiPeran.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <select className={selectClass} onChange={ubah('pekerjaan')} value={filter.pekerjaan}>
            <option value="">Status Pekerjaan</option>
            {opsiPekerjaan.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <button
            className="flex h-11 w-full items-center justify-center gap-space-xs rounded-xl bg-surface-container px-space-md text-label-md text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface"
            onClick={onReset}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">filter_alt_off</span>
            <span>Reset Filter</span>
          </button>
        </div>
      </div>
    </div>
  )
}
