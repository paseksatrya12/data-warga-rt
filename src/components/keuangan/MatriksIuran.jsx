import { iuranBlok } from '../../data/keuangan'

const AMBANG_TERTIB = 90

export default function MatriksIuran({ onReminder }) {
  const totalKK = iuranBlok.reduce((sum, b) => sum + b.total, 0)
  const totalLunas = iuranBlok.reduce((sum, b) => sum + b.lunas, 0)

  return (
    <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-5">
      <div>
        <div className="mb-space-xs flex items-center justify-between">
          <h2 className="text-title-lg text-on-background">Matriks Iuran Warga Bulanan</h2>
          <span className="rounded-full bg-secondary-container px-space-sm py-0.5 text-label-sm text-on-secondary-container">Maret 2025</span>
        </div>
        <p className="mb-space-md text-body-sm text-on-surface-variant">Distribusi kepatuhan pembayaran kas per gang RT 04.</p>
        <div className="flex flex-col gap-space-md">
          {iuranBlok.map((b) => {
            const persen = Math.round((b.lunas / b.total) * 100)
            const tertib = persen >= AMBANG_TERTIB
            const belum = b.total - b.lunas
            return (
              <div key={b.blok} className="flex flex-col gap-space-xs rounded-xl bg-surface-container-low p-space-sm">
                <div className="flex items-center justify-between gap-space-sm text-label-md">
                  <span className="font-bold text-on-surface">{b.blok}</span>
                  <span className={`whitespace-nowrap font-bold ${tertib ? 'text-secondary' : 'text-tertiary'}`}>
                    {persen}% ({b.lunas}/{b.total} Rumah)
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div
                    className={`h-2.5 rounded-full ${tertib ? 'bg-secondary' : 'bg-tertiary-container'}`}
                    style={{ width: `${persen}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-body-sm text-on-surface-variant">
                  <span>{belum} Rumah belum terbayar</span>
                  <button
                    className="text-label-sm text-primary hover:underline"
                    onClick={() => onReminder(b, belum)}
                    type="button"
                  >
                    Kirim Pengingat
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex items-center justify-between pt-space-sm text-label-sm text-on-surface-variant">
        <span>Total Warga: {totalKK} KK</span>
        <span className="font-semibold text-secondary">{totalLunas} KK Tertib Iuran</span>
      </div>
    </div>
  )
}
