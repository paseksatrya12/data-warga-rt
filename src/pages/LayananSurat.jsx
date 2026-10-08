import { useMemo, useState } from 'react'
import Toast, { useToast } from '../components/Toast.jsx'
import AntreanSurat from '../components/surat/AntreanSurat.jsx'
import PratinjauSurat from '../components/surat/PratinjauSurat.jsx'
import FormTolak from '../components/surat/FormTolak.jsx'
import FormSuratManual from '../components/surat/FormSuratManual.jsx'
import { daftarPengajuan, tabStatus, infoLayanan, jenisSurat, lampiranStandar, nomorBerikutnya } from '../data/surat'

export default function LayananSurat() {
  const [pengajuan, setPengajuan] = useState(daftarPengajuan)
  const [tab, setTab] = useState('menunggu')
  const [terpilihId, setTerpilihId] = useState(daftarPengajuan[0].id)
  const [urutTerbaru, setUrutTerbaru] = useState(true)
  const [formTolak, setFormTolak] = useState(false)
  const [formManual, setFormManual] = useState(false)
  const [pesan, tampilkan] = useToast()

  const jumlah = useMemo(
    () => Object.fromEntries(tabStatus.map((t) => [t.id, pengajuan.filter((s) => s.status === t.id).length])),
    [pengajuan]
  )

  const daftar = useMemo(
    () =>
      pengajuan
        .filter((s) => s.status === tab)
        .sort((a, b) => (urutTerbaru ? -1 : 1) * a.diajukanPada.localeCompare(b.diajukanPada)),
    [pengajuan, tab, urutTerbaru]
  )

  // Jika berkas terpilih tidak ada di tab aktif, tampilkan berkas pertama
  const terpilih = daftar.find((s) => s.id === terpilihId) ?? daftar[0]

  const gantiTab = (t) => {
    setTab(t)
    setTerpilihId(null)
  }

  const ubahStatus = (id, perubahan) =>
    setPengajuan((list) => list.map((s) => (s.id === id ? { ...s, ...perubahan } : s)))

  const pilihBerikutnya = () => {
    const idx = daftar.findIndex((s) => s.id === terpilih.id)
    setTerpilihId((daftar[idx + 1] ?? daftar[idx - 1])?.id ?? null)
  }

  const setujui = () => {
    ubahStatus(terpilih.id, { status: 'disetujui', verif: { text: 'Terbit', ok: true } })
    pilihBerikutnya()
    tampilkan(`Surat No. ${terpilih.nomor} untuk ${terpilih.pemohon.nama} disetujui & diterbitkan.`)
  }

  const tolak = (catatan) => {
    ubahStatus(terpilih.id, { status: 'ditolak', catatanTolak: catatan, verif: { text: 'Perlu Perbaikan', ok: false } })
    pilihBerikutnya()
    setFormTolak(false)
    tampilkan(`Pengajuan ${terpilih.pemohon.nama} ditolak. Catatan dikirim ke warga.`)
  }

  const simpanManual = ({ jenis, warga, agama, statusKawin, keperluan, namaUsaha }) => {
    const kini = new Date()
    const tanggal = kini.toLocaleDateString('sv-SE') // YYYY-MM-DD waktu lokal
    const baru = {
      id: Date.now(),
      jenis,
      status: 'menunggu',
      nomor: nomorBerikutnya(pengajuan, kini),
      tanggal,
      diajukan: 'Baru saja',
      diajukanPada: `${tanggal}T${kini.toTimeString().slice(0, 5)}`,
      namaSingkat: warga.nama,
      rumah: warga.alamat.replace(' No. ', ' / '),
      info: 'Walk-in Warga',
      verif: { text: 'Data Direktori Valid', ok: true },
      namaUsaha,
      pemohon: {
        nama: warga.nama,
        nik: warga.nik,
        kk: warga.noKK,
        tempatLahir: warga.tempatLahir,
        tglLahir: warga.tglLahir,
        jk: warga.jk,
        agama,
        pekerjaan: warga.pekerjaan,
        statusKawin,
        alamat: warga.alamat.startsWith('Blok') ? `Jl. Kemang Dahlia ${warga.alamat}` : warga.alamat
      },
      keperluan,
      lampiran: lampiranStandar
    }
    setPengajuan((list) => [baru, ...list])
    setTab('menunggu')
    setTerpilihId(baru.id)
    setUrutTerbaru(true)
    setFormManual(false)
    tampilkan(`${jenisSurat[jenis].judul} untuk ${warga.nama} masuk ke antrean.`)
  }

  return (
    <div className="flex w-full flex-col gap-space-lg">
      <section className="flex flex-col justify-between gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm md:flex-row md:items-center">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-label-sm uppercase tracking-wider text-on-surface-variant">
            <span className="material-symbols-outlined text-title-md text-primary">verified</span>
            <span>E-Government RT Presisi • Modul Persuratan Terpadu</span>
          </div>
          <h1 className="text-headline-md tracking-tight text-on-surface">Pelayanan Administrasi & Pengajuan Surat Pengantar RT</h1>
          <p className="text-body-md text-on-surface-variant">
            Verifikasi berkas warga secara instan, otentikasi tanda tangan digital, dan penerbitan surat pengantar otomatis berstandar Kelurahan.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-space-sm">
          <button
            className="flex items-center gap-space-xs rounded-xl bg-surface-container px-space-md py-space-sm text-label-lg text-on-surface transition-all hover:bg-surface-container-high"
            onClick={() => tampilkan('Pengelolaan template surat akan segera tersedia.')}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">history_edu</span>
            <span>Template Surat</span>
          </button>
          <button
            className="flex items-center gap-space-xs rounded-xl bg-primary px-space-md py-space-sm text-label-lg text-on-primary shadow-md transition-all hover:bg-primary-container"
            onClick={() => setFormManual(true)}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">add_circle</span>
            <span>+ Buat Surat Manual (Walk-in Warga)</span>
          </button>
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-space-md">
        <div className="max-w-full overflow-x-auto">
          <div className="flex items-center gap-space-xs rounded-xl bg-surface-container-low p-1.5">
            {tabStatus.map((t) => (
              <button
                key={t.id}
                className={`flex items-center gap-space-sm whitespace-nowrap rounded-lg px-space-md py-space-xs text-label-lg transition-all ${
                  tab === t.id
                    ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
                onClick={() => gantiTab(t.id)}
                type="button"
              >
                <span>{t.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-label-sm ${t.badge}`}>{jumlah[t.id]}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-space-md rounded-xl bg-surface-container-lowest px-space-md py-space-xs text-body-sm text-on-surface-variant shadow-sm">
          <div className="flex items-center gap-space-xs">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
            <span>
              Rata-rata Waktu Verifikasi: <strong className="text-on-surface">14 Menit</strong>
            </span>
          </div>
          <div className="h-4 w-px bg-surface-variant"></div>
          <div className="flex items-center gap-space-xs font-semibold text-primary">
            <span className="material-symbols-outlined text-[16px]">speed</span>
            <span>SLA Pelayanan 100%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-space-lg lg:grid-cols-12">
        <AntreanSurat
          daftar={daftar}
          terpilihId={terpilih?.id}
          onPilih={setTerpilihId}
          urutTerbaru={urutTerbaru}
          onUrut={() => setUrutTerbaru((u) => !u)}
        />
        <PratinjauSurat
          surat={terpilih}
          onSetujui={setujui}
          onTolak={() => setFormTolak(true)}
          onKirimWa={() => tampilkan(`Tautan surat No. ${terpilih.nomor} dikirim ke WhatsApp ${terpilih.pemohon.nama}.`)}
        />
      </div>

      <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
        {infoLayanan.map((i) => (
          <div key={i.nilai} className="flex items-center gap-space-md rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${i.iconClass}`}>
              <span className="material-symbols-outlined text-headline-sm">{i.icon}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-sm font-bold text-on-surface">{i.nilai}</span>
              <span className="text-body-sm text-on-surface-variant">{i.ket}</span>
            </div>
          </div>
        ))}
      </div>

      {formTolak && terpilih && <FormTolak surat={terpilih} onKirim={tolak} onTutup={() => setFormTolak(false)} />}
      {formManual && <FormSuratManual onSimpan={simpanManual} onTutup={() => setFormManual(false)} />}
      <Toast pesan={pesan} />
    </div>
  )
}
