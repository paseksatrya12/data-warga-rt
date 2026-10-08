import { useRef, useState } from 'react'

export function useToast(durasi = 4000) {
  const [pesan, setPesan] = useState('')
  const timer = useRef()

  const tampilkan = (teks) => {
    setPesan(teks)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setPesan(''), durasi)
  }

  return [pesan, tampilkan]
}

export default function Toast({ pesan }) {
  if (!pesan) return null
  return (
    <div
      className="fixed bottom-space-lg right-space-lg z-[70] flex max-w-sm items-start gap-space-sm rounded-xl bg-inverse-surface px-space-md py-space-sm text-body-md text-inverse-on-surface shadow-xl"
      role="status"
    >
      <span className="material-symbols-outlined text-title-md text-secondary-fixed-dim">check_circle</span>
      <span>{pesan}</span>
    </div>
  )
}
