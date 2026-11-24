import { useMemo } from 'react'
import * as THREE from 'three'
import { assetCache } from '../Zone1/cache'
import { HERITAGE_BOOKS, type HeritageBook } from '../data/books'
import { HERITAGE_ARTIFACTS, type HeritageArtifact } from '../data/artifacts'
import { WallBookshelf } from '../common/WallBookshelf'
import { IslandBookshelf } from '../common/IslandBookshelf'
import { GlassDisplayCabinet } from '../common/GlassDisplayCabinet'
import { ReadingLounge } from '../common/ReadingLounge'

interface Zone3ContentProps {
  selectedBookId?: string | null
  selectedArtifactId?: string | null
  hoveredId?: string | null
  onSelectBook: (book: HeritageBook) => void
  onSelectArtifact: (artifact: HeritageArtifact) => void
  onSelectExhibit?: (data: any) => void
  onHover: (id: string | null) => void
}

/**
 * ZONA 3: THE HERITAGE OF UNDIP
 * Academic Regalia, Tokoh Memorabilia, & Diponegoro Heritage:
 * - Left Wall: Academic Regalia Glass Showcases (Toga, Tongkat Pedel, Medali)
 * - Right Wall: Pangeran Diponegoro Heritage Gallery & Nilai-Nilai Luhur
 * - Center Stage: Keris Pusaka Pangeran Diponegoro Monument Showcase
 * - Bookshelves: Babad Diponegoro, Orasi Guru Besar, & Skripsi Perdana 1963
 * - Audiovisual Kiosk: Dokumentasi Wisuda & Pidato Bersejarah
 */
