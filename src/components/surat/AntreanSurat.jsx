import { jenisSurat, labelStatus } from '../../data/surat'

function KartuAntrean({ s, aktif, onPilih }) {
  const jenis = jenisSurat[s.jenis]
  const status = labelStatus[s.status]

  return (
    <button
      className={`group relative w-full rounded-xl p-space-md text-left transition-all ${
        aktif
          ? 'bg-gradient-to-r from-primary/5 via-surface-container-lowest to-surface-container-lowest shadow-md'
          : 'bg-surface-container-lowest shadow-sm hover:shadow-md'
      }`}
      onClick={() => onPilih(s.id)}
      type="button"
    >
      {aktif && <div className="absolute bottom-3 left-0 top-3 w-1.5 rounded-r-full bg-primary"></div>}
      <div className="mb-space-xs flex items-start justify-between gap-space-sm">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-space-sm py-0.5 text-label-sm ${
            aktif ? 'bg-secondary-container font-bold text-on-secondary-container' : 'bg-surface-container-highest font-semibold text-on-surface-variant'
          }`}
        >
          {aktif && <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>}
          {jenis.kategori}
        </span>
        {aktif ? (
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-label-sm font-semibold ${status.className}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`}></span>
            {status.text}
          </span>
        ) : (
          <span className="rounded-full bg-surface-container px-2 py-0.5 text-label-sm text-on-surface-variant">{s.diajukan}</span>
        )}
      </div>
      <h3 className="text-title-md text-on-surface transition-colors group-hover:text-primary">{jenis.judul}</h3>
      <div className="mt-space-xs flex items-center justify-between gap-space-sm text-body-sm text-on-surface-variant">
        <span className="font-semibold text-on-surface">{s.namaSingkat}</span>
        <span className="whitespace-nowrap rounded bg-surface-container px-2 py-0.5 text-on-surface">{s.rumah}</span>
      </div>
      <div className="mt-space-sm flex items-center justify-between gap-space-sm pt-space-xs text-label-sm text-on-surface-variant">
        {aktif ? (
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]">schedule</span>
            Diajukan: {s.diajukan}
          </span>
        ) : (
          <span>{s.info}</span>
        )}
        <span className={`flex items-center gap-1 font-semibold ${s.verif.ok ? 'text-secondary' : 'text-tertiary-container'}`}>
          {aktif && s.verif.ok && <span className="material-symbols-outlined text-[14px]">check_circle</span>}
          {s.verif.text}
        </span>
      </div>
    </button>
  )
}

export default function AntreanSurat({ daftar, terpilihId, onPilih, urutTerbaru, onUrut }) {
  return (
    <div className="flex flex-col gap-space-md lg:col-span-5">
      <div className="flex items-center justify-between px-space-xs">
        <div className="flex items-center gap-space-xs">
          <span className="material-symbols-outlined text-title-md text-primary">inbox</span>
          <h2 className="text-title-md text-on-surface">Antrean Berkas Masuk</h2>
        </div>
        <button
          className="flex items-center gap-0.5 rounded-md bg-surface-container px-2 py-1 text-label-sm text-on-surface-variant hover:bg-surface-container-high"
          onClick={onUrut}
          title="Ubah urutan"
          type="button"
        >
          Urut: {urutTerbaru ? 'Terbaru' : 'Terlama'}
          <span className="material-symbols-outlined text-[14px]">swap_vert</span>
        </button>
      </div>

      <div className="flex flex-col gap-space-sm">
        {daftar.length === 0 && (
          <div className="rounded-xl bg-surface-container-lowest p-space-lg text-center text-body-md text-on-surface-variant shadow-sm">
            Tidak ada berkas pada kategori ini.
          </div>
        )}
        {daftar.map((s) => (
          <KartuAntrean key={s.id} s={s} aktif={s.id === terpilihId} onPilih={onPilih} />
        ))}
      </div>

      <div className="flex items-start gap-space-sm rounded-xl bg-secondary-container/30 p-space-md">
        <span className="material-symbols-outlined text-title-lg text-secondary">lightbulb</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-label-md font-bold text-on-surface">Standard Pelayanan RT 04</span>
          <p className="text-body-sm text-on-surface-variant">
            Surat pengantar yang diterbitkan dilengkapi QR Code SHA-256 yang bisa langsung divalidasi oleh petugas Kelurahan Sukamaju secara daring tanpa stempel basah.
          </p>
        </div>
      </div>
    </div>
  )
}
