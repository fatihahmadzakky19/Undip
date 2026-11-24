/**
 * Museum Virtual Undip — Master Zone & Heritage Library Registry
 * Comprehensive architectural entry point:
 * - Master Museum Environment (Single Static Room with Dynamic Zone Loading)
 * - 5 Interactive Thematic Zones (The Origin of Undip, Growth of Knowledge, Heritage of Undip, Undip Today, Undip Future)
 * - Heritage Library (Wall Bookshelves, Island Bookshelves, Glass Display Cabinets)
 */
export { MasterMuseum, MasterMuseum as Zone1, MasterMuseum as Zone1Scene, MasterMuseum as GalleryScene } from './MasterMuseum'

// 5 Exhibition Zones
export { Zone1Content } from './Zone1/Zone1Content'
export { Zone2Content } from './Zone2/Zone2Content'
export { Zone3Content } from './Zone3/Zone3Content'
export { Zone4Content } from './Zone4/Zone4Content'
export { Zone5Content } from './Zone5/Zone5Content'

// Heritage Library & Navigation Components
export { WallBookshelf } from './common/WallBookshelf'
export { IslandBookshelf } from './common/IslandBookshelf'
export { GlassDisplayCabinet } from './common/GlassDisplayCabinet'
export { ReadingLounge } from './common/ReadingLounge'
export { ZoneNavigator } from './common/ZoneNavigator'
export { ZoneHUD } from './common/ZoneHUD'

// Preserved Core Architecture & Wings
export { FoundersWing } from './Zone1/FoundersWing'
export { HistoryArchivesWing } from './Zone1/HistoryArchivesWing'
export { CeremonialPodium } from './Zone1/CeremonialPodium'
export { MiniatureMap } from './Zone1/MiniatureMap'
export { RedCarpet } from './Zone1/RedCarpet'
export { CeilingRoof } from './Zone1/CeilingRoof'
export { Chandelier } from './Zone1/Chandelier'
export { GalleryLighting } from './Zone1/GalleryLighting'
export { GalleryEnvironment } from './Zone1/GalleryEnvironment'
export { ExhibitInformationPanel } from './Zone1/ExhibitInformationPanel'
export { DirectoryBoard } from './Zone1/DirectoryBoard'
export { WayfindingPrompt } from './Zone1/WayfindingPrompt'
export { FirstPersonControls } from './Zone1/FirstPersonControls'
export { MobileControls } from './Zone1/MobileControls'
export { DesktopHints } from './Zone1/DesktopHints'

// Data Catalogs
export { ZONES_METADATA, type ZoneId, type ZoneConfig } from './data/zones'
export { HERITAGE_BOOKS, type HeritageBook } from './data/books'
export { HERITAGE_ARTIFACTS, type HeritageArtifact } from './data/artifacts'
export { UNDIP_FOUNDERS, HISTORY_EXHIBITS } from './Zone1/data/exhibits'
export * from './Zone1/types'
export * from './Zone1/layout'
