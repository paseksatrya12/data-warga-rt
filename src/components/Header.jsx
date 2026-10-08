import { useState } from 'react'

export default function Header() {
  const [keyword, setKeyword] = useState('')

  return (
    <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between bg-surface/80 px-gutter shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl lg:left-72">
      <div className="flex max-w-xl flex-1 items-center gap-space-lg">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-title-md text-outline">search</span>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="h-11 w-full rounded-xl bg-surface-container-lowest pl-11 pr-space-md text-body-md text-on-surface shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30"
            placeholder="Cari warga, NIK, nomor surat..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <div className="hidden items-center gap-space-xs rounded-full bg-secondary-container px-space-md py-space-xs md:flex">
          <span className="h-2 w-2 animate-ping rounded-full bg-secondary"></span>
          <span className="text-label-sm font-semibold text-on-secondary-container">Mode Pengurus RT - Aktif</span>
        </div>
        <button aria-label="Tombol Notifikasi dan Darurat" className="relative rounded-xl p-space-sm text-on-surface-variant transition-all hover:bg-surface-container hover:text-on-surface" type="button">
          <span className="material-symbols-outlined text-headline-sm">notifications</span>
          <span className="absolute right-1.5 top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-tertiary-container text-[9px] font-bold text-on-tertiary ring-2 ring-surface">3</span>
        </button>
        <div className="mx-space-xs h-8 w-[1px] bg-outline-variant/40"></div>
        <div className="flex cursor-pointer items-center gap-space-sm rounded-xl px-space-sm py-space-xs transition-all hover:bg-surface-container">
          <img
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtFpSk5JWScLKnh6nqSMteLpCUpELf5Q_v4VY0LMEHub02UxJd8lNrIS641RAgkO7m6yyoN9A7Efbeec99XCouSzEciqiI3V5O7jOFmEm8jVeUMUZ-aSwoXtP5-c0LoaW5IAvJ5todG2HNYyeXUpT1-QaSs1Tx9Z1ZfcVBOhdCT-HeqjdwpaG8NOCHTbpauy0rGbHPHmisl7t8PH1VqmxA9Ye6OXvEyV6NlNEPSbWe"
          />
          <div className="hidden flex-col text-left sm:flex">
            <span className="text-label-lg leading-tight text-on-surface">Bpk. Budi Santoso</span>
            <span className="text-label-sm text-on-surface-variant">Ketua RT 04</span>
          </div>
          <span className="material-symbols-outlined ml-space-xs text-title-md text-outline">expand_more</span>
        </div>
      </div>
    </header>
  )
}
