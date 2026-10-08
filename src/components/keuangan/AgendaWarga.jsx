import { agendaWarga } from '../../data/keuangan'

export default function AgendaWarga({ onUsul }) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-5">
      <div>
        <div className="mb-space-sm flex items-center gap-space-xs">
          <span className="flex items-center justify-center rounded-xl bg-tertiary-fixed p-2 text-tertiary">
            <span className="material-symbols-outlined text-title-md">campaign</span>
          </span>
          <div>
            <h3 className="text-title-lg text-on-background">Agenda & Gotong Royong</h3>
            <span className="text-body-sm text-on-surface-variant">Kegiatan guyub warga RT 04 Sukamaju</span>
          </div>
        </div>
        <div className="mt-space-md flex flex-col gap-space-md">
          {agendaWarga.map((a) => (
            <div
              key={a.id}
              className={`flex flex-col gap-space-xs rounded-xl p-space-md ${a.sorot ? 'bg-tertiary-fixed/30' : 'bg-surface-container-low'}`}
            >
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span
                    className={`whitespace-nowrap rounded-lg px-space-sm py-space-xs text-label-sm font-bold ${
                      a.sorot ? 'bg-tertiary-container text-on-tertiary' : 'bg-primary text-on-primary'
                    }`}
                  >
                    {a.tanggal}
                  </span>
                  <span className="text-label-lg font-bold text-on-surface">{a.judul}</span>
                </div>
                <span
                  className={`whitespace-nowrap rounded bg-surface-container-lowest px-space-xs py-0.5 text-label-sm font-semibold ${
                    a.sorot ? 'text-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {a.jam}
                </span>
              </div>
              <p className="text-body-sm text-on-surface-variant">{a.deskripsi}</p>
              <div
                className={`mt-space-xs flex items-center gap-space-md text-label-sm font-medium ${
                  a.sorot ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {[a.lokasi, a.peserta].map((info) => (
                  <span key={info.text} className="flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[16px]">{info.icon}</span>
                    {info.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-space-md flex items-center justify-between pt-space-xs">
        <span className="text-body-sm text-on-surface-variant">Ingin usul agenda warga?</span>
        <button className="flex items-center gap-0.5 text-label-md text-primary hover:text-primary-container" onClick={onUsul} type="button">
          <span className="material-symbols-outlined text-body-md">add</span>
          <span>Tambah Usulan Kegiatan</span>
        </button>
      </div>
    </div>
  )
}
