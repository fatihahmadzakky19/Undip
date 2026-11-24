import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import type { SelectedExhibit, SectionType, ZoneType } from '../Zone1/types'
import type { Founder, HistoryExhibit } from '../Zone1/data/exhibits'
import type { HeritageBook } from '../data/books'
import { MUSEUM_ZONES } from '../data/zones'
import {
  SECTION_TARGETS,
  START_POSITION,
} from '../Zone1/layout'
import { GalleryEnvironment } from '../Zone1/GalleryEnvironment'
import { GalleryLighting } from '../Zone1/GalleryLighting'
import { FirstPersonControls } from '../Zone1/FirstPersonControls'
import { DesktopHints } from '../Zone1/DesktopHints'
import { MobileControls } from '../Zone1/MobileControls'
import { ExhibitInformationPanel } from '../Zone1/ExhibitInformationPanel'
import { WayfindingPrompt } from '../Zone1/WayfindingPrompt'
import { ZoneNavigator } from './ZoneNavigator'
import { InteractiveBookModal } from './InteractiveBookModal'

// The 5 Curated Zones living within the Single Room
import { Zone1Content } from '../Zone1/Zone1Content'
import { Zone2Content } from '../Zone2/Zone2Content'
import { Zone3Content } from '../Zone3/Zone3Content'
import { Zone4Content } from '../Zone4/Zone4Content'
import { Zone5Content } from '../Zone5/Zone5Content'

import '../Zone1/gallery.css'

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () =>
      setIsMobile(window.innerWidth <= 820 || window.matchMedia('(pointer: coarse)').matches)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return isMobile
}

/**
 * Universitas Diponegoro Interactive Heritage Library & Historical Museum
 * Master Architecture:
 * - ONE SINGLE MAIN ROOM: All architectural shell elements (walls, ceiling, floor, wainscot, carpet, chandelier)
 *   remain persistently active.
 * - 5 ZONES IN THE SAME ROOM:
 *   1. Zone 1: The Origin of Undip (1956–1961)
 *   2. Zone 2: The Growth of Knowledge (1961–1990)
 *   3. Zone 3: The Heritage of Undip (1990–2010)
 *   4. Zone 4: Undip Today (2010–Sekarang)
 *   5. Zone 5: Undip Future (Menuju 2045)
 * - LOW-PROFILE HORIZONTAL BOOKSHELVES: Placed seamlessly on the empty wall space directly UNDER the photo frames.
 * - PRESERVED & ENHANCED TALL BOOKCASES: Dark walnut bookcases with internal warm downlights and gold crests.
 * - INTERACTIVE HERITAGE BOOK READER: Full modal with leather hardcover preview, abstract, key quotes & citations.
 * - INTERACTIVE EXHIBITS & DIRECTORY BOARD: Smooth camera transitions & proximity-based wayfinding.
 */
