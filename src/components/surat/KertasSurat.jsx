import { useEffect, useState } from 'react'
import { jenisSurat, formatTanggalPanjang } from '../../data/surat'
import { umur } from '../../data/warga'

const varianLampiran = {
  ok: 'bg-secondary-container text-on-secondary-container font-semibold',
  lunas: 'bg-secondary text-on-secondary font-bold',
  tinjau: 'bg-tertiary-fixed text-tertiary-container font-semibold'
}

// Sidik digital surat: SHA-256 dari nomor + NIK, disingkat seperti "e8c4..91a0"
function useSidik(teks) {
  const [sidik, setSidik] = useState('')
  useEffect(() => {
    if (!window.crypto?.subtle) return setSidik('—')
    let batal = false
    window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(teks)).then((buf) => {
      const hex = [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
      if (!batal) setSidik(`${hex.slice(0, 4)}..${hex.slice(-4)}`)
    })
    return () => { batal = true }
  }, [teks])
  return sidik
}

export default function KertasSurat({ surat }) {
  const jenis = jenisSurat[surat.jenis]
  const p = surat.pemohon
  const sidik = useSidik(`${surat.nomor}|${p.nik}`)
  const terbit = surat.status === 'disetujui' || surat.status === 'arsip'

  const dataPemohon = [
    ['Nama Lengkap', p.nama, 'font-bold'],
    ['NIK (KTP)', p.nik, 'font-mono font-semibold'],
    ['Nomor Kartu Keluarga (KK)', p.kk, 'font-mono'],
    ['Tempat, Tanggal Lahir', `${p.tempatLahir}, ${formatTanggalPanjang(p.tglLahir)} (${umur(p.tglLahir, new Date(surat.tanggal))} Tahun)`],
    ['Jenis Kelamin / Agama', `${p.jk} / ${p.agama}`],
    ['Pekerjaan / Status', `${p.pekerjaan} / ${p.statusKawin}`],
    ['Alamat Domisili Tetap', `${p.alamat}, RT 04 / RW 07, Sukamaju`]
  ]

  return (
    <div className="relative flex flex-col gap-space-lg overflow-hidden rounded-xl bg-surface-container-lowest p-6 shadow-md sm:p-8 md:p-12">
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 text-primary opacity-5">
        <svg fill="currentColor" viewBox="0 0 200 200">
          <path d="M100 0 L125 75 L200 100 L125 125 L100 200 L75 125 L0 100 L75 75 Z"></path>
        </svg>
      </div>

      {/* Kop surat */}
      <div className="flex items-center gap-space-md rounded-lg bg-gradient-to-b from-transparent to-surface-variant/20 p-space-sm pb-space-md">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-fixed font-bold text-primary shadow-inner">
          <span className="material-symbols-outlined text-headline-md">shield</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-headline-sm font-extrabold uppercase tracking-wider text-on-surface">RUKUN TETANGGA 04 / RUKUN WARGA 07</h4>
          <p className="text-label-lg font-semibold text-primary">KELURAHAN SUKAMAJU, KECAMATAN CILODONG, KOTA DEPOK</p>
          <p className="text-body-sm text-on-surface-variant">
            Sekretariat: Balai Pertemuan Warga Jl. Kemang Dahlia Raya No. 4, Sukamaju • Telp/WA: 0812-9900-0407
          </p>
        </div>
      </div>
      <div className="h-1 w-full rounded-full bg-gradient-to-r from-primary via-secondary to-primary-fixed"></div>

      <div className="my-space-xs flex flex-col gap-1 text-center">
        <h2 className="text-headline-md font-extrabold uppercase tracking-wide text-on-surface underline decoration-primary underline-offset-4">
          {jenis.judulResmi}
        </h2>
        <span className="font-mono text-label-md text-on-surface-variant">Nomor: {surat.nomor}</span>
      </div>

      <p className="text-justify text-body-md leading-relaxed text-on-surface">
        Yang bertanda tangan di bawah ini, Pengurus Rukun Tetangga (RT) 04 / RW 07 Kelurahan Sukamaju, Kecamatan Cilodong, Kota Depok, dengan ini menerangkan bahwa:
      </p>

      <div className="grid grid-cols-1 gap-x-space-md gap-y-space-sm rounded-xl bg-surface-container-low p-space-lg text-body-md md:grid-cols-3">
        {dataPemohon.map(([label, nilai, kelas]) => (
          <div key={label} className="contents">
            <div className="font-medium text-on-surface-variant">{label}</div>
            <div className={`text-on-surface md:col-span-2 ${kelas ?? ''}`}>: {nilai}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-space-xs text-body-md text-on-surface">
        <p className="text-justify leading-relaxed">{jenis.keterangan(surat)}</p>
        <div className="mt-space-xs flex items-start gap-space-sm rounded-xl bg-tertiary-fixed/30 p-space-md">
          <span className="material-symbols-outlined mt-0.5 text-tertiary-container">assignment_turned_in</span>
          <div className="flex flex-col">
            <span className="text-label-md font-bold text-on-surface">Maksud / Keperluan Permohonan:</span>
            <p className="text-body-md italic text-on-surface">"{surat.keperluan}"</p>
          </div>
        </div>
        <p className="mt-space-xs text-justify leading-relaxed">{jenis.penutup}</p>
      </div>

      <div className="flex flex-col gap-space-sm rounded-xl bg-surface-container p-space-md">
        <span className="flex items-center gap-1.5 text-label-md font-bold uppercase tracking-wider text-on-surface">
          <span className="material-symbols-outlined text-title-md text-secondary">attach_file</span>
          Lampiran Berkas & Validasi Iuran Lingkungan
        </span>
        <div className="grid grid-cols-1 gap-space-sm md:grid-cols-2">
          {surat.lampiran.map((l) => (
            <div key={l.label} className="flex items-center justify-between gap-space-sm rounded-lg bg-surface-container-lowest p-space-sm shadow-sm">
              <div className="flex items-center gap-space-xs">
                <span className={`material-symbols-outlined text-[20px] ${l.iconClass}`}>{l.icon}</span>
                <span className="text-label-md text-on-surface">{l.label}</span>
              </div>
              <span className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-label-sm ${varianLampiran[l.varian]}`}>
                {l.varian === 'lunas' && <span className="material-symbols-outlined text-[12px]">done_all</span>}
                {l.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-space-lg pt-space-md md:flex-row md:items-end">
        <div className="flex max-w-sm items-center gap-space-md rounded-xl bg-surface-container-low p-space-md">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-surface-container-lowest p-1.5 shadow-sm">
            <svg className="h-full w-full text-on-surface" fill="currentColor" viewBox="0 0 100 100">
              <path d="M0 0h30v30H0zM10 10h10v10H10zM70 0h30v30H70zM80 10h10v10H80zM0 70h30v30H0zM10 80h10v10H10zM40 0h10v20H40zM55 0h10v10H55zM40 30h20v10H40zM70 40h10v20H70zM90 40h10v30H90zM40 50h10v20H40zM60 50h20v10H60zM40 80h10v20H40zM60 70h10v20H60zM80 80h20v20H80zM20 40h10v20H20zM35 60h10v10H35z"></path>
            </svg>
          </div>
          <div className="flex flex-col text-label-sm text-on-surface-variant">
            <span className="flex items-center gap-1 text-label-md font-bold text-on-surface">
              <span className="material-symbols-outlined text-[16px] text-secondary">lock_reset</span>
              Otentikasi Digital RT
            </span>
            <span>SHA-256: {sidik}</span>
            <span>Pindai QR untuk memeriksa keabsahan surat di portal WargaHub.</span>
          </div>
        </div>

        <div className="flex min-w-[200px] flex-col items-center text-center">
          <span className="text-body-md text-on-surface">Depok, {formatTanggalPanjang(surat.tanggal)}</span>
          <span className="text-label-md text-on-surface-variant">Ketua Rukun Tetangga 04</span>
          <div className="relative my-1 flex h-16 w-36 items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center text-primary/30">
              <span className="material-symbols-outlined rotate-[-12deg] text-[64px]">gesture</span>
            </div>
            <div className="absolute bottom-1 rounded-full bg-primary/10 px-2 py-0.5 text-label-sm font-bold text-primary">
              {terbit ? 'TTE Terverifikasi' : 'Menunggu TTE'}
            </div>
          </div>
          <span className="text-title-md font-bold text-on-surface underline">BUDI SANTOSO, S.T.</span>
          <span className="text-label-sm text-on-surface-variant">Reg ID RT: 2023.04.07.001</span>
        </div>
      </div>
    </div>
  )
}
