import { statusDomisili, peranKK, inisial } from '../../data/warga'

function warnaAvatar(w, terpilih) {
  if (terpilih) return 'bg-primary-container text-on-primary-container shadow-sm'
  if (w.status === 'kontrak') return 'bg-tertiary-fixed text-tertiary'
  if (w.peran === 'Kepala Keluarga') return 'bg-secondary text-on-secondary shadow-sm'
  return 'bg-surface-container-highest text-on-surface'
}

// Nomor halaman dengan elipsis, mis. [1, 2, 3, '…', 49]
function nomorHalaman(aktif, total) {
  const set = new Set([1, total, aktif - 1, aktif, aktif + 1].filter((n) => n >= 1 && n <= total))
  if (aktif <= 2) [2, 3].forEach((n) => n <= total && set.add(n))
  const urut = [...set].sort((a, b) => a - b)
  return urut.flatMap((n, i) => (i > 0 && n - urut[i - 1] > 1 ? ['…', n] : [n]))
}

export default function TabelWarga({ baris, total, halaman, perHalaman, onHalaman, onPerHalaman, terpilihId, onPilih, onChat, onMenu }) {
  const totalHalaman = Math.max(1, Math.ceil(total / perHalaman))
  const awal = total === 0 ? 0 : (halaman - 1) * perHalaman + 1
  const akhir = Math.min(halaman * perHalaman, total)

  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm xl:col-span-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-surface-container-low text-label-sm uppercase tracking-wider text-on-surface-variant">
              <th className="px-space-md py-space-md">Warga & Identitas</th>
              <th className="px-space-md py-space-md">No. KK & Blok</th>
              <th className="px-space-md py-space-md">Peran di KK</th>
              <th className="px-space-md py-space-md">Status Domisili</th>
              <th className="px-space-md py-space-md">Kepemilikan</th>
              <th className="px-space-md py-space-md text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container">
            {baris.length === 0 && (
              <tr>
                <td className="px-space-md py-space-xl text-center text-body-md text-on-surface-variant" colSpan={6}>
                  Tidak ada data warga yang cocok dengan filter.
                </td>
              </tr>
            )}
            {baris.map((w) => {
              const terpilih = w.id === terpilihId
              const status = statusDomisili[w.status]
              const peran = peranKK[w.peran]
              const kontrak = w.status === 'kontrak'
              return (
                <tr
                  key={w.id}
                  className={`group cursor-pointer transition-colors ${
                    terpilih ? 'bg-primary-fixed/10 hover:bg-primary-fixed/20' : 'hover:bg-surface-container/60'
                  }`}
                  onClick={() => onPilih(w)}
                >
                  <td className="px-space-md py-space-md">
                    <div className="flex items-center gap-space-sm">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-label-md font-bold ${warnaAvatar(w, terpilih)}`}>
                        {inisial(w.nama)}
                      </div>
                      <div className="flex min-w-0 flex-col">
                        <span
                          className={`whitespace-nowrap text-label-lg font-semibold text-on-surface ${
                            kontrak ? 'group-hover:text-tertiary-container' : 'group-hover:text-primary'
                          }`}
                        >
                          {w.nama}
                        </span>
                        <span className="font-mono text-body-sm text-on-surface-variant">{w.nik}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-space-md py-space-md">
                    <div className="flex flex-col whitespace-nowrap">
                      <span className="text-label-md font-medium text-on-surface">{w.alamat}</span>
                      <span className="text-body-sm text-on-surface-variant">{w.asal ? `Asal: ${w.asal}` : `KK: ${w.noKK}`}</span>
                    </div>
                  </td>
                  <td className="px-space-md py-space-md">
                    <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-space-sm py-0.5 text-label-sm font-semibold ${peran.className}`}>
                      {peran.icon && <span className="material-symbols-outlined text-[13px]">{peran.icon}</span>} {w.peran}
                    </span>
                  </td>
                  <td className="px-space-md py-space-md">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-space-sm py-0.5 text-label-sm font-semibold ${status.className}`}>
                      <span className={`h-2 w-2 rounded-full ${status.dot}`}></span> {status.label}
                    </span>
                  </td>
                  <td className="px-space-md py-space-md">
                    <span className={`whitespace-nowrap text-body-sm ${kontrak ? 'font-medium text-tertiary-container' : 'text-on-surface'}`}>
                      {w.kepemilikan}
                    </span>
                  </td>
                  <td className="px-space-md py-space-md text-center" onClick={(e) => e.stopPropagation()}>
                    <div className="inline-flex items-center gap-1">
                      <button className="rounded-lg p-1.5 text-primary transition-all hover:bg-surface-container" onClick={() => onPilih(w)} title="Lihat Kartu Keluarga" type="button">
                        <span className="material-symbols-outlined text-title-md">visibility</span>
                      </button>
                      <button className="rounded-lg p-1.5 text-secondary transition-all hover:bg-surface-container" onClick={() => onChat(w)} title="Hubungi WhatsApp" type="button">
                        <span className="material-symbols-outlined text-title-md">chat</span>
                      </button>
                      <button className="rounded-lg p-1.5 text-outline transition-all hover:bg-surface-container" onClick={() => onMenu(w)} title="Menu Opsi" type="button">
                        <span className="material-symbols-outlined text-title-md">more_vert</span>
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-between gap-space-md bg-surface-container-low p-space-md text-body-sm text-on-surface-variant sm:flex-row">
        <div className="flex flex-wrap items-center gap-space-sm">
          <span>
            Menampilkan <strong className="text-on-surface">{awal} - {akhir}</strong> dari <strong className="text-on-surface">{total}</strong> data warga
          </span>
          <span className="text-outline">|</span>
          <label className="flex items-center gap-1">
            <span>Baris per halaman:</span>
            <select
              className="rounded-lg bg-surface-container-lowest px-2 py-1 text-label-sm font-medium text-on-surface focus:outline-none"
              onChange={(e) => onPerHalaman(Number(e.target.value))}
              value={perHalaman}
            >
              {[10, 25, 50].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="rounded-lg bg-surface-container px-space-sm py-1 text-on-surface-variant hover:bg-surface-container-high disabled:opacity-40"
            disabled={halaman === 1}
            onClick={() => onHalaman(halaman - 1)}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">chevron_left</span>
          </button>
          {nomorHalaman(halaman, totalHalaman).map((n, i) =>
            n === '…' ? (
              <span key={`e${i}`} className="px-1 text-outline">...</span>
            ) : (
              <button
                key={n}
                className={`h-8 w-8 rounded-lg text-label-md ${
                  n === halaman
                    ? 'bg-primary-container font-bold text-on-primary-container shadow-sm'
                    : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container'
                }`}
                onClick={() => onHalaman(n)}
                type="button"
              >
                {n}
              </button>
            )
          )}
          <button
            className="rounded-lg bg-surface-container px-space-sm py-1 text-on-surface-variant hover:bg-surface-container-high disabled:opacity-40"
            disabled={halaman === totalHalaman}
            onClick={() => onHalaman(halaman + 1)}
            type="button"
          >
            <span className="material-symbols-outlined text-title-md">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  )
}
