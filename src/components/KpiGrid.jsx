import { kpiCards } from '../data/navigasi'
import { kasSuratCards } from '../data/metrik'

function KpiCard({ card }) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <span className="text-label-md font-semibold text-on-surface-variant">{card.label}</span>
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor}`}>
          <span className="material-symbols-outlined text-title-lg">{card.icon}</span>
        </div>
      </div>
      <div className="mt-space-md">
        <div className="flex items-baseline gap-space-sm">
          {card.prefix && <span className="text-title-lg font-bold text-primary">{card.prefix}</span>}
          <span className={`text-headline-lg font-extrabold tracking-tight ${card.valueClass ?? 'text-on-surface'}`}>{card.value}</span>
          {card.unit && <span className="text-title-md text-on-surface-variant">{card.unit}</span>}
        </div>
        <div className="mt-space-sm flex items-center justify-between text-body-sm">
          {card.badgeText ? (
            <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-label-sm font-semibold ${card.badgeBg ?? 'bg-primary-fixed'} ${card.badgeColor ?? 'text-on-primary-fixed-variant'}`}>
              {card.badgeIcon && <span className="material-symbols-outlined text-[14px]">{card.badgeIcon}</span>}
              {card.badgeText}
            </span>
          ) : (
            <span className="text-label-md text-on-surface-variant">{card.metaLeft}</span>
          )}
          {card.action ? (
            <a className="text-label-sm font-bold text-tertiary hover:underline" href="#">{card.action}</a>
          ) : (
            <span className={card.metaRight ? `font-semibold text-secondary` : 'text-on-surface-variant'}>{card.suffix ?? card.metaRight}</span>
          )}
        </div>
      </div>
      <div className="mt-space-md h-1.5 w-full rounded-full bg-surface-container">
        <div className={`h-1.5 rounded-full ${card.barColor}`} style={{ width: card.barWidth }}></div>
      </div>
    </div>
  )
}

export default function KpiGrid() {
  return (
    <section className="grid grid-cols-1 gap-space-lg sm:grid-cols-2 xl:grid-cols-4">
      {kpiCards.map((card) => (
        <KpiCard key={card.id} card={card} />
      ))}
      {kasSuratCards.map((card) => (
        <KpiCard key={card.id} card={card} />
      ))}
    </section>
  )
}
