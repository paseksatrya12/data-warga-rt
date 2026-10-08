import { useState } from 'react'
import { opsiBlok, opsiPekerjaan, peranKK } from '../../data/warga'

const kosong = {
  nama: '',
  nik: '',
  noKK: '',
  blok: 'A',
  nomorRumah: '',
  peran: 'Kepala Keluarga',
  status: 'tetap',
  kepemilikan: 'Milik Sendiri',
  jk: 'Laki-laki',
  tempatLahir: '',
  tglLahir: '',
  golDarah: 'O',
  pekerjaan: '',
  kategoriPekerjaan: 'karyawan'
}

const inputClass =
  'h-11 w-full rounded-xl bg-surface-container-low px-space-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30'

function Field({ label, children, className = '' }) {
  return (
    <label className={`flex flex-col gap-space-xs text-label-md text-on-surface-variant ${className}`}>
      {label}
      {children}
    </label>
  )
}

export default function FormWarga({ onSimpan, onTutup }) {
  const [form, setForm] = useState(kosong)
  const ubah = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nomorRumah, ...data } = form
    onSimpan({
      ...data,
      nama: data.nama.trim(),
      noKK: data.noKK || data.nik,
      alamat: `Blok ${data.blok}${nomorRumah.trim() ? ` No. ${nomorRumah.trim()}` : ''}`,
      pekerjaan: data.pekerjaan.trim() || opsiPekerjaan.find((o) => o.value === data.kategoriPekerjaan).label
    })
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-inverse-surface/40 p-space-md" onClick={onTutup}>
      <form
        className="flex max-h-full w-full max-w-2xl flex-col gap-space-md overflow-y-auto rounded-xl bg-surface-container-lowest p-space-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-title-lg text-on-background">Tambah Warga Baru</h2>
          <button aria-label="Tutup" className="rounded-lg p-1 text-on-surface-variant hover:bg-surface-container" onClick={onTutup} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-space-sm sm:grid-cols-2">
          <Field className="sm:col-span-2" label="Nama Lengkap">
            <input autoFocus className={inputClass} onChange={ubah('nama')} placeholder="mis. Bpk. Andi Pratama" required value={form.nama} />
          </Field>
          <Field label="NIK (16 digit)">
            <input className={inputClass} inputMode="numeric" maxLength={16} onChange={ubah('nik')} pattern="\d{16}" required value={form.nik} />
          </Field>
          <Field label="No. KK (kosongkan jika sama dengan NIK)">
            <input className={inputClass} inputMode="numeric" maxLength={16} onChange={ubah('noKK')} pattern="\d{16}" value={form.noKK} />
          </Field>
          <Field label="Blok">
            <select className={inputClass} onChange={ubah('blok')} value={form.blok}>
              {opsiBlok.map((o) => (
                <option key={o.value} value={o.value}>Blok {o.value}</option>
              ))}
            </select>
          </Field>
          <Field label="Nomor Rumah">
            <input className={inputClass} onChange={ubah('nomorRumah')} placeholder="mis. 3/12" value={form.nomorRumah} />
          </Field>
          <Field label="Peran di KK">
            <select className={inputClass} onChange={ubah('peran')} value={form.peran}>
              {Object.keys(peranKK).map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </Field>
          <Field label="Status Domisili">
            <select className={inputClass} onChange={ubah('status')} value={form.status}>
              <option value="tetap">Tetap</option>
              <option value="kontrak">Kontrak / Kos</option>
            </select>
          </Field>
          <Field label="Kepemilikan Rumah">
            <select className={inputClass} onChange={ubah('kepemilikan')} value={form.kepemilikan}>
              {['Milik Sendiri', 'Ikut Orang Tua', 'Ikut Keluarga', 'Sewa Bulanan', 'Kontrak Tahunan'].map((k) => (
                <option key={k}>{k}</option>
              ))}
            </select>
          </Field>
          <Field label="Jenis Kelamin">
            <select className={inputClass} onChange={ubah('jk')} value={form.jk}>
              <option>Laki-laki</option>
              <option>Perempuan</option>
            </select>
          </Field>
          <Field label="Tempat Lahir">
            <input className={inputClass} onChange={ubah('tempatLahir')} required value={form.tempatLahir} />
          </Field>
          <Field label="Tanggal Lahir">
            <input className={inputClass} onChange={ubah('tglLahir')} required type="date" value={form.tglLahir} />
          </Field>
          <Field label="Golongan Darah">
            <select className={inputClass} onChange={ubah('golDarah')} value={form.golDarah}>
              {['A', 'B', 'AB', 'O', '-'].map((g) => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </Field>
          <Field label="Kategori Pekerjaan">
            <select className={inputClass} onChange={ubah('kategoriPekerjaan')} value={form.kategoriPekerjaan}>
              {opsiPekerjaan.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </Field>
          <Field className="sm:col-span-2" label="Pekerjaan (opsional)">
            <input className={inputClass} onChange={ubah('pekerjaan')} placeholder="mis. Guru SD Negeri" value={form.pekerjaan} />
          </Field>
        </div>

        <div className="flex justify-end gap-space-sm pt-space-xs">
          <button className="rounded-xl bg-surface-container-high px-space-md py-2.5 text-label-lg text-on-surface hover:bg-surface-container-highest" onClick={onTutup} type="button">
            Batal
          </button>
          <button className="rounded-xl bg-primary px-space-md py-2.5 text-label-lg text-on-primary shadow-md shadow-primary/20 hover:bg-primary-container" type="submit">
            Simpan Warga
          </button>
        </div>
      </form>
    </div>
  )
}