export function Zone3Content({
  selectedBookId = null,
  selectedArtifactId = null,
  hoveredId = null,
  onSelectBook,
  onSelectArtifact,
  onSelectExhibit,
  onHover,
}: Zone3ContentProps) {
  const materials = useMemo(() => {
    return {
      darkWalnut: assetCache.getMaterial(
        'z3-walnut',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#24150b',
            roughness: 0.42,
            metalness: 0.15,
          }),
      ),
      goldTrim: assetCache.getMaterial(
        'z3-gold',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.25,
            metalness: 0.88,
          }),
      ),
      heritageCrimson: assetCache.getMaterial(
        'z3-crimson',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#421217',
            roughness: 0.7,
            metalness: 0.1,
          }),
      ),
      screenGlow: assetCache.getMaterial(
        'z3-screen',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#1a3048',
            emissive: '#102236',
            emissiveIntensity: 0.4,
            roughness: 0.2,
          }),
      ),
    }
  }, [])

  const zone3Books = useMemo(() => HERITAGE_BOOKS.filter((b) => b.zone === 3), [])
  const zone3Artifacts = useMemo(() => HERITAGE_ARTIFACTS.filter((a) => a.zone === 3), [])

  const wallBooks = useMemo(() => zone3Books.filter((b) => b.shelfType === 'wall'), [zone3Books])
  const islandBooks = useMemo(() => zone3Books.filter((b) => b.shelfType === 'island'), [zone3Books])

  return (
    <group name="Zone3-TheHeritageOfUndip">
      {/* 1. Left Wall Showcase Area: Academic Regalia & Historical Cabinets */}
      {/* Glass Cabinet 1: Toga Rektor Era Awal & Kalung Jabatan Senat Emas */}
      {zone3Artifacts[0] && (
        <GlassDisplayCabinet
          position={[-5.8, 0, 4.0]}
          rotationY={Math.PI / 2}
          artifact={zone3Artifacts[0]}
          isSelected={selectedArtifactId === zone3Artifacts[0].id}
          isHovered={hoveredId === zone3Artifacts[0].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* Glass Cabinet 2: Tongkat Pedel Upacara Wisuda Kuningan Resmi 1960 */}
      {zone3Artifacts[1] && (
        <GlassDisplayCabinet
          position={[-5.8, 0, -2.0]}
          rotationY={Math.PI / 2}
          artifact={zone3Artifacts[1]}
          isSelected={selectedArtifactId === zone3Artifacts[1].id}
          isHovered={hoveredId === zone3Artifacts[1].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* 2. Center Monument Showcase: Keris Pusaka Warisan Pangeran Diponegoro */}
      {zone3Artifacts[2] && (
        <group position={[0, 0, -3.5]}>
          <GlassDisplayCabinet
            position={[0, 0, 0]}
            rotationY={0}
            artifact={zone3Artifacts[2]}
            isSelected={selectedArtifactId === zone3Artifacts[2].id}
            isHovered={hoveredId === zone3Artifacts[2].id}
            onSelectArtifact={onSelectArtifact}
            onHover={onHover}
          />
        </group>
      )}

      {/* 3. Right Wall (X = 7.44): Pangeran Diponegoro Heritage & Academic Memorabilia Gallery */}
      <group position={[7.44, 0, 0]}>
        {[
          {
            id: 'her-falsafah-diponegoro',
            title: 'Falsafah Luhur Pangeran Diponegoro: Jujur, Berani, Peduli',
            era: 'Nilai Karakter Abadi',
            z: 6.0,
            desc: 'Pengejawantahan nilai-nilai kepahlawanan Pangeran Diponegoro ke dalam jiwa sivitas akademika Universitas Diponegoro.',
          },
          {
            id: 'her-babad-diponegoro-unesco',
            title: 'Babad Diponegoro: Warisan Ingatan Dunia UNESCO',
            era: 'Memory of the World',
            z: 0.5,
            desc: 'Autobiografi legendaris karya Pangeran Diponegoro yang merefleksikan kejujuran intelektual, ketakwaan, dan perlawanan terhadap penindasan.',
          },
          {
            id: 'her-lukisan-raden-saleh',
            title: 'Mahakarya Penangkapan Pangeran Diponegoro (Raden Saleh)',
            era: 'Koleksi Seni Bersejarah',
            z: -5.0,
            desc: 'Analisis historis dan artistik atas lukisan monumental Raden Saleh yang menggambarkan keteguhan sikap Pangeran Diponegoro.',
          },
          {
            id: 'her-tradisi-wisuda',
            title: 'Tradisi Sakral Prosesi Wisuda & Sidang Senat Terbuka',
            era: 'Tradisi Akademik 1957–Kini',
            z: -10.5,
            desc: 'Tata upacara penerimaan mahasiswa baru dan pelepasan wisudawan dengan arak-arakan Pedel Upacara dan Gamelan Jawa Corobalen.',
          },
        ].map((item) => (
          <group
            key={item.id}
            position={[0, 3.0, item.z]}
            rotation={[0, -Math.PI / 2, 0]}
            onPointerOver={(e) => {
              e.stopPropagation()
              onHover(item.id)
            }}
            onPointerOut={(e) => {
              e.stopPropagation()
              onHover(null)
            }}
            onClick={(e) => {
              e.stopPropagation()
              onSelectExhibit?.({
                type: 'history',
                data: {
                  id: item.id,
                  title: item.title,
                  category: 'archive',
                  period: item.era,
                  shortLabel: 'Warisan & Identitas',
                  description: item.desc,
                  fullContent: `${item.title}: ${item.desc} Menjadi fondasi jati diri insan akademik Undip yang senantiasa berakar pada kebudayaan luhur bangsa dan menjunjung tinggi kejujuran ilmiah.`,
                },
              })
            }}
          >
            {/* Architectural Heritage Frame */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[2.4, 1.45, 0.09]} />
              <primitive object={materials.darkWalnut} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.046]}>
              <boxGeometry args={[2.26, 1.32, 0.01]} />
              <primitive object={materials.goldTrim} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.05]}>
              <boxGeometry args={[2.18, 1.24, 0.005]} />
              <primitive object={materials.heritageCrimson} attach="material" />
            </mesh>
          </group>
        ))}
      </group>

      {/* 4. Heritage Library Bookshelf System for Zone 3 */}
      {/* Tall Wall Bookshelf: Babad Diponegoro & Pidato Guru Besar (Left Flank, Z = -14.5) */}
      <WallBookshelf
        position={[-6.8, 0, -14.5]}
        rotationY={Math.PI / 2}
        categoryTitle="MANUSKRIP WARISAN & ORASI GURU BESAR"
        interactiveBooks={wallBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* Island Bookshelf: Arsip Skripsi & Yudisium Perdana 1963 (Right Flank, Z = -14.5) */}
      <IslandBookshelf
        position={[4.6, 0, -14.5]}
        rotationY={0}
        categoryTitle="ARSIP SKRIPSI & KELULUSAN PERDANA"
        interactiveBooks={islandBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* 5. Historical Audiovisual Station (Right Side, Z = 2.0) */}
      <group position={[4.6, 0, 2.0]}>
        {/* Dark Walnut Kiosk Stand */}
        <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.6, 1.7, 0.45]} />
          <primitive object={materials.darkWalnut} attach="material" />
        </mesh>
        <mesh position={[0, 1.71, 0]}>
          <boxGeometry args={[1.64, 0.02, 0.49]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>
        {/* Wide Presentation Screen Display */}
        <mesh position={[0, 1.15, 0.23]} castShadow>
          <boxGeometry args={[1.35, 0.78, 0.02]} />
          <primitive object={materials.screenGlow} attach="material" />
        </mesh>
        {/* Gold Caption Plaque */}
        <mesh position={[0, 0.42, 0.23]}>
          <boxGeometry args={[1.1, 0.12, 0.015]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>
      </group>

      {/* 6. Visitor Study & Reading Alcove (Left Corridor, Z = 8.5) */}
      <ReadingLounge position={[-4.8, 0, 8.5]} rotationY={Math.PI / 2} />
    </group>
  )
}
