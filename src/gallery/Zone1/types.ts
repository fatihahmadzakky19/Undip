import type { RefObject } from 'react'
import type { Founder, HistoryExhibit } from './data/exhibits'
import type { HeritageBook } from '../data/books'
import type { HeritageArtifact } from '../data/artifacts'
import type { ZoneId } from '../data/zones'

export type { ZoneId, HeritageBook, HeritageArtifact }

export type ExhibitType =
  | 'founder'
  | 'history'
  | 'book'
  | 'artifact'
  | 'miniature-map'
  | 'podium'
  | 'prasasti'

export interface SelectedExhibit {
  type: ExhibitType
  data:
    | Founder
    | HistoryExhibit
    | HeritageBook
    | HeritageArtifact
    | {
        id: string
        title: string
        subtitle?: string
        description: string
        highlights?: string[]
        category?: string
        period?: string
        source?: string
      }
}

export interface FounderFrameProps {
  founder: Founder
  index: number
  position: [number, number, number]
  rotationY: number
  isSelected: boolean
  isHovered: boolean
  onSelect: (founder: Founder) => void
  onHover: (id: string | null) => void
}

export interface HistoryExhibitPanelProps {
  exhibit: HistoryExhibit
  index: number
  position: [number, number, number]
  rotationY: number
  isSelected: boolean
  isHovered: boolean
  onSelect: (exhibit: HistoryExhibit) => void
  onHover: (id: string | null) => void
}

export interface MiniatureMapProps {
  position: [number, number, number]
  isSelected: boolean
  isHovered: boolean
  onSelect: () => void
  onHover: (id: string | null) => void
}

export interface CeremonialPodiumProps {
  position: [number, number, number]
  isSelected: boolean
  isHovered: boolean
  onSelect: () => void
  onHover: (id: string | null) => void
  onSelectPrasasti?: () => void
}

export interface StatueProps {
  position: [number, number, number]
  rotationY?: number
  isSelected?: boolean
  isHovered?: boolean
  onSelect?: () => void
  onHover?: (id: string | null) => void
}

export interface FirstPersonControlsProps {
  resetSignal: number
  targetPosition?: [number, number, number] | null
  moveInputRef: RefObject<{ forward: number; strafe: number }>
  hoveredRef: RefObject<string | null>
  panelOpenRef: RefObject<boolean>
  draggedRef: RefObject<boolean>
  onProximityChange?: (isNearDirectory: boolean) => void
}

export type SectionType = 'entrance' | 'founders' | 'map' | 'podium' | 'history' | 'prasasti'

export interface MobileControlsProps {
  moveInputRef: RefObject<{ forward: number; strafe: number }>
  visible: boolean
  onReset: () => void
  onTeleport: (section: SectionType) => void
}

/** Legacy Types for backward compatibility */
export interface Portrait {
  id: string
  name: string
  years: string
  imagePath?: string
}

export interface PortraitFrameProps {
  portrait: Portrait
  position: [number, number, number]
  rotationY: number
  isSelected: boolean
  isHovered: boolean
  onSelect: (id: string) => void
  onHover: (id: string | null) => void
}

export interface PortraitLabelProps {
  portrait: Portrait
}

export interface GalleryWallsProps {
  portraits: Portrait[]
  selectedId: string | null
  hoveredId: string | null
  onSelect: (id: string) => void
  onHover: (id: string | null) => void
}

export interface PortraitInformationPanelProps {
  portrait: Portrait | null
  index: number
  total: number
  onClose: () => void
}
