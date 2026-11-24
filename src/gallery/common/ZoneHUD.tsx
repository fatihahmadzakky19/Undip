import { ZONES_METADATA, type ZoneId } from '../data/zones'

interface ZoneHUDProps {
  activeZone: ZoneId
}

/**
 * Floating Top Zone HUD Badge
 * Displays current active exhibition zone identity, subtitle, and era.
 */
export function ZoneHUD({ activeZone }: ZoneHUDProps) {
  const meta = ZONES_METADATA[activeZone]

  return (
    <div className="gr-zone-hud-wrap" aria-live="polite">
      <div className="gr-zone-hud-badge">
        <span className="gr-zone-hud-dot" />
        <span className="gr-zone-hud-num">{meta.number}</span>
        <span className="gr-zone-hud-divider">•</span>
        <span className="gr-zone-hud-title">{meta.title.toUpperCase()}</span>
      </div>
      <p className="gr-zone-hud-sub">{meta.subtitle}</p>
    </div>
  )
}
