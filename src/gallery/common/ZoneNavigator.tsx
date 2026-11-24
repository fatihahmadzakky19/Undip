import { useState } from 'react'
import { ZONES_METADATA, type ZoneId } from '../data/zones'

interface ZoneNavigatorProps {
  activeZone: ZoneId
  onSelectZone: (zoneId: ZoneId) => void
  isMobile?: boolean
}

/**
 * Interactive Sidebar Map & Zone Switcher
 * Displays all 5 Zones:
 * 1. Zona 1 — The Origin of Undip
 * 2. Zona 2 — The Growth of Knowledge
 * 3. Zona 3 — The Heritage of Undip
 * 4. Zona 4 — Undip Today
 * 5. Zona 5 — Undip Future
 *
 * Smooth teleportation transition, displays active status, badges, and metadata.
 */
export function ZoneNavigator({
  activeZone,
  onSelectZone,
  isMobile = false,
}: ZoneNavigatorProps) {
  const [isOpen, setIsOpen] = useState(!isMobile)

  const zoneList: ZoneId[] = [1, 2, 3, 4, 5]

  return (
    <>
      {/* Mobile / Compact Toggle Floating Pill */}
      <button
        type="button"
        className={`gr-zone-toggle-btn${isOpen ? ' is-open' : ''}`}
        onClick={() => setIsOpen((prev) => !prev)}
        title={isOpen ? 'Tutup Peta Zona' : 'Buka Peta Zona Museum'}
        aria-label="Toggle Zone Navigator"
      >
        <span className="gr-zone-toggle-icon">🧭</span>
        <span className="gr-zone-toggle-text">
          {isOpen ? 'Tutup Peta' : `Zona ${activeZone}: ${ZONES_METADATA[activeZone].title}`}
        </span>
      </button>

      {/* Main Sidebar Map Drawer */}
      <aside
        className={`gr-zone-sidebar${isOpen ? ' is-visible' : ' is-collapsed'}${
          isMobile ? ' is-mobile' : ''
        }`}
        aria-label="Museum Zone Navigation"
      >
        <header className="gr-zone-sidebar-head">
          <div className="gr-zone-brand">
            <span className="gr-zone-brand-icon">🏛️</span>
            <div>
              <h3 className="gr-zone-brand-title">Peta 5 Zona Pameran</h3>
              <p className="gr-zone-brand-sub">Heritage Library & Museum Undip</p>
            </div>
          </div>
          <button
            type="button"
            className="gr-zone-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup Navigator"
          >
            ×
          </button>
        </header>

        <nav className="gr-zone-nav-list">
          {zoneList.map((zId) => {
            const meta = ZONES_METADATA[zId]
            const isActive = activeZone === zId

            return (
              <button
                key={zId}
                type="button"
                className={`gr-zone-card${isActive ? ' is-active' : ''}`}
                onClick={() => {
                  onSelectZone(zId)
                  if (isMobile) setIsOpen(false)
                }}
              >
                <div className="gr-zone-card-top">
                  <span className={`gr-zone-num${isActive ? ' is-active' : ''}`}>
                    {meta.number}
                  </span>
                  <span className="gr-zone-era">{meta.era}</span>
                </div>

                <h4 className="gr-zone-title">{meta.title}</h4>
                <p className="gr-zone-sub">{meta.subtitle}</p>

                {isActive && (
                  <div className="gr-zone-active-pill">
                    <span className="gr-active-dot" />
                    <span>Zona Aktif Dirender</span>
                  </div>
                )}
              </button>
            )
          })}
        </nav>

        <footer className="gr-zone-sidebar-foot">
          <p className="gr-zone-foot-hint">
            💡 Memilih zona akan mengarahkan kamera dan merender koleksi zona tersebut.
          </p>
        </footer>
      </aside>
    </>
  )
}
