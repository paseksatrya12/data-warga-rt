import { kategoriTransaksi, formatRupiah } from '../../data/keuangan'

function StatusBadge({ trx }) {
  if (trx.nominal > 0) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container px-space-sm py-0.5 text-label-sm text-secondary">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
        {trx.status}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-surface-container px-space-sm py-0.5 text-label-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-[14px]">receipt_long</span>
      {trx.status}
    </span>
  )
}

export default function RiwayatMutasi({ transaksi, onLihatSemua }) {
  return (
    <div className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-space-sm">
        <div>
          <h2 className="text-title-lg text-on-background">Riwayat Mutasi & Buku Kas Terkini</h2>
          <span className="text-body-sm text-on-surface-variant">Pencatatan real-time pengeluaran & setoran kas warga</span>
        </div>
        <button className="flex items-center gap-0.5 text-label-md text-primary hover:text-primary-container" onClick={onLihatSemua} type="button">
          <span>Lihat Semua Catatan</span>
          <span className="material-symbols-outlined text-title-md">chevron_right</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low text-label-sm uppercase tracking-wider text-on-surface-variant">
              <th className="rounded-l-lg px-space-md py-space-sm">Tanggal & Waktu</th>
              <th className="px-space-md py-space-sm">Keterangan / Deskripsi Transaksi</th>
              <th className="px-space-md py-space-sm">Kategori</th>
              <th className="px-space-md py-space-sm">Nominal</th>
              <th className="rounded-r-lg px-space-md py-space-sm text-right">Status Verifikasi</th>
            </tr>
          </thead>
          <tbody className="text-body-md text-on-surface">
            {transaksi.map((trx) => (
              <tr key={trx.id} className="transition-colors hover:bg-surface-container-low/50">
                <td className="whitespace-nowrap px-space-md py-space-md text-label-sm text-on-surface-variant">{trx.waktu}</td>
                <td className="px-space-md py-space-md">
                  <div className="flex flex-col">
                    <span className="font-semibold text-on-surface">{trx.judul}</span>
                    <span className="text-body-sm text-on-surface-variant">{trx.detail}</span>
                  </div>
                </td>
                <td className="px-space-md py-space-md">
                  <span className={`whitespace-nowrap rounded-full px-space-sm py-0.5 text-label-sm ${kategoriTransaksi[trx.kategori]}`}>
                    {trx.kategori}
                  </span>
                </td>
                <td className={`whitespace-nowrap px-space-md py-space-md font-bold ${trx.nominal > 0 ? 'text-secondary' : 'text-tertiary'}`}>
                  {formatRupiah(trx.nominal)}
                </td>
                <td className="whitespace-nowrap px-space-md py-space-md text-right">
                  <StatusBadge trx={trx} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
