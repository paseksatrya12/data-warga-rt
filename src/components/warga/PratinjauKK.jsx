import { inisial, umur, formatTanggal } from '../../data/warga'

export default function PratinjauKK({ kepala, anggota, onCetak, onSurat, onEdit, onMutasi }) {
  return (
    <div className="flex flex-col gap-space-md xl:col-span-4">
      <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="relative flex flex-col gap-space-xs overflow-hidden rounded-xl bg-gradient-to-br from-secondary/10 via-surface-container-low to-primary/5 p-space-md">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-label-sm font-bold uppercase tracking-widest text-secondary">
              <span className="material-symbols-outlined text-label-md">security</span> Pratinjau KK Aktif
            </span>
            <span className="rounded-full bg-secondary-container px-space-xs py-0.5 text-label-sm font-bold text-on-secondary-container">Resmi</span>
          </div>
          <h2 className="text-title-lg font-bold tracking-tight text-on-surface">KARTU KELUARGA</h2>
          <div className="font-mono text-headline-sm font-bold tracking-normal text-primary">{kepala.noKK}</div>
          <div className="flex items-center gap-space-xs pt-space-xs text-body-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-label-lg text-outline">location_on</span>
            <span>{kepala.alamat}, RT 04 / RW 07, Sukamaju</span>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-surface-container-low p-space-md">
          <div className="flex items-center gap-space-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-container text-headline-sm font-bold text-on-primary-container shadow-sm">
              {inisial(kepala.nama)}
            </div>
            <div className="flex flex-col">
              <span className="text-label-sm font-bold uppercase tracking-wider text-secondary">{kepala.peran}</span>
              <span className="text-title-md font-bold text-on-surface">{kepala.nama}</span>
              <span className="text-body-sm text-on-surface-variant">
                {kepala.jk} • {umur(kepala.tglLahir)} Tahun
              </span>
            </div>
          </div>
          <button
            className="rounded-xl bg-surface-container p-space-sm text-primary transition-all hover:bg-primary-container hover:text-on-primary-container"
            onClick={onCetak}
            title="Cetak Kartu Keluarga"
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">print</span>
          </button>
        </div>

        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between text-label-md text-on-surface">
            <span className="font-bold">Daftar Anggota Keluarga ({anggota.length} Jiwa)</span>
            <span className="text-label-sm font-semibold text-secondary">Dukcapil Verified</span>
          </div>
          {anggota.map((a, i) => (
            <div key={a.id} className="flex flex-col gap-space-xs rounded-xl bg-surface-container-low/70 p-space-md transition-all hover:shadow-sm">
              <div className="flex items-center justify-between gap-space-sm">
                <span className="text-label-lg font-bold text-on-surface">
                  {i + 1}. {a.nama}
                </span>
                <span
                  className={`whitespace-nowrap rounded-full px-space-xs py-0.5 text-label-sm font-semibold ${
                    a.peran === 'Kepala Keluarga' ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container text-on-surface-variant'
                  }`}
                >
                  {a.peran}
                </span>
              </div>
              <div className="mt-1 grid grid-cols-1 gap-space-xs text-body-sm text-on-surface-variant sm:grid-cols-2">
                <div><strong className="text-on-surface">NIK:</strong> {a.nik}</div>
                <div><strong className="text-on-surface">Gol. Darah:</strong> {a.golDarah}</div>
                <div><strong className="text-on-surface">TTL:</strong> {a.tempatLahir}, {formatTanggal(a.tglLahir)}</div>
                <div><strong className="text-on-surface">Pekerjaan:</strong> {a.pekerjaan}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-space-xs pt-space-xs">
          <div className="flex items-center gap-space-sm">
            <button
              className="flex flex-1 items-center justify-center gap-space-xs rounded-xl bg-secondary py-space-sm text-center text-label-md text-on-secondary transition-all hover:bg-secondary/90"
              onClick={onSurat}
              type="button"
            >
              <span className="material-symbols-outlined text-title-md">mail</span>
              <span>Buat Surat Pengantar</span>
            </button>
            <button
              className="flex items-center gap-space-xs rounded-xl bg-surface-container px-space-md py-space-sm text-label-md text-on-surface transition-all hover:bg-surface-container-high"
              onClick={onEdit}
              type="button"
            >
              <span className="material-symbols-outlined text-title-md">edit_square</span>
              <span>Edit KK</span>
            </button>
          </div>
          <button
            className="flex w-full items-center justify-center gap-1 rounded-lg py-space-xs text-label-sm text-outline transition-all hover:text-error"
            onClick={onMutasi}
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">person_remove</span>
            <span>Ajukan Mutasi / Pindah Domisili</span>
          </button>
        </div>
      </div>

      <div className="flex items-start gap-space-md rounded-xl bg-tertiary-fixed/30 p-space-md shadow-sm">
        <span className="material-symbols-outlined text-headline-sm text-tertiary-container">info</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-label-md font-bold text-tertiary-container">Ketentuan Pembaruan KK</span>
          <p className="text-body-sm text-on-surface-variant">
            Penambahan anggota keluarga baru atau warga kontrakan wajib melampirkan salinan KTP & Surat Domisili dalam 1x24 jam.
          </p>
        </div>
      </div>
    </div>
  )
}
