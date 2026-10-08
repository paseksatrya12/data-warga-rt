import { useState } from 'react'
import { kategoriTransaksi } from '../../data/keuangan'

const kosong = { jenis: 'masuk', judul: '', detail: '', kategori: 'Iuran Warga', nominal: '' }

const inputClass =
  'h-11 w-full rounded-xl bg-surface-container-low px-space-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30'

export default function FormTransaksi({ onSimpan, onTutup }) {
  const [form, setForm] = useState(kosong)
  const ubah = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const nominal = Number(form.nominal)
    if (!form.judul.trim() || !nominal) return
    onSimpan({
      judul: form.judul.trim(),
      detail: form.detail.trim() || '-',
      kategori: form.kategori,
      nominal: form.jenis === 'masuk' ? nominal : -nominal
    })
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-inverse-surface/40 p-space-md" onClick={onTutup}>
      <form
        className="flex w-full max-w-lg flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-title-lg text-on-background">Catat Transaksi Kas</h2>
          <button aria-label="Tutup" className="rounded-lg p-1 text-on-surface-variant hover:bg-surface-container" onClick={onTutup} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-space-sm">
          {[
            { id: 'masuk', label: 'Pemasukan', icon: 'arrow_downward', on: 'bg-primary text-on-primary' },
            { id: 'keluar', label: 'Pengeluaran', icon: 'arrow_upward', on: 'bg-tertiary text-on-tertiary' }
          ].map((j) => (
            <button
              key={j.id}
              className={`flex items-center justify-center gap-space-xs rounded-xl py-2.5 text-label-lg transition-all ${
                form.jenis === j.id ? j.on : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'
              }`}
              onClick={() => setForm({ ...form, jenis: j.id })}
              type="button"
            >
              <span className="material-symbols-outlined text-title-md">{j.icon}</span>
              {j.label}
            </button>
          ))}
        </div>

        <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
          Keterangan Transaksi
          <input autoFocus className={inputClass} onChange={ubah('judul')} placeholder="mis. Iuran Keamanan Bulan Maret" required value={form.judul} />
        </label>
        <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
          Detail (opsional)
          <input className={inputClass} onChange={ubah('detail')} placeholder="Nama warga / blok / nama toko" value={form.detail} />
        </label>
        <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
          <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
            Kategori
            <select className={inputClass} onChange={ubah('kategori')} value={form.kategori}>
              {Object.keys(kategoriTransaksi).map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-space-xs text-label-md text-on-surface-variant">
            Nominal (Rp)
            <input className={inputClass} min="1" onChange={ubah('nominal')} placeholder="50000" required type="number" value={form.nominal} />
          </label>
        </div>

        <div className="flex justify-end gap-space-sm pt-space-xs">
          <button className="rounded-xl bg-surface-container-high px-space-md py-2.5 text-label-lg text-on-surface hover:bg-surface-container-highest" onClick={onTutup} type="button">
            Batal
          </button>
          <button className="rounded-xl bg-primary px-space-md py-2.5 text-label-lg text-on-primary shadow-md shadow-primary/20 hover:bg-primary-container" type="submit">
            Simpan Transaksi
          </button>
        </div>
      </form>
    </div>
  )
}
