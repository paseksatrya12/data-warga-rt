import { useState } from 'react'
import { jenisSurat } from '../../data/surat'
import { daftarWarga } from '../../data/warga'

const wargaAktif = daftarWarga.filter((w) => w.status === 'tetap' || w.status === 'kontrak')

const inputClass =
  'h-11 w-full rounded-xl bg-surface-container-low px-space-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30'

const statusKawinAwal = (w) => (w.peran === 'Kepala Keluarga' || w.peran === 'Istri' ? 'Kawin' : 'Belum Menikah')

export default function FormSuratManual({ onSimpan, onTutup }) {
  const [form, setForm] = useState({
    jenis: 'skck',
    wargaId: wargaAktif[0].id,
    agama: 'Islam',
    statusKawin: statusKawinAwal(wargaAktif[0]),
    keperluan: '',
    namaUsaha: ''
  })
  const ubah = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const pilihWarga = (e) => {
    const w = wargaAktif.find((x) => x.id === Number(e.target.value))
    setForm({ ...form, wargaId: w.id, statusKawin: statusKawinAwal(w) })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const w = wargaAktif.find((x) => x.id === Number(form.wargaId))
    onSimpan({
      jenis: form.jenis,
      warga: w,
      agama: form.agama,
      statusKawin: form.statusKawin,
      keperluan: form.keperluan.trim(),
      namaUsaha: form.jenis === 'usaha' ? form.namaUsaha.trim() : undefined
    })
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-inverse-surface/40 p-space-md" onClick={onTutup}>
      <form
        className="flex max-h-full w-full max-w-lg flex-col gap-space-md overflow-y-auto rounded-xl bg-surface-container-lowest p-space-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h2 className="text-title-lg text-on-background">Buat Surat Manual</h2>
            <span className="text-body-sm text-on-surface-variant">Untuk warga yang datang langsung (walk-in)</span>
          </div>
          <button aria-label="Tutup" className="rounded-lg p-1 text-on-surface-variant hover:bg-surface-container" onClick={onTutup} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
          Jenis Surat
          <select className={inputClass} onChange={ubah('jenis')} value={form.jenis}>
            {Object.entries(jenisSurat).map(([id, j]) => (
              <option key={id} value={id}>{j.judul}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
          Warga Pemohon (data diambil dari Direktori Warga)
          <select className={inputClass} onChange={pilihWarga} value={form.wargaId}>
            {wargaAktif.map((w) => (
              <option key={w.id} value={w.id}>{w.nama} — {w.alamat}</option>
            ))}
          </select>
        </label>
        <div className="grid grid-cols-2 gap-space-sm">
          <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
            Agama
            <select className={inputClass} onChange={ubah('agama')} value={form.agama}>
              {['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu'].map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
            Status Perkawinan
            <select className={inputClass} onChange={ubah('statusKawin')} value={form.statusKawin}>
              {['Belum Menikah', 'Kawin', 'Cerai Hidup', 'Cerai Mati'].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
        </div>
        {form.jenis === 'usaha' && (
          <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
            Nama Usaha
            <input className={inputClass} onChange={ubah('namaUsaha')} placeholder="mis. Warung Sembako Barokah" required value={form.namaUsaha} />
          </label>
        )}
        <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
          Maksud / Keperluan
          <textarea
            className="min-h-24 w-full rounded-xl bg-surface-container-low p-space-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30"
            onChange={ubah('keperluan')}
            placeholder="mis. Persyaratan melamar pekerjaan di PT ..."
            required
            value={form.keperluan}
          />
        </label>

        <div className="flex justify-end gap-space-sm pt-space-xs">
          <button className="rounded-xl bg-surface-container-high px-space-md py-2.5 text-label-lg text-on-surface hover:bg-surface-container-highest" onClick={onTutup} type="button">
            Batal
          </button>
          <button className="rounded-xl bg-primary px-space-md py-2.5 text-label-lg text-on-primary shadow-md shadow-primary/20 hover:bg-primary-container" type="submit">
            Masukkan ke Antrean
          </button>
        </div>
      </form>
    </div>
  )
}
