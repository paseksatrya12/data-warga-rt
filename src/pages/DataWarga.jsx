import { useCallback, useEffect, useMemo, useState } from 'react'
import Toast, { useToast } from '../components/Toast.jsx'
import WargaMetrik from '../components/warga/WargaMetrik.jsx'
import FilterWarga from '../components/warga/FilterWarga.jsx'
import TabelWarga from '../components/warga/TabelWarga.jsx'
import PratinjauKK from '../components/warga/PratinjauKK.jsx'
import FormWarga from '../components/warga/FormWarga.jsx'
import { peranKK, statusDomisili } from '../data/warga'
import { ambilDaftarWarga, tambahWarga } from '../services/wargaService'

const filterAwal = { cari: '', blok: '', peran: '', pekerjaan: '' }
const urutanPeran = Object.keys(peranKK)

function unduhCsv(baris) {
  const kolom = ['Nama', 'NIK', 'No. KK', 'Alamat', 'Peran di KK', 'Status Domisili', 'Kepemilikan', 'Jenis Kelamin', 'Tempat Lahir', 'Tanggal Lahir', 'Gol. Darah', 'Pekerjaan']
  const isi = baris.map((w) => [
    w.nama, `'${w.nik}`, `'${w.noKK}`, w.alamat, w.peran, statusDomisili[w.status].label,
    w.kepemilikan, w.jk, w.tempatLahir, w.tglLahir, w.golDarah, w.pekerjaan
  ])
  const csv = [kolom, ...isi].map((r) => r.map((v) => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n')
  const url = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }))
  const a = document.createElement('a')
  a.href = url
  a.download = `data-warga-rt04-${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export default function DataWarga() {
  const [warga, setWarga] = useState([])
  const [memuat, setMemuat] = useState(true)
  const [galat, setGalat] = useState('')
  const [tab, setTab] = useState('semua')
  const [filter, setFilter] = useState(filterAwal)
  const [halaman, setHalaman] = useState(1)
  const [perHalaman, setPerHalaman] = useState(10)
  const [terpilihId, setTerpilihId] = useState(null)
  const [formTerbuka, setFormTerbuka] = useState(false)
  const [pesan, tampilkan] = useToast()

  const muatData = useCallback(async () => {
    setMemuat(true)
    setGalat('')
    try {
      setWarga(await ambilDaftarWarga())
    } catch (e) {
      setGalat(e.message)
    } finally {
      setMemuat(false)
    }
  }, [])

  useEffect(() => {
    muatData()
  }, [muatData])

  const jumlah = useMemo(() => {
    const hasil = { semua: warga.length }
    Object.keys(statusDomisili).forEach((s) => (hasil[s] = warga.filter((w) => w.status === s).length))
    return hasil
  }, [warga])

  const tersaring = useMemo(() => {
    const kata = filter.cari.trim().toLowerCase()
    return warga.filter(
      (w) =>
        (tab === 'semua' || w.status === tab) &&
        (!filter.blok || w.blok === filter.blok) &&
        (!filter.peran || peranKK[w.peran].filter === filter.peran) &&
        (!filter.pekerjaan || w.kategoriPekerjaan === filter.pekerjaan) &&
        (!kata || [w.nama, w.nik, w.noKK, w.alamat].some((v) => v.toLowerCase().includes(kata)))
    )
  }, [warga, tab, filter])

  const baris = tersaring.slice((halaman - 1) * perHalaman, halaman * perHalaman)

  const terpilih = warga.find((w) => w.id === terpilihId) ?? warga[0]
  const anggota = terpilih
    ? warga
        .filter((w) => w.noKK === terpilih.noKK)
        .sort((a, b) => urutanPeran.indexOf(a.peran) - urutanPeran.indexOf(b.peran) || a.tglLahir.localeCompare(b.tglLahir))
    : []
  const kepala = anggota.find((w) => w.peran === 'Kepala Keluarga') ?? terpilih

  // Setiap perubahan tab/filter kembali ke halaman pertama
  const gantiTab = (t) => { setTab(t); setHalaman(1) }
  const gantiFilter = (f) => { setFilter(f); setHalaman(1) }
  const resetFilter = () => { setFilter(filterAwal); setTab('semua'); setHalaman(1) }

  // Galat dilempar ulang agar FormWarga tetap terbuka dan menampilkan pesannya
  const simpanWarga = async (data) => {
    const baru = await tambahWarga(data)
    setWarga((list) => [baru, ...list])
    setTerpilihId(baru.id)
    resetFilter()
    setFormTerbuka(false)
    tampilkan(`${baru.nama} berhasil ditambahkan ke direktori warga.`)
  }

  return (
    <div className="flex w-full flex-col gap-space-lg">
      <div className="flex flex-col justify-between gap-space-lg rounded-xl bg-surface-container-lowest p-space-lg shadow-sm xl:flex-row xl:items-center">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-sm">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-container text-secondary">
              <span className="material-symbols-outlined text-title-lg">badge</span>
            </span>
            <span className="text-label-sm font-bold uppercase tracking-wider text-secondary">Basis Data Kependudukan Presisi</span>
          </div>
          <h1 className="text-headline-md tracking-tight text-on-surface">Direktori Data Warga & Kartu Keluarga (KK)</h1>
          <p className="text-body-md text-on-surface-variant">
            Kelola {jumlah.tetap + jumlah.kontrak} jiwa terdaftar di RT 04 / RW 07. Mutasi berkala disinkronkan dengan Dukcapil Kelurahan.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <button
            className="inline-flex items-center gap-space-xs rounded-xl bg-surface-container px-space-md py-space-sm text-label-lg text-on-surface transition-all hover:bg-surface-container-high"
            onClick={() => tampilkan('Fitur import CSV/Excel akan segera tersedia.')}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">upload_file</span>
            <span>Import CSV/Excel</span>
          </button>
          <button
            className="inline-flex items-center gap-space-xs rounded-xl bg-surface-container px-space-md py-space-sm text-label-lg text-on-surface transition-all hover:bg-surface-container-high"
            onClick={() => {
              unduhCsv(tersaring)
              tampilkan(`${tersaring.length} data warga diekspor ke CSV.`)
            }}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">download</span>
            <span>Export Data</span>
          </button>
          <button
            className="inline-flex items-center gap-space-xs rounded-xl bg-primary-container px-space-lg py-space-sm text-label-lg text-on-primary-container shadow-md transition-all hover:bg-primary"
            onClick={() => setFormTerbuka(true)}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">person_add</span>
            <span>+ Tambah Warga Baru</span>
          </button>
        </div>
      </div>

      {galat && (
        <div className="flex flex-wrap items-center justify-between gap-space-sm rounded-xl bg-error-container p-space-md text-body-md text-on-error-container" role="alert">
          <span className="flex items-start gap-space-sm">
            <span className="material-symbols-outlined text-title-lg">cloud_off</span>
            <span>
              <strong>Gagal memuat data dari Supabase.</strong> {galat}
            </span>
          </span>
          <button
            className="rounded-lg bg-surface-container-lowest px-space-md py-space-xs text-label-md text-on-surface hover:bg-surface-container"
            onClick={muatData}
            type="button"
          >
            Coba Lagi
          </button>
        </div>
      )}

      <WargaMetrik warga={warga} />

      <FilterWarga tab={tab} onTab={gantiTab} jumlah={jumlah} filter={filter} onFilter={gantiFilter} onReset={resetFilter} />

      <div className="grid grid-cols-1 items-start gap-space-lg xl:grid-cols-12">
        <TabelWarga
          baris={baris}
          total={tersaring.length}
          halaman={halaman}
          perHalaman={perHalaman}
          onHalaman={setHalaman}
          onPerHalaman={(n) => { setPerHalaman(n); setHalaman(1) }}
          terpilihId={terpilih?.id}
          pesanKosong={
            memuat ? 'Memuat data warga dari Supabase...' : galat ? 'Data tidak dapat dimuat.' : 'Tidak ada data warga yang cocok dengan filter.'
          }
          onPilih={(w) => setTerpilihId(w.id)}
          onChat={(w) => tampilkan(`Membuka percakapan WhatsApp dengan ${w.nama}.`)}
          onMenu={(w) => tampilkan(`Menu opsi untuk ${w.nama} akan segera tersedia.`)}
        />
        {kepala && (
          <PratinjauKK
            kepala={kepala}
            anggota={anggota}
            onCetak={() => window.print()}
            onSurat={() => tampilkan(`Draf surat pengantar untuk KK ${kepala.noKK} dibuat.`)}
            onEdit={() => tampilkan('Mode edit KK akan segera tersedia.')}
            onMutasi={() => tampilkan(`Pengajuan mutasi KK ${kepala.nama} diteruskan ke pengurus RT.`)}
          />
        )}
      </div>

      {formTerbuka && <FormWarga onSimpan={simpanWarga} onTutup={() => setFormTerbuka(false)} />}
      <Toast pesan={pesan} />
    </div>
  )
}
