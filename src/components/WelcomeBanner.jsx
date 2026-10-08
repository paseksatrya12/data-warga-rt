export default function WelcomeBanner({ onCheckLog }) {
  return (
    <section className="relative overflow-hidden rounded-xl bg-tertiary-fixed/30 p-space-lg shadow-sm">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary-fixed/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-12 right-1/4 h-48 w-48 rounded-full bg-primary-fixed/30 blur-2xl"></div>
      <div className="relative z-10 flex flex-col justify-between gap-space-lg lg:flex-row lg:items-center">
        <div className="flex items-start gap-space-md">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary text-on-primary shadow-md">
            <span className="material-symbols-outlined text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>cottage</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="text-label-sm font-bold uppercase tracking-wider text-primary">Portal Administrasi Warga</span>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
              <span className="text-label-sm font-medium text-on-surface-variant">Minggu ke-2, Maret 2025</span>
            </div>
            <h1 className="mt-0.5 text-headline-md font-extrabold tracking-tight text-on-surface">
              Selamat Datang, Pak Budi di Dasbor RT 04 / RW 07
            </h1>
            <p className="mt-1 max-w-2xl text-body-md text-on-surface-variant">
              Sistem pantau presisi permukiman Kelurahan Sukamaju. Laporan kependudukan, iuran gotong-royong, dan keamanan lingkungan terpadu.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-space-md rounded-xl bg-surface-container-lowest/90 p-space-md shadow-md backdrop-blur-md sm:flex-row sm:items-center">
          <div className="flex items-center gap-space-sm pr-space-md">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-container text-secondary">
              <span className="material-symbols-outlined text-title-lg">verified_user</span>
              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-label-sm font-bold uppercase tracking-wider text-on-surface-variant">Status Panic Button</span>
              <span className="text-label-lg font-bold text-secondary">Aman (Nir-Bahaya Aktif)</span>
            </div>
          </div>
          <button
            onClick={onCheckLog}
            className="inline-flex items-center justify-center gap-space-xs rounded-lg bg-tertiary-container px-space-md py-space-sm text-label-lg text-on-tertiary-container shadow-sm transition-all duration-200 hover:bg-tertiary active:scale-95"
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">history_toggle_off</span>
            <span>Cek Log Darurat</span>
          </button>
        </div>
      </div>
    </section>
  )
}
