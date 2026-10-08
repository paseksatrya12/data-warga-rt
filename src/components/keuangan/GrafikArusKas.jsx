import { arusKas } from '../../data/keuangan'

export default function GrafikArusKas() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-7">
      <div className="mb-space-md flex flex-wrap items-center justify-between gap-space-sm">
        <div className="flex flex-col">
          <h2 className="text-title-lg text-on-background">Tren Transparansi Arus Kas</h2>
          <span className="text-body-sm text-on-surface-variant">Komparasi Pemasukan vs Pengeluaran 6 Bulan Terakhir</span>
        </div>
        <div className="flex items-center gap-space-md text-label-sm">
          <div className="flex items-center gap-space-xs">
            <span className="h-3 w-3 rounded-full bg-primary"></span>
            <span className="text-on-surface-variant">Pemasukan</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <span className="h-3 w-3 rounded-full bg-tertiary-container"></span>
            <span className="text-on-surface-variant">Pengeluaran</span>
          </div>
        </div>
      </div>

      <div className="flex h-56 w-full items-end justify-between px-space-xs pt-space-md">
        {arusKas.map((b) => (
          <div key={b.bulan} className="group flex h-full flex-1 flex-col items-center justify-end gap-space-xs">
            <div className="flex h-40 items-end gap-1.5">
              <div
                title={`Pemasukan ${b.bulan}: ${b.masuk}%`}
                className={`w-4 rounded-t-lg transition-all lg:w-5 ${b.aktif ? 'bg-primary shadow-sm' : 'bg-primary/75 group-hover:bg-primary'}`}
                style={{ height: `${b.masuk}%` }}
              ></div>
              <div
                title={`Pengeluaran ${b.bulan}: ${b.keluar}%`}
                className={`w-4 rounded-t-lg transition-all lg:w-5 ${b.aktif ? 'bg-tertiary-container shadow-sm' : 'bg-tertiary-container/70 group-hover:bg-tertiary-container'}`}
                style={{ height: `${b.keluar}%` }}
              ></div>
            </div>
            <span className={`text-label-sm ${b.aktif ? 'font-bold text-primary' : 'text-on-surface-variant'}`}>{b.bulan}</span>
          </div>
        ))}
      </div>

      <div className="mt-space-sm flex flex-wrap items-center justify-between gap-space-xs rounded-xl bg-surface-container-low p-space-sm text-body-sm text-on-surface-variant">
        <span>
          Rata-rata surplus bulanan kas RT: <b className="font-semibold text-on-surface">Rp 3.120.000</b>
        </span>
        <span className="flex items-center gap-0.5 text-label-sm text-secondary">
          <span className="material-symbols-outlined text-body-md">trending_up</span>+12.4% vs semester lalu
        </span>
      </div>
    </div>
  )
}
