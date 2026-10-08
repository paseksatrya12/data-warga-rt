import { kasMetrik } from '../../data/keuangan'

export default function KasMetrik() {
  return (
    <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
      {kasMetrik.map((m) => (
        <div
          key={m.id}
          className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm"
        >
          {m.decor && (
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-secondary-container/40"></div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-label-md uppercase tracking-wider text-on-surface-variant">{m.label}</span>
            <span className={`flex items-center justify-center rounded-xl p-2 ${m.iconBg} ${m.iconColor}`}>
              <span className="material-symbols-outlined text-title-md">{m.icon}</span>
            </span>
          </div>
          <div className="relative mt-space-md">
            <div className={`text-headline-lg font-bold tracking-tight ${m.valueClass}`}>{m.value}</div>
            <div className={`mt-space-xs flex items-center gap-space-xs text-label-md ${m.metaClass}`}>
              {m.metaIcon && (
                <span className={`material-symbols-outlined ${m.metaIconClass ?? 'text-body-lg'}`}>{m.metaIcon}</span>
              )}
              {m.metaStrong && <span className="font-bold text-secondary">{m.metaStrong}</span>}
              <span>{m.metaText}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
