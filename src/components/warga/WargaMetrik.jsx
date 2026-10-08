import { wargaMetrik } from '../../data/warga'

export default function WargaMetrik() {
  return (
    <div className="grid grid-cols-1 gap-space-md md:grid-cols-2 xl:grid-cols-4">
      {wargaMetrik.map((m) => (
        <div key={m.id} className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-label-md font-medium text-on-surface-variant">{m.label}</span>
            <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${m.iconClass}`}>
              <span className="material-symbols-outlined text-title-md">{m.icon}</span>
            </span>
          </div>
          <div className="mt-space-sm flex items-baseline gap-space-sm">
            <span className={`text-headline-lg font-bold ${m.valueClass ?? 'text-on-surface'}`}>{m.value}</span>
            {m.badge ? (
              <span className={`rounded-full px-space-xs py-0.5 text-label-sm ${m.badgeClass}`}>{m.badge}</span>
            ) : (
              <span className="text-label-sm text-on-surface-variant">{m.unit}</span>
            )}
          </div>
          {m.bar ? (
            <div className="mt-space-xs h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
              <div className={`h-full rounded-full ${m.bar.className}`} style={{ width: m.bar.width }}></div>
            </div>
          ) : (
            <div className="mt-space-xs flex items-center justify-between text-label-sm text-on-surface-variant">
              <span>{m.metaLeft}</span>
              <span className="font-semibold text-secondary">{m.metaRight}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
