import { berita } from '../data/warta'

export default function Warta() {
  return (
    <div className="flex flex-col rounded-xl bg-surface-container-lowest p-space-lg shadow-sm lg:col-span-7">
      <div className="flex items-center justify-between pb-space-md">
        <div className="flex items-center gap-space-sm">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-tertiary-fixed text-tertiary">
            <span className="material-symbols-outlined text-title-md">campaign</span>
          </div>
          <div>
            <h2 className="text-headline-sm font-bold text-on-surface">Warta Warga RT 04</h2>
            <span className="text-body-sm text-on-surface-variant">Pengumuman warga</span>
          </div>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-space-md py-2 text-label-lg text-on-primary shadow-sm hover:bg-secondary" type="button">
          <span className="material-symbols-outlined text-title-md">add_circle</span>
          <span>Buat Pengumuman</span>
        </button>
      </div>
      <div className="mt-space-sm flex flex-col gap-space-md">
        {berita.map((item) => (
          <article key={item.id} className="flex flex-col gap-space-md rounded-xl bg-surface-container-low p-space-md sm:flex-row">
            <div className="flex h-24 shrink-0 overflow-hidden rounded-lg bg-surface-container-highest sm:w-28">
              <img className="h-full w-full object-cover" alt={item.judul} src={item.gambar} />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-sm">
                  <span className={`rounded-full px-2.5 py-0.5 text-label-sm font-bold uppercase ${item.badgeClass}`}>{item.badge}</span>
                  <span className="text-body-sm text-on-surface-variant">{item.tanggal}</span>
                </div>
                <h3 className="mt-1 text-title-md font-bold text-on-surface">{item.judul}</h3>
                <p className="mt-0.5 line-clamp-2 text-body-sm text-on-surface-variant">{item.deskripsi}</p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-label-sm text-on-surface-variant">{item.penulis}</span>
                <a className="text-label-sm font-bold text-primary hover:underline" href="#">Baca Selengkapnya</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
