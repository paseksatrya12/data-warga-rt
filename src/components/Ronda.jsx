import { rondaMembers } from '../data/warta'

export default function Ronda() {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-5">
      <div>
        <div className="flex items-center justify-between pb-space-sm">
          <div className="flex items-center gap-space-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-container text-secondary">
              <span className="material-symbols-outlined text-title-md">security</span>
            </div>
            <div>
              <h2 className="text-headline-sm font-bold text-on-surface">Ronda Malam Ini</h2>
              <span className="text-body-sm text-on-surface-variant">Siskamling RT 04</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container px-2.5 py-1 text-label-sm font-bold text-secondary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary"></span> Siaga Aktif
          </span>
        </div>
        <div className="my-space-md flex items-center justify-between rounded-xl bg-surface-container-high p-space-md">
          <div className="flex flex-col">
            <span className="text-label-sm font-bold uppercase text-on-surface-variant">Regu Jaga</span>
            <span className="text-title-lg font-extrabold text-primary">Regu Pos Elang</span>
          </div>
          <div className="text-right">
            <span className="text-label-sm font-bold uppercase text-on-surface-variant">Jam Tugas</span>
            <div className="flex items-center gap-1 text-label-lg font-bold text-on-surface">
              <span className="material-symbols-outlined text-title-md text-tertiary">schedule</span> 22.00 - 04.00
            </div>
          </div>
        </div>
        <span className="text-label-md font-bold text-on-surface">Anggota Regu Bertugas:</span>
        <div className="mt-space-sm grid grid-cols-1 gap-space-sm sm:grid-cols-2">
          {rondaMembers.map((a) => (
            <div key={a.nama} className="flex items-center gap-space-sm rounded-lg bg-surface-container-low p-space-sm">
              <img className="h-10 w-10 rounded-full object-cover" alt={a.nama} src={a.foto} />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-label-lg font-semibold text-on-surface">{a.nama}</span>
                <span className="truncate text-body-sm text-on-surface-variant">{a.alamat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md flex items-center justify-between gap-space-sm pt-space-md">
        <span className="text-label-sm font-semibold text-secondary">Presensi QR Terverifikasi</span>
        <button className="inline-flex items-center gap-1 rounded-lg bg-secondary-container px-space-md py-1.5 text-label-md font-bold text-on-secondary-container" type="button">
          <span className="material-symbols-outlined text-title-md">call</span>
          <span>Hubungi Pos Ronda</span>
        </button>
      </div>
    </div>
  )
}
