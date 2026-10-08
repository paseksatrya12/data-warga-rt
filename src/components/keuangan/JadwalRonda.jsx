import { jadwalRonda } from '../../data/keuangan'

const statusIcon = {
  selesai: { icon: 'check_circle', className: 'text-secondary' },
  'malam-ini': { icon: 'schedule', className: 'text-secondary' },
  mendatang: { icon: 'pending', className: 'text-outline' }
}

function KartuHari({ jadwal }) {
  const aktif = jadwal.status === 'malam-ini'
  const ikon = statusIcon[jadwal.status]

  return (
    <div
      className={`flex flex-col gap-space-sm rounded-xl p-space-md ${
        aktif ? 'bg-primary-fixed/30 shadow-md' : 'bg-surface-container-lowest shadow-sm'
      }`}
    >
      <div className="flex items-center justify-between pb-space-xs">
        <div className="flex items-center gap-1">
          <span className={`text-label-lg font-bold ${aktif ? 'text-primary' : 'text-on-surface'}`}>{jadwal.hari}</span>
          {aktif && <span className="h-2 w-2 animate-pulse rounded-full bg-secondary"></span>}
        </div>
        <span
          className={`rounded px-space-xs py-0.5 text-label-sm ${
            aktif ? 'bg-secondary text-on-secondary' : 'bg-surface-container text-on-surface-variant'
          }`}
        >
          {aktif ? 'Malam Ini' : jadwal.regu}
        </span>
      </div>
      <div className="flex flex-col gap-1 text-body-sm text-on-surface">
        <div className="font-semibold text-primary">Koord: {jadwal.koord}</div>
        {jadwal.anggota.map((nama) => (
          <div key={nama} className={aktif ? 'font-medium text-on-surface' : 'text-on-surface-variant'}>
            {nama}
          </div>
        ))}
      </div>
      <div
        className={`mt-auto flex items-center justify-between pt-space-xs text-label-sm ${
          aktif ? 'font-semibold text-primary' : 'text-on-surface-variant'
        }`}
      >
        <span>22.00 - 04.00</span>
        <span className={`material-symbols-outlined text-body-md ${ikon.className}`}>{ikon.icon}</span>
      </div>
    </div>
  )
}

export default function JadwalRonda({ onUbahJadwal, onBroadcast }) {
  return (
    <>
      <div className="flex flex-col justify-between gap-space-md md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-space-xs text-label-sm font-semibold uppercase text-secondary">
            <span className="material-symbols-outlined text-body-md">shield</span>
            Sistem Keamanan Swakarsa (SISKAMLING)
          </div>
          <h2 className="text-headline-md text-on-background">Jadwal Ronda Mingguan & Agenda Pos Kamling</h2>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <div className="flex items-center gap-space-xs rounded-xl bg-secondary-container px-space-md py-space-xs text-label-md text-on-secondary-container">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
            <span>
              Status Malam Tadi: <b>100% Kondusif & Terjaga</b>
            </span>
          </div>
          <button
            className="flex items-center gap-space-xs rounded-xl bg-surface-container-high px-space-md py-2.5 text-label-lg text-on-surface shadow-sm transition-all hover:bg-surface-container-highest"
            onClick={onUbahJadwal}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">edit_calendar</span>
            <span>Ubah Jadwal Ronda</span>
          </button>
          <button
            className="flex items-center gap-space-xs rounded-xl bg-secondary px-space-md py-2.5 text-label-lg text-on-secondary shadow-md shadow-secondary/20 transition-all hover:bg-primary"
            onClick={onBroadcast}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">share</span>
            <span>Broadcast ke Grup WA</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2 lg:grid-cols-7">
        {jadwalRonda.map((j) => (
          <KartuHari key={j.hari} jadwal={j} />
        ))}
      </div>
    </>
  )
}
