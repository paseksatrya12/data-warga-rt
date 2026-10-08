import { logKeamanan } from '../../data/keuangan'

export default function LogKeamanan({ onLihatSop }) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-7">
      <div>
        <div className="mb-space-sm flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <span className="flex items-center justify-center rounded-xl bg-tertiary-container p-2 text-on-tertiary">
              <span className="material-symbols-outlined text-title-md">notifications_active</span>
            </span>
            <div>
              <h3 className="text-title-lg text-on-background">Log Pelaporan Cepat & Keamanan</h3>
              <span className="text-body-sm text-on-surface-variant">Integrasi Tombol Darurat & Pantauan Patroli Portal</span>
            </div>
          </div>
          <span className="rounded-full bg-secondary-container px-space-sm py-1 text-label-sm font-semibold text-on-secondary-container">
            Pos Siaga 24 Jam
          </span>
        </div>
        <div className="mt-space-md flex flex-col gap-space-sm">
          {logKeamanan.map((log) => (
            <div key={log.id} className="flex items-start gap-space-md rounded-xl bg-surface-container-low p-space-sm">
              <span className={`material-symbols-outlined mt-0.5 text-title-lg ${log.iconClass}`}>{log.icon}</span>
              <div className="flex flex-1 flex-col">
                <div className="flex flex-wrap items-center justify-between gap-x-space-sm">
                  <span className="text-label-md font-bold text-on-surface">{log.judul}</span>
                  <span className="text-label-sm text-on-surface-variant">{log.waktu}</span>
                </div>
                <span className="text-body-sm text-on-surface-variant">{log.deskripsi}</span>
                <div className="mt-space-xs flex flex-wrap items-center gap-space-sm">
                  <span className={`rounded px-space-xs py-0.5 text-label-sm font-semibold ${log.badgeClass}`}>{log.badge}</span>
                  <span className={`text-label-sm ${log.catatanClass}`}>{log.catatan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md flex flex-wrap items-center justify-between gap-space-sm rounded-xl bg-surface-container-high/60 p-space-sm">
        <div className="flex items-center gap-space-xs text-body-sm text-on-surface">
          <span className="material-symbols-outlined text-title-md text-primary">call</span>
          <span>
            Kontak Cepat Pos Ronda RT:{' '}
            <a className="font-semibold text-primary hover:underline" href="tel:081234567890">
              0812-3456-7890 (Pak Joko)
            </a>
          </span>
        </div>
        <button
          className="rounded-lg bg-surface-container-lowest px-space-sm py-1 text-label-sm text-on-surface hover:bg-surface-container"
          onClick={onLihatSop}
          type="button"
        >
          Lihat SOP Ronda
        </button>
      </div>
    </div>
  )
}
