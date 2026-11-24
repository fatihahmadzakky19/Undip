import { useMemo } from 'react'
import type { Founder, HistoryExhibit } from './data/exhibits'
import type { HeritageBook } from '../data/books'
import type { HeritageArtifact } from '../data/artifacts'
import { HERITAGE_BOOKS } from '../data/books'
import { HERITAGE_ARTIFACTS } from '../data/artifacts'
import { FoundersWing } from './FoundersWing'
import { HistoryArchivesWing } from './HistoryArchivesWing'
import { CeremonialPodium } from './CeremonialPodium'
import { MiniatureMap } from './MiniatureMap'
import { WallBookshelf } from '../common/WallBookshelf'
import { IslandBookshelf } from '../common/IslandBookshelf'
import { GlassDisplayCabinet } from '../common/GlassDisplayCabinet'
import { ReadingLounge } from '../common/ReadingLounge'
import { PODIUM_POS } from './layout'

interface Zone1ContentProps {
  selectedFounderId?: string | null
  selectedHistoryId?: string | null
  selectedBookId?: string | null
  selectedArtifactId?: string | null
  hoveredId?: string | null
  onSelectFounder: (founder: Founder) => void
  onSelectHistory: (exhibit: HistoryExhibit) => void
  onSelectBook: (book: HeritageBook) => void
  onSelectArtifact: (artifact: HeritageArtifact) => void
  onSelectPodium: () => void
  onSelectPrasasti: () => void
  onSelectMap?: () => void
  onHover: (id: string | null) => void
}

/**
 * ZONA 1: THE ORIGIN OF UNDIP (1956–1961)
 * Archival Heritage Gallery & Founding History:
 * - 100% PRESERVED Founders Wing (5 Pancamitra Pendiri & 13 Rektor Pertama)
 * - 100% PRESERVED History & Archives Wing (Raden Saleh, Early Pleburan Photos, Decrees)
 * - 100% PRESERVED Ceremonial Podium & Dais (Facing the Entrance Door)
 * - 100% PRESERVED Campus Miniature Map 3D
 * - ADDED: Heritage Library Wall Bookshelf, Island Bookshelf, and Glass Display Cabinets
 */
export function Zone1Content({
  selectedFounderId = null,
  selectedHistoryId = null,
  selectedBookId = null,
  selectedArtifactId = null,
  hoveredId = null,
  onSelectFounder,
  onSelectHistory,
  onSelectBook,
  onSelectArtifact,
  onSelectPodium,
  onSelectPrasasti,
  onSelectMap,
  onHover,
}: Zone1ContentProps) {
  // Filter books and artifacts for Zone 1
  const zone1Books = useMemo(() => HERITAGE_BOOKS.filter((b) => b.zone === 1), [])
  const zone1Artifacts = useMemo(() => HERITAGE_ARTIFACTS.filter((a) => a.zone === 1), [])

  const wallBooks = useMemo(() => zone1Books.filter((b) => b.shelfType === 'wall'), [zone1Books])
  const islandBooks = useMemo(() => zone1Books.filter((b) => b.shelfType === 'island'), [zone1Books])

  return (
    <group name="Zone1-TheOriginOfUndip">
      {/* 1. Left Wall: 13 Founders & Rectors of UNDIP (Strictly Preserved!) */}
      <FoundersWing
        selectedFounderId={selectedFounderId}
        hoveredId={hoveredId}
        onSelectFounder={onSelectFounder}
        onHover={onHover}
      />

      {/* 2. Right Wall: UNDIP History, Archives, Founding Decrees & Early Photos (Preserved!) */}
      <HistoryArchivesWing
        selectedExhibitId={selectedHistoryId}
        hoveredId={hoveredId}
        onSelectExhibit={onSelectHistory}
        onHover={onHover}
      />

      {/* 3. Center Dais & Ceremonial Podium with Inscription Plaque (Preserved & Oriented!) */}
      <CeremonialPodium
        position={PODIUM_POS}
        isSelected={hoveredId === 'podium'}
        isHovered={hoveredId === 'podium'}
        onSelect={onSelectPodium}
        onSelectPrasasti={onSelectPrasasti}
        onHover={onHover}
      />

      {/* 4. Center 3D Miniature Campus Map (Preserved!) */}
      <MiniatureMap
        position={[0, 0, -3.5]}
        isSelected={false}
        isHovered={hoveredId === 'miniature-map'}
        onSelect={() => onSelectMap?.()}
        onHover={onHover}
      />

      {/* 5. Heritage Library Additions: Tall Wall Bookshelf (Left Flank, Z = -11.5) */}
      <WallBookshelf
        position={[-6.8, 0, -11.5]}
        rotationY={Math.PI / 2}
        categoryTitle="ARSIP STATUTA & SEJARAH AWAL (1956–1960)"
        interactiveBooks={wallBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* 6. Heritage Library Island Bookshelf (Right Side Corridor, Z = -11.5) */}
      <IslandBookshelf
        position={[4.6, 0, -11.5]}
        rotationY={0}
        categoryTitle="DOKUMEN DIES NATALIS PERDANA"
        interactiveBooks={islandBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* 7. Glass Display Cabinet 1: Segel Timah Resmi Rektorat (1957) */}
      {zone1Artifacts[0] && (
        <GlassDisplayCabinet
          position={[-4.5, 0, -8.2]}
          rotationY={Math.PI / 4}
          artifact={zone1Artifacts[0]}
          isSelected={selectedArtifactId === zone1Artifacts[0].id}
          isHovered={hoveredId === zone1Artifacts[0].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* 8. Glass Display Cabinet 2: Buku Registrasi Mahasiswa Angkatan Pertama (1957) */}
      {zone1Artifacts[1] && (
        <GlassDisplayCabinet
          position={[4.5, 0, -8.2]}
          rotationY={-Math.PI / 4}
          artifact={zone1Artifacts[1]}
          isSelected={selectedArtifactId === zone1Artifacts[1].id}
          isHovered={hoveredId === zone1Artifacts[1].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* 9. Visitor Reading Alcove (Left Corridor, Z = 5.2) */}
      <ReadingLounge position={[-4.8, 0, 5.2]} rotationY={Math.PI / 2} />
    </group>
  )
}
