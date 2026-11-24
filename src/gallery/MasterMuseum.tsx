import { Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import type { SelectedExhibit, SectionType } from './Zone1/types'
import type { Founder, HistoryExhibit } from './Zone1/data/exhibits'
import type { HeritageBook } from './data/books'
import type { HeritageArtifact } from './data/artifacts'
import { ZONES_METADATA, type ZoneId } from './data/zones'
import { SECTION_TARGETS, START_POSITION } from './Zone1/layout'
import { GalleryEnvironment } from './Zone1/GalleryEnvironment'
import { GalleryLighting } from './Zone1/GalleryLighting'
import { FirstPersonControls } from './Zone1/FirstPersonControls'
import { DesktopHints } from './Zone1/DesktopHints'
import { MobileControls } from './Zone1/MobileControls'
import { ExhibitInformationPanel } from './Zone1/ExhibitInformationPanel'
import { WayfindingPrompt } from './Zone1/WayfindingPrompt'
import { ZoneNavigator } from './common/ZoneNavigator'
import { ZoneHUD } from './common/ZoneHUD'

// The 5 Exhibition Zones (Mounted dynamically on demand)
import { Zone1Content } from './Zone1/Zone1Content'
import { Zone2Content } from './Zone2/Zone2Content'
import { Zone3Content } from './Zone3/Zone3Content'
import { Zone4Content } from './Zone4/Zone4Content'
import { Zone5Content } from './Zone5/Zone5Content'
import './Zone1/gallery.css'

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
 * MASTER MUSEUM — UNIVERSITAS DIPONEGORO VIRTUAL HERITAGE MUSEUM
 *
 * Core Architectural Mandates (Strictly Implemented):
 * 1. ONE STATIC MAIN ROOM: Structural architecture (walls, ceiling, floor, red carpet, chandelier, entrance) is constant.
 * 2. FIVE THEMATIC ZONES: Zone 1 to Zone 5 in the exact same monumental environment.
 * 3. DYNAMIC ZONE MOUNTING: ONLY the active zone's exhibits are rendered in the 3D scene.
 *    Inactive zones are completely unmounted (dynamic unloading) for optimal 60 FPS performance and zero memory leaks.
 * 4. HERITAGE LIBRARY INTEGRATION: Wall Bookshelves, Island Bookshelves, and Glass Display Cabinets.
 * 5. PRESERVED ORIGINAL ARTIFACTS: All 13 Founders and 13 Rectors remain strictly preserved.
 */
export function MasterMuseum() {
  const isMobile = useIsMobile()
  const [activeZone, setActiveZone] = useState<ZoneId>(1)
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

  // Select Handlers
  const handleSelectFounder = useCallback((founder: Founder) => {
    if (draggedRef.current) return
    setSelectedExhibit({ type: 'founder', data: founder })
  }, [])

  const handleSelectHistory = useCallback((exhibit: HistoryExhibit) => {
    if (draggedRef.current) return
    setSelectedExhibit({ type: 'history', data: exhibit })
  }, [])

  const handleSelectBook = useCallback((book: HeritageBook) => {
    if (draggedRef.current) return
    setSelectedExhibit({ type: 'book', data: book })
  }, [])

  const handleSelectArtifact = useCallback((artifact: HeritageArtifact) => {
    if (draggedRef.current) return
    setSelectedExhibit({ type: 'artifact', data: artifact })
  }, [])

  const handleSelectPodium = useCallback(() => {
    if (draggedRef.current) return
    setSelectedExhibit({
      type: 'podium',
      data: {
        id: 'ceremonial-podium',
        title: 'Podium Kehormatan Universitas Diponegoro',
        subtitle: 'Simbol Wibawa & Tradisi Dies Natalis',
        description: 'Podium resmi upacara akademik dan orasi ilmiah universitas.',
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
        description: 'Prasasti bersejarah peresmian Universitas Diponegoro oleh Presiden Sukarno.',
      },
    })
  }, [])

  const handleSelectMap = useCallback(() => {
    if (draggedRef.current) return
    setSelectedExhibit({
      type: 'miniature-map',
      data: {
        id: 'campus-miniature-map',
        title: 'Maket 3D Kampus Terpadu Universitas Diponegoro',
        subtitle: 'Pusat Utama Gedung Muladi Dome • Kawasan Tembalang',
        description:
          'Maket arsitektural 3D merepresentasikan tata ruang Kampus Terpadu Universitas Diponegoro seluas 180 hektar di Tembalang.',
      },
    })
  }, [])

  const handleGenericExhibit = useCallback((item: any) => {
    if (draggedRef.current) return
    setSelectedExhibit(item)
  }, [])

  const handleHover = useCallback((id: string | null) => setHoveredId(id), [])
  const handleClose = useCallback(() => setSelectedExhibit(null), [])

  const handleReset = useCallback(() => {
    setResetSignal((signal) => signal + 1)
    setTargetPosition(null)
  }, [])

  const handleTeleport = useCallback((section: SectionType) => {
    setTargetPosition(SECTION_TARGETS[section])
  }, [])

  // Zone Switching Handler
  const handleZoneChange = useCallback((newZoneId: ZoneId) => {
    setActiveZone(newZoneId)
    setSelectedExhibit(null)
    // Smoothly teleport user to the prime vantage point of the selected zone
    const target = ZONES_METADATA[newZoneId].teleportPosition
    setTargetPosition([...target])
  }, [])

  // Extract selected IDs for highlight
  const selectedFounderId =
    selectedExhibit?.type === 'founder' ? (selectedExhibit.data as Founder).id : null
  const selectedHistoryId =
    selectedExhibit?.type === 'history' ? (selectedExhibit.data as HistoryExhibit).id : null
  const selectedBookId =
    selectedExhibit?.type === 'book' ? (selectedExhibit.data as HeritageBook).id : null
  const selectedArtifactId =
    selectedExhibit?.type === 'artifact' ? (selectedExhibit.data as HeritageArtifact).id : null

  return (
    <div className={`gr-root${isMobile ? ' is-mobile' : ''}`}>
      <Canvas
        shadows={!isMobile}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onPointerMissed={() => setSelectedExhibit(null)}
      >
        <color attach="background" args={['#081220']} />
        <fog attach="fog" args={['#081220', 45, 95]} />

        <PerspectiveCamera
          makeDefault
          position={START_POSITION}
          fov={isMobile ? 66 : 56}
          near={0.1}
          far={140}
        />

        <Suspense fallback={null}>
          {/* ============================================================
              1. MAIN ROOM (ALWAYS ACTIVE ENVIRONMENT)
              Architectural structure, walls, ceiling, carpet, chandeliers & entrance
              ============================================================ */}
          <GalleryLighting castShadows={!isMobile} />
          <GalleryEnvironment isNearDirectory={isNearDirectory} />

          {/* ============================================================
              2. DYNAMIC FIVE ZONES (ONLY ACTIVE ZONE IS RENDERED)
              ============================================================ */}
          {activeZone === 1 && (
            <Zone1Content
              selectedFounderId={selectedFounderId}
              selectedHistoryId={selectedHistoryId}
              selectedBookId={selectedBookId}
              selectedArtifactId={selectedArtifactId}
              hoveredId={hoveredId}
              onSelectFounder={handleSelectFounder}
              onSelectHistory={handleSelectHistory}
              onSelectBook={handleSelectBook}
              onSelectArtifact={handleSelectArtifact}
              onSelectPodium={handleSelectPodium}
              onSelectPrasasti={handleSelectPrasasti}
              onSelectMap={handleSelectMap}
              onHover={handleHover}
            />
          )}

          {activeZone === 2 && (
            <Zone2Content
              selectedBookId={selectedBookId}
              selectedArtifactId={selectedArtifactId}
              hoveredId={hoveredId}
              onSelectBook={handleSelectBook}
              onSelectArtifact={handleSelectArtifact}
              onSelectExhibit={handleGenericExhibit}
              onHover={handleHover}
            />
          )}

          {activeZone === 3 && (
            <Zone3Content
              selectedBookId={selectedBookId}
              selectedArtifactId={selectedArtifactId}
              hoveredId={hoveredId}
              onSelectBook={handleSelectBook}
              onSelectArtifact={handleSelectArtifact}
              onSelectExhibit={handleGenericExhibit}
              onHover={handleHover}
            />
          )}

          {activeZone === 4 && (
            <Zone4Content
              selectedBookId={selectedBookId}
              selectedArtifactId={selectedArtifactId}
              hoveredId={hoveredId}
              onSelectBook={handleSelectBook}
              onSelectArtifact={handleSelectArtifact}
              onSelectExhibit={handleGenericExhibit}
              onHover={handleHover}
            />
          )}

          {activeZone === 5 && (
            <Zone5Content
              selectedBookId={selectedBookId}
              selectedArtifactId={selectedArtifactId}
              hoveredId={hoveredId}
              onSelectBook={handleSelectBook}
              onSelectArtifact={handleSelectArtifact}
              onSelectExhibit={handleGenericExhibit}
              onHover={handleHover}
            />
          )}
        </Suspense>

        {/* First Person Controls */}
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

      {/* ============================================================
          3. USER INTERFACE OVERLAYS
          ============================================================ */}
      {/* Active Zone Identity HUD */}
      <ZoneHUD activeZone={activeZone} />

      {/* Interactive 5-Zone Navigator Sidebar Map */}
      <ZoneNavigator
        activeZone={activeZone}
        onSelectZone={handleZoneChange}
        isMobile={isMobile}
      />

      {/* Subtle Desktop Keyboard Hints */}
      {!isMobile && <DesktopHints />}

      {/* Mobile Touch Controls */}
      {isMobile && (
        <MobileControls
          moveInputRef={moveInputRef}
          visible={selectedExhibit === null}
          onReset={handleReset}
          onTeleport={handleTeleport}
        />
      )}

      {/* Interactive Wayfinding Prompt near Directory Board */}
      <WayfindingPrompt
        visible={isNearDirectory && selectedExhibit === null}
        onTeleport={handleTeleport}
      />

      {/* Information Panel (Right sidebar or expanded center modal) */}
      <ExhibitInformationPanel
        selected={selectedExhibit}
        onClose={handleClose}
      />
    </div>
  )
}

export { MasterMuseum as Zone1, MasterMuseum as Zone1Scene, MasterMuseum as GalleryScene }
