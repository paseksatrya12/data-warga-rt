import { navItems } from '../data/navigasi'

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-full w-72 flex-col justify-between bg-surface-container-low p-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)] lg:flex">
      <div className="flex flex-col gap-space-lg">
        <div className="flex items-center gap-space-sm px-space-xs">
          <img
            alt="Logo WargaHub RT"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida/AEtjO1Vyi37SFblnQWcSnsJziBNU7ta_niJPdqbWdkgCzVoyoJJwpx8fRxG55ioTIBXA9ENUGOlqH7WQFhpbnAAqcqXAh6bD0_H66HRtwDMrka2ov1wRPHSwutsm462QrDu2wNKq-q0l5sr_5jLFiAQLdvi8SG5OW8kJSFrRVQqRav-E53kyER6O3LiT1Mf3cm5_rOpBO9nuYaK_30HPMWCzJvD_sI98YqonZ_qbXGszKj6AKA"
          />
          <div className="flex flex-col">
            <span className="text-headline-sm font-bold tracking-tight text-primary">WargaHub</span>
            <span className="text-label-sm uppercase tracking-wider text-on-surface-variant">Sistem RT Digital</span>
          </div>
        </div>

        <div className="flex items-center gap-space-sm rounded-xl bg-surface-container-highest px-space-md py-space-xs shadow-[0_1px_3px_0_rgba(31,41,55,0.05)]">
          <span className="material-symbols-outlined text-title-md text-primary">domain</span>
          <div className="flex flex-col">
            <span className="text-label-md font-semibold text-on-surface">RT 04 / RW 07</span>
            <span className="text-body-sm text-on-surface-variant">Kel. Sukamaju</span>
          </div>
        </div>

        <nav className="flex flex-col gap-space-xs">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(item.id)
              }}
              aria-current={item.id === activePage ? 'page' : undefined}
              className={
                item.id === activePage
                  ? 'flex items-center gap-space-md rounded-xl bg-primary-container px-space-md py-space-sm font-semibold text-on-primary-container shadow-[0_4px_6px_-1px_rgba(53,159,160,0.08)] transition-all'
                  : 'flex items-center gap-space-md rounded-xl px-space-md py-space-sm text-label-lg text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface'
              }
            >
              <span className="material-symbols-outlined text-title-md">{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-space-md pt-space-md">
        <div className="flex items-center justify-between rounded-xl bg-surface-container p-space-md shadow-[0_1px_3px_0_rgba(31,41,55,0.05)]">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined animate-pulse text-title-md text-tertiary-container">campaign</span>
            <div className="flex flex-col">
              <span className="text-label-md font-semibold text-on-surface">Pos Ronda Cepat</span>
              <span className="text-body-sm text-on-surface-variant">Siaga 24 Jam</span>
            </div>
          </div>
          <span className="rounded-full bg-tertiary-container px-space-sm py-space-xs text-label-sm font-bold text-on-tertiary-container">Aktif</span>
        </div>
        <div className="flex items-center justify-between px-space-xs text-label-sm text-on-surface-variant">
          <span>v2.4.0 RT Presisi</span>
          <span className="flex items-center gap-space-xs font-medium text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary"></span>Terkoneksi
          </span>
        </div>
      </div>
    </aside>
  )
}