export function MuseumGallery() {
  const isMobile = useIsMobile()
  const [activeZone, setActiveZone] = useState<ZoneType>('zone1')
  const [selectedExhibit, setSelectedExhibit] = useState<SelectedExhibit | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [resetSignal, setResetSignal] = useState(0)
  const [targetPosition, setTargetPosition] = useState<[number, number, number] | null>(null)
  const [isNearDirectory, setIsNearDirectory] = useState(false)

  const moveInputRef = useRef<{ forward: number; strafe: number }>({ forward: 0, strafe: 0 })
  const hoveredRef = useRef<string | null>(null)
  const panelOpenRef = useRef(false)
  const draggedRef = useRef(false)

  useEffect(() => {
    hoveredRef.current = hoveredId
    document.body.style.cursor = hoveredId ? 'pointer' : ''
    return () => {
      document.body.style.cursor = ''
    }
  }, [hoveredId])

  useEffect(() => {
    panelOpenRef.current = selectedExhibit !== null
  }, [selectedExhibit])

  // Keyboard shortcut to switch zones: Keys '1', '2', '3', '4', '5'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedExhibit) return
      if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5'].includes(e.code)) {
        const num = parseInt(e.code.replace('Digit', ''), 10)
        const targetZone = `zone${num}` as ZoneType
        const zoneCfg = MUSEUM_ZONES.find((z) => z.id === targetZone)
        if (zoneCfg) {
          setActiveZone(targetZone)
          setTargetPosition(zoneCfg.cameraTarget)
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedExhibit])

  // Select Handlers
  const handleSelectFounder = useCallback((founder: Founder) => {
    if (draggedRef.current) return
    setSelectedExhibit({ type: 'founder', data: founder })
  }, [])

  const handleSelectExhibit = useCallback((exhibit: HistoryExhibit | { id: string; title: string; subtitle: string; description: string; highlights?: string[] }) => {
    if (draggedRef.current) return
    setSelectedExhibit({ type: 'history', data: exhibit as HistoryExhibit })
  }, [])

  const handleSelectBook = useCallback((book: HeritageBook) => {
    if (draggedRef.current) return
    setSelectedExhibit({ type: 'book', data: book })
  }, [])

  const handleSelectPodium = useCallback(() => {
    if (draggedRef.current) return
    setSelectedExhibit({
      type: 'podium',
      data: {
        id: 'ceremonial-podium',
        title: 'Podium Kehormatan Universitas Diponegoro',
        subtitle: 'Simbol Wibawa & Tradisi Dies Natalis',
        description: 'Podium resmi upacara akademik dan orasi ilmiah universitas, berorientasi menghadap hadirin dan pintu masuk utama dengan ukiran jati Jepara dan lambang perisai emas Undip.',
      },
    })
  }, [])

  const handleSelectPrasasti = useCallback(() => {
    if (draggedRef.current) return
    setSelectedExhibit({
      type: 'prasasti',
      data: {
        id: 'prasasti-undip',
        title: 'Prasasti Pendirian & Peresmian Universitas Diponegoro',
        subtitle: 'Batu Marmer Hitam Obsidian • 9 Januari 1957',
        description: 'Prasasti bersejarah peresmian Universitas Diponegoro oleh Presiden Pertama Republik Indonesia Ir. Soekarno.',
      },
    })
  }, [])

  const handleSelectMap = useCallback(() => {
    if (draggedRef.current) return
    setSelectedExhibit({
      type: 'miniature-map',
      data: {
        id: 'campus-maket',
        title: 'Maket 3D Kawasan Kampus Tembalang & Muladi Dome',
        subtitle: 'Cetak Biru Arsitektural Kawasan Pendidikan Terpadu 180 Hektar',
        description: 'Representasi 3D tata ruang kampus Tembalang dengan gedung Muladi Dome, rektorat Widya Puraya, RSND, dan kompleks 14 fakultas.',
      },
    })
  }, [])

  const handleHover = useCallback((id: string | null) => setHoveredId(id), [])
  const handleReset = useCallback(() => {
    setResetSignal((signal) => signal + 1)
    setTargetPosition(null)
  }, [])
  const handleClose = useCallback(() => setSelectedExhibit(null), [])

  const handleTeleport = useCallback((section: SectionType) => {
    setTargetPosition(SECTION_TARGETS[section])
  }, [])

  const handleSelectZone = useCallback((zoneId: ZoneType) => {
    setActiveZone(zoneId)
    const zoneCfg = MUSEUM_ZONES.find((z) => z.id === zoneId)
    if (zoneCfg) {
      setTargetPosition(zoneCfg.cameraTarget)
    }
  }, [])

  const selectedExhibitId = selectedExhibit ? (selectedExhibit.data as { id: string }).id : null
  const isBookModalOpen = selectedExhibit?.type === 'book'

  return (
    <div className={`gr-root${isMobile ? ' is-mobile' : ''}`}>
      {/* 1. Master Floating Zone Navigator (5 Zones in Single Room) */}
      <ZoneNavigator activeZoneId={activeZone} onSelectZone={handleSelectZone} />

      {/* 2. Three.js Monumental Heritage Scene */}
      <Canvas
        shadows={!isMobile}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onPointerMissed={() => setSelectedExhibit(null)}
      >
        <color attach="background" args={['#0e1724']} />
        <fog attach="fog" args={['#0e1724', 45, 95]} />

        <PerspectiveCamera
          makeDefault
          position={START_POSITION}
          fov={isMobile ? 66 : 56}
          near={0.1}
          far={140}
        />

        <Suspense fallback={null}>
          {/* Main Architectural Shell (Always Active in the Single Grand Room) */}
          <GalleryLighting castShadows={!isMobile} />
          <GalleryEnvironment isNearDirectory={isNearDirectory} />

          {/* Dynamic On-Demand Zone Exhibition Layer */}
          {activeZone === 'zone1' && (
            <Zone1Content
              selectedExhibitId={selectedExhibitId}
              hoveredId={hoveredId}
              onSelectFounder={handleSelectFounder}
              onSelectExhibit={handleSelectExhibit}
              onSelectBook={handleSelectBook}
              onSelectPodium={handleSelectPodium}
              onSelectPrasasti={handleSelectPrasasti}
              onSelectMap={handleSelectMap}
              onHover={handleHover}
            />
          )}

          {activeZone === 'zone2' && (
            <Zone2Content
              selectedExhibitId={selectedExhibitId}
              hoveredId={hoveredId}
              onSelectExhibit={handleSelectExhibit}
              onSelectBook={handleSelectBook}
              onSelectMap={handleSelectMap}
              onHover={handleHover}
            />
          )}

          {activeZone === 'zone3' && (
            <Zone3Content
              selectedExhibitId={selectedExhibitId}
              hoveredId={hoveredId}
              onSelectExhibit={handleSelectExhibit}
              onSelectBook={handleSelectBook}
              onSelectPodium={handleSelectPodium}
              onSelectPrasasti={handleSelectPrasasti}
              onHover={handleHover}
            />
          )}

          {activeZone === 'zone4' && (
            <Zone4Content
              selectedExhibitId={selectedExhibitId}
              hoveredId={hoveredId}
              onSelectExhibit={handleSelectExhibit}
              onSelectBook={handleSelectBook}
              onSelectMap={handleSelectMap}
              onHover={handleHover}
            />
          )}

          {activeZone === 'zone5' && (
            <Zone5Content
              selectedExhibitId={selectedExhibitId}
              hoveredId={hoveredId}
              onSelectExhibit={handleSelectExhibit}
              onSelectBook={handleSelectBook}
              onSelectPodium={handleSelectPodium}
              onSelectPrasasti={handleSelectPrasasti}
              onHover={handleHover}
            />
          )}
        </Suspense>

        <FirstPersonControls
          resetSignal={resetSignal}
          targetPosition={targetPosition}
          moveInputRef={moveInputRef}
          hoveredRef={hoveredRef}
          panelOpenRef={panelOpenRef}
          draggedRef={draggedRef}
          onProximityChange={setIsNearDirectory}
        />
      </Canvas>

      {/* 3. Desktop Navigation & Shortcut Hints */}
      {!isMobile && <DesktopHints />}

      {/* 4. Mobile Controls */}
      {isMobile && (
        <MobileControls
          moveInputRef={moveInputRef}
          visible={selectedExhibit === null}
          onReset={handleReset}
          onTeleport={handleTeleport}
        />
      )}

      {/* 5. Directory Board Wayfinding Modal (Supports all 5 Zones & Landmarks) */}
      <WayfindingPrompt
        visible={isNearDirectory && selectedExhibit === null}
        activeZoneId={activeZone}
        onTeleport={handleTeleport}
        onSelectZone={handleSelectZone}
      />

      {/* 6. Interactive Book Modal (Opens when clicking any archival book) */}
      {isBookModalOpen && (
        <InteractiveBookModal
          book={selectedExhibit?.data as HeritageBook}
          onClose={handleClose}
        />
      )}

      {/* 7. Exhibition Information Panel (Opens when clicking photo frames or monuments) */}
      {!isBookModalOpen && (
        <ExhibitInformationPanel
          selected={selectedExhibit}
          onClose={handleClose}
        />
      )}
    </div>
  )
}
