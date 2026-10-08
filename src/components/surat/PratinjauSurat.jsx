import { useEffect, useState } from 'react'
import KertasSurat from './KertasSurat.jsx'
import { jenisSurat } from '../../data/surat'

function cetakSurat() {
  // Hanya area .area-cetak yang tercetak (lihat index.css)
  document.body.classList.add('cetak-surat')
  window.addEventListener('afterprint', () => document.body.classList.remove('cetak-surat'), { once: true })
  window.print()
}

function PanelKeputusan({ surat, onSetujui, onTolak }) {
  if (surat.status === 'menunggu') {
    return (
      <div className="flex flex-col items-center justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-md md:flex-row">
        <div className="flex items-center gap-space-sm text-body-sm text-on-surface-variant">
          <span className="material-symbols-outlined text-title-lg text-primary">shield_person</span>
          <span>Surat akan langsung dikirimkan ke aplikasi warga & tercatat di buku ekspedisi digital RT.</span>
        </div>
        <div className="flex w-full items-center gap-space-sm md:w-auto">
          <button
            className="flex flex-1 items-center justify-center gap-space-xs rounded-xl bg-surface-container-lowest px-space-md py-space-sm text-label-lg text-tertiary shadow-sm transition-all hover:bg-error-container/40 md:flex-initial"
            onClick={onTolak}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">cancel</span>
            <span>Tolak dengan Catatan</span>
          </button>
          <button
            className="flex flex-1 items-center justify-center gap-space-xs rounded-xl bg-primary px-space-lg py-space-sm text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container md:flex-initial"
            onClick={onSetujui}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">check_circle</span>
            <span>Setujui & Terbitkan Surat</span>
          </button>
        </div>
      </div>
    )
  }

  if (surat.status === 'ditolak') {
    return (
      <div className="flex items-start gap-space-sm rounded-xl bg-error-container/50 p-space-lg shadow-sm">
        <span className="material-symbols-outlined text-title-lg text-error">block</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-label-lg font-bold text-on-error-container">Pengajuan ditolak</span>
          <p className="text-body-sm text-on-surface-variant">Catatan untuk warga: {surat.catatanTolak}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-space-sm rounded-xl bg-secondary-container/40 p-space-lg text-body-sm text-on-surface shadow-sm">
      <span className="material-symbols-outlined text-title-lg text-secondary">verified</span>
      <span>
        {surat.status === 'arsip'
          ? 'Surat telah selesai diproses dan tersimpan di arsip digital RT.'
          : 'Surat telah disetujui, ditandatangani secara elektronik, dan dikirim ke aplikasi warga.'}
      </span>
    </div>
  )
}

export default function PratinjauSurat({ surat, onSetujui, onTolak, onKirimWa }) {
  const [perbesar, setPerbesar] = useState(false)

  useEffect(() => {
    if (!perbesar) return
    const tutup = (e) => e.key === 'Escape' && setPerbesar(false)
    window.addEventListener('keydown', tutup)
    return () => window.removeEventListener('keydown', tutup)
  }, [perbesar])

  if (!surat) {
    return (
      <div className="flex flex-col items-center justify-center gap-space-sm rounded-xl bg-surface-container-lowest p-space-xl text-center shadow-sm lg:col-span-7">
        <span className="material-symbols-outlined text-headline-lg text-outline">drafts</span>
        <span className="text-body-md text-on-surface-variant">Pilih berkas di antrean untuk melihat pratinjau surat.</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-space-md lg:col-span-7">
      <div className="flex flex-wrap items-center justify-between gap-space-sm rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined rounded-lg bg-primary/10 p-2 text-primary">description</span>
          <div className="flex flex-col">
            <span className="text-label-sm text-on-surface-variant">Dokumen Sedang Dipratinjau</span>
            <span className="text-title-md font-bold text-on-surface">
              {jenisSurat[surat.jenis].judul} - No: {surat.nomor}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <button
            className="rounded-lg p-2 text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface"
            onClick={() => setPerbesar(true)}
            title="Perbesar Layar"
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">zoom_in</span>
          </button>
          <button
            className="flex items-center gap-1.5 rounded-lg bg-surface-container px-space-md py-space-xs text-label-md text-on-surface transition-all hover:bg-surface-container-high"
            onClick={cetakSurat}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">print</span>
            <span>Cetak PDF</span>
          </button>
          <button
            className="flex items-center gap-1.5 rounded-lg bg-secondary-container px-space-md py-space-xs text-label-md text-on-secondary-container transition-all hover:opacity-90"
            onClick={onKirimWa}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Kirim WhatsApp</span>
          </button>
        </div>
      </div>

      <div
        className={perbesar ? 'fixed inset-0 z-[60] overflow-y-auto bg-inverse-surface/60 p-space-md md:p-space-xl' : ''}
        onClick={() => setPerbesar(false)}
      >
        <div className={`area-cetak ${perbesar ? 'relative mx-auto max-w-4xl' : ''}`} onClick={(e) => perbesar && e.stopPropagation()}>
          {perbesar && (
            <button
              aria-label="Tutup"
              className="absolute right-space-md top-space-md z-10 rounded-lg bg-surface-container p-1 text-on-surface-variant hover:bg-surface-container-high"
              onClick={() => setPerbesar(false)}
              type="button"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
          <KertasSurat surat={surat} />
        </div>
      </div>

      <PanelKeputusan surat={surat} onSetujui={onSetujui} onTolak={onTolak} />
    </div>
  )
}
