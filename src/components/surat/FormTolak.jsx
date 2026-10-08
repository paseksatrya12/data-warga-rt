import { useState } from 'react'

export default function FormTolak({ surat, onKirim, onTutup }) {
  const [catatan, setCatatan] = useState('')

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-inverse-surface/40 p-space-md" onClick={onTutup}>
      <form
        className="flex w-full max-w-md flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault()
          if (catatan.trim()) onKirim(catatan.trim())
        }}
      >
        <div className="flex flex-col gap-0.5">
          <h2 className="text-title-lg text-on-background">Tolak Pengajuan</h2>
          <span className="text-body-sm text-on-surface-variant">
            {surat.pemohon.nama} — No. {surat.nomor}
          </span>
        </div>
        <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
          Catatan untuk warga
          <textarea
            autoFocus
            className="min-h-28 w-full rounded-xl bg-surface-container-low p-space-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-error/30"
            onChange={(e) => setCatatan(e.target.value)}
            placeholder="mis. Foto KTP buram, mohon unggah ulang."
            required
            value={catatan}
          />
        </label>
        <div className="flex justify-end gap-space-sm">
          <button className="rounded-xl bg-surface-container-high px-space-md py-2.5 text-label-lg text-on-surface hover:bg-surface-container-highest" onClick={onTutup} type="button">
            Batal
          </button>
          <button className="rounded-xl bg-error px-space-md py-2.5 text-label-lg text-on-error hover:opacity-90" type="submit">
            Tolak Pengajuan
          </button>
        </div>
      </form>
    </div>
  )
}
