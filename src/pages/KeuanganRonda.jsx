import { useState } from 'react'
import Toast, { useToast } from '../components/Toast.jsx'
import KasMetrik from '../components/keuangan/KasMetrik.jsx'
import GrafikArusKas from '../components/keuangan/GrafikArusKas.jsx'
import MatriksIuran from '../components/keuangan/MatriksIuran.jsx'
import RiwayatMutasi from '../components/keuangan/RiwayatMutasi.jsx'
import JadwalRonda from '../components/keuangan/JadwalRonda.jsx'
import LogKeamanan from '../components/keuangan/LogKeamanan.jsx'
import AgendaWarga from '../components/keuangan/AgendaWarga.jsx'
import FormTransaksi from '../components/keuangan/FormTransaksi.jsx'
import { mutasiAwal } from '../data/keuangan'

const formatWaktu = (d) =>
  `${d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })} · ${d
    .toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    .replace('.', ':')} WIB`

export default function KeuanganRonda() {
  const [transaksi, setTransaksi] = useState(mutasiAwal)
  const [formTerbuka, setFormTerbuka] = useState(false)
  const [pesan, tampilkan] = useToast()

  const simpanTransaksi = (data) => {
    setTransaksi((list) => [
      {
        id: Date.now(),
        waktu: formatWaktu(new Date()),
        status: data.nominal > 0 ? 'Tercatat Manual' : 'Menunggu Kuitansi',
        ...data
      },
      ...list
    ])
    setFormTerbuka(false)
    tampilkan(`Transaksi "${data.judul}" berhasil dicatat ke buku kas.`)
  }

  return (
    <div className="flex w-full flex-col gap-space-xl">
      {/* HEADER & QUICK ACTIONS */}
      <div className="flex flex-col justify-between gap-space-md lg:flex-row lg:items-center">
        <div className="flex flex-col gap-space-xs">
          <div className="flex flex-wrap items-center gap-space-sm">
            <span className="rounded-full bg-secondary-container px-space-sm py-space-xs text-label-sm uppercase tracking-wider text-on-secondary-container">
              Amanah & Terbuka
            </span>
            <span className="text-label-md text-on-surface-variant">Periode Aktif: Maret 2025</span>
          </div>
          <h1 className="text-headline-lg tracking-tight text-on-background">Keuangan Kas & Keamanan Siskamling</h1>
          <p className="text-body-md text-on-surface-variant">
            Laporan perputaran dana iuran warga RT 04 / RW 07 dan koordinasi ronda malam siaga 24 jam.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <button
            className="flex items-center gap-space-xs rounded-xl bg-surface-container-high px-space-md py-2.5 text-label-lg text-primary shadow-sm transition-all hover:bg-surface-container-highest"
            onClick={() => window.print()}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">picture_as_pdf</span>
            <span>Unduh Laporan Warga (PDF)</span>
          </button>
          <button
            className="flex items-center gap-space-xs rounded-xl bg-primary px-space-md py-2.5 text-label-lg text-on-primary shadow-md shadow-primary/20 transition-all hover:bg-primary-container"
            onClick={() => setFormTerbuka(true)}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">add_circle</span>
            <span>Catat Transaksi Kas</span>
          </button>
        </div>
      </div>

      {/* SECTION 1: KEUANGAN KAS RT */}
      <section className="flex flex-col gap-space-lg">
        <KasMetrik />
        <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
          <GrafikArusKas />
          <MatriksIuran onReminder={(b, belum) => tampilkan(`Pengingat iuran dikirim ke ${belum} rumah di ${b.blok}.`)} />
        </div>
        <RiwayatMutasi transaksi={transaksi} onLihatSemua={() => tampilkan('Arsip buku kas lengkap akan segera tersedia.')} />
      </section>

      {/* SECTION 2: JADWAL RONDA & KEAMANAN */}
      <section className="flex flex-col gap-space-lg pt-space-md">
        <JadwalRonda
          onUbahJadwal={() => tampilkan('Mode ubah jadwal ronda akan segera tersedia.')}
          onBroadcast={() => tampilkan('Jadwal ronda minggu ini dikirim ke Grup WA warga RT 04.')}
        />
        <div className="grid grid-cols-1 gap-space-lg lg:grid-cols-12">
          <LogKeamanan onLihatSop={() => tampilkan('SOP Ronda: portal ditutup 23.00, patroli keliling tiap 2 jam, laporan via tombol darurat.')} />
          <AgendaWarga onUsul={() => tampilkan('Formulir usulan kegiatan warga akan segera tersedia.')} />
        </div>
      </section>

      {formTerbuka && <FormTransaksi onSimpan={simpanTransaksi} onTutup={() => setFormTerbuka(false)} />}

      <Toast pesan={pesan} />
    </div>
  )
}
