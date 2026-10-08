import { pekerjaan } from '../data/metrik'

export default function DemografiGender() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-5">
      <div>
        <span className="text-label-sm font-bold uppercase tracking-wider text-secondary">Rasio & Profesi</span>
        <h2 className="text-headline-sm font-bold text-on-surface">Gender & Mata Pencaharian</h2>
        <div className="mt-space-md grid grid-cols-2 items-center gap-space-md rounded-xl bg-surface-container-low p-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-on-primary">
              <span className="material-symbols-outlined text-title-md">male</span>
            </div>
            <div className="flex flex-col">
              <span className="text-label-sm text-on-surface-variant">Laki-laki</span>
              <span className="text-title-lg font-bold text-on-surface">248</span>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-container text-secondary">
              <span className="material-symbols-outlined text-title-md">female</span>
            </div>
            <div className="flex flex-col">
              <span className="text-label-sm text-on-surface-variant">Perempuan</span>
              <span className="text-title-lg font-bold text-on-surface">238</span>
            </div>
          </div>
        </div>
        <div className="mt-space-lg flex flex-col gap-space-sm">
          <span className="text-label-md font-bold text-on-surface">Top 4 Pekerjaan Warga:</span>
          {pekerjaan.map((job) => (
            <div key={job.nama} className="flex flex-col gap-1">
              <div className="flex justify-between text-body-sm">
                <span className="font-medium text-on-surface">{job.nama}</span>
                <span className={`font-semibold ${job.text}`}>{job.detail}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
                <div className={`h-full rounded-full ${job.bar}`} style={{ width: job.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md flex items-center justify-between rounded-xl bg-surface-container-low p-space-md">
        <div className="flex flex-col">
          <span className="text-label-sm font-semibold uppercase text-on-surface-variant">Domisili KK</span>
          <div className="mt-1 flex items-center gap-space-md">
            <span className="text-label-lg text-on-surface"><span className="font-bold text-primary">118 KK</span> Tetap</span>
            <span className="text-label-lg text-on-surface"><span className="font-bold text-tertiary">24 KK</span> Kost</span>
          </div>
        </div>
        <div className="flex h-8 items-center rounded-full bg-surface-container px-3 text-label-sm font-bold text-on-surface-variant">83% Milik</div>
      </div>
    </div>
  )
}
