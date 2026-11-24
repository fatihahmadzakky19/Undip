import { useState } from 'react'
import type { SectionType } from './types'
import { MUSEUM_ZONES } from '../data/zones'

interface WayfindingPromptProps {
  visible: boolean
  activeZoneId?: string
  onTeleport: (section: SectionType) => void
  onSelectZone?: (zoneId: 'zone1' | 'zone2' | 'zone3' | 'zone4' | 'zone5') => void
  onDismiss?: () => void
}

/**
 * Interactive Wayfinding Prompt: "Mau kemana??"
 * Displays 5 Zones and prominent museum landmarks when the visitor approaches the 3D Directory Board.
 */
export function WayfindingPrompt({
  visible,
  activeZoneId,
  onTeleport,
  onSelectZone,
  onDismiss,
}: WayfindingPromptProps) {
  const [dismissed, setDismissed] = useState(false)

  // Reset dismissed state when visitor leaves and re-enters the board area
  if (!visible && dismissed) {
    setDismissed(false)
  }

  if (!visible || dismissed) return null

  const handleSelectSection = (section: SectionType) => {
    onTeleport(section)
    setDismissed(true)
  }

  const handleSelectZone = (zoneId: 'zone1' | 'zone2' | 'zone3' | 'zone4' | 'zone5') => {
    onSelectZone?.(zoneId)
    setDismissed(true)
  }

  return (
    <div className="gr-wayfind-overlay" role="dialog" aria-label="Panduan Petunjuk Arah">
      <div className="gr-wayfind-card">
        <header className="gr-wayfind-head">
          <div className="gr-wayfind-tag">
            <span>📍 Papan Panduan & Direktori 5 Zona</span>
          </div>
          <button
            type="button"
            className="gr-wayfind-close"
            onClick={() => {
              setDismissed(true)
              onDismiss?.()
            }}
            aria-label="Tutup pilihan"
          >
            ×
          </button>
        </header>

        <div className="gr-wayfind-body">
          <h3 className="gr-wayfind-question">Mau kemana??</h3>
          <p className="gr-wayfind-subtitle">
            Pilih Zona Sejarah atau Landmark Utama yang ingin Anda jelajahi:
          </p>

          {/* 5 Museum Zones */}
          <div className="gr-wayfind-grid">
            {MUSEUM_ZONES.map((zone) => {
              const isCurrent = zone.id === activeZoneId
              return (
                <button
                  key={zone.id}
                  type="button"
                  className={`gr-wayfind-btn ${isCurrent ? 'is-active' : 'gr-wayfind-gold'}`}
                  onClick={() => handleSelectZone(zone.id)}
                >
                  <span className="gr-btn-icon">🏛️</span>
                  <div className="gr-btn-text">
                    <strong>Zona {zone.number}: {zone.title}</strong>
                    <small>{zone.subtitle}</small>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="gr-wayfind-divider" />

          {/* Landmark Landmarks */}
          <div className="gr-wayfind-grid">
            <button
              type="button"
              className="gr-wayfind-btn gr-wayfind-gold"
              onClick={() => handleSelectSection('podium')}
            >
              <span className="gr-btn-icon">🎙️</span>
              <div className="gr-btn-text">
                <strong>Podium Kehormatan</strong>
                <small>Panggung Utama Dies Natalis</small>
              </div>
            </button>

            <button
              type="button"
              className="gr-wayfind-btn gr-wayfind-gold"
              onClick={() => handleSelectSection('map')}
            >
              <span className="gr-btn-icon">🗺️</span>
              <div className="gr-btn-text">
                <strong>Maket Kawasan Kampus</strong>
                <small>Tata Ruang 3D Tembalang</small>
              </div>
            </button>

            <button
              type="button"
              className="gr-wayfind-btn gr-wayfind-gold"
              onClick={() => handleSelectSection('prasasti')}
            >
              <span className="gr-btn-icon">📜</span>
              <div className="gr-btn-text">
                <strong>Prasasti Peresmian 1957</strong>
                <small>Batu Obsidian Presiden Sukarno</small>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
