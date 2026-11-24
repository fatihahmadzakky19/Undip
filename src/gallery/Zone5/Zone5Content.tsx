import { useMemo } from 'react'
import * as THREE from 'three'
import { assetCache } from '../Zone1/cache'
import { HERITAGE_BOOKS, type HeritageBook } from '../data/books'
import { HERITAGE_ARTIFACTS, type HeritageArtifact } from '../data/artifacts'
import { WallBookshelf } from '../common/WallBookshelf'
import { IslandBookshelf } from '../common/IslandBookshelf'
import { GlassDisplayCabinet } from '../common/GlassDisplayCabinet'
import { ReadingLounge } from '../common/ReadingLounge'

interface Zone5ContentProps {
  selectedBookId?: string | null
  selectedArtifactId?: string | null
  hoveredId?: string | null
  onSelectBook: (book: HeritageBook) => void
  onSelectArtifact: (artifact: HeritageArtifact) => void
  onSelectExhibit?: (data: any) => void
  onHover: (id: string | null) => void
}

/**
 * ZONA 5: UNDIP FUTURE
 * Smart Digital University, AI Research & Sustainable Eco-Campus 2045:
 * - Left Wall: Artificial Intelligence, Robotics, Digital Twin & Smart Learning
 * - Right Wall: Solar Energy, Blue-Green Economy, & Net-Zero Campus 2045
 * - Center Stage: Future Holographic Display Pod (Model Kampus Hijau Berkelanjutan 2045)
 * - Bookshelves: Roadmap Undip 2045, Buku Putih AI, & Transisi Energi
 * - Glass Cabinets: Prototype Robot Medis RSND & Miniatur Kapal Riset Tenaga Surya
 */
export function Zone5Content({
  selectedBookId = null,
  selectedArtifactId = null,
  hoveredId = null,
  onSelectBook,
  onSelectArtifact,
  onSelectExhibit,
  onHover,
}: Zone5ContentProps) {
  const materials = useMemo(() => {
    return {
      darkWalnut: assetCache.getMaterial(
        'z5-walnut',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#1a100a',
            roughness: 0.42,
            metalness: 0.15,
          }),
      ),
      goldTrim: assetCache.getMaterial(
        'z5-gold',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.25,
            metalness: 0.88,
          }),
      ),
      deepTeal: assetCache.getMaterial(
        'z5-teal',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#082a32',
            roughness: 0.35,
            metalness: 0.25,
          }),
      ),
      holoGlow: assetCache.getMaterial(
        'z5-holo',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#00e5ff',
            emissive: '#0099b8',
            emissiveIntensity: 0.5,
            transparent: true,
            opacity: 0.75,
            roughness: 0.1,
          }),
      ),
    }
  }, [])

  const zone5Books = useMemo(() => HERITAGE_BOOKS.filter((b) => b.zone === 5), [])
  const zone5Artifacts = useMemo(() => HERITAGE_ARTIFACTS.filter((a) => a.zone === 5), [])

  const wallBooks = useMemo(() => zone5Books.filter((b) => b.shelfType === 'wall'), [zone5Books])
  const islandBooks = useMemo(() => zone5Books.filter((b) => b.shelfType === 'island'), [zone5Books])

  return (
    <group name="Zone5-UndipFuture">
      {/* 1. Left Wall (X = -7.44): Smart Digital Campus & Artificial Intelligence Gallery */}
      <group position={[-7.44, 0, 0]}>
        {[
          {
            id: 'fut-ai-center',
            title: 'Pusat Riset Kecerdasan Buatan & Robotika Otonom Undip',
            sub: 'Riset AI Terapan, Machine Learning & Visi Komputer',
            z: 7.0,
            desc: 'Pusat keunggulan riset AI untuk deteksi dini penyakit berbasis citra medis, pemantauan kualitas perairan secara otonom, dan sistem navigasi pintar.',
          },
          {
            id: 'fut-digital-twin',
            title: 'Digital Twin Campus & Smart Facility Management',
            sub: 'Simulasi 3D Real-Time Infrastruktur & Konsumsi Energi Kampus',
            z: 2.0,
            desc: 'Replikasi virtual seluruh bangunan dan lanskap kampus Tembalang untuk optimasi efisiensi energi, pencegahan risiko bencana, dan navigasi imersif mahasiswa.',
          },
          {
            id: 'fut-telemedicine',
            title: 'Ekosistem Telemedicine & Bedah Presisi Robotik RSND',
            sub: 'Layanan Kesehatan Jarak Jauh Menjangkau Daerah Kepulauan',
            z: -3.0,
            desc: 'Pengembangan telekonsultasi spesialis berbasis AI untuk pulau-pulau terluar Jawa Tengah serta asisten robotik pembedahan minim invasif di RSND.',
          },
          {
            id: 'fut-adaptive-learning',
            title: 'Smart Learning Platform & Kurikulum Masa Depan',
            sub: 'Personalisasi Pendidikan Berbasis AI Adaptif & Lab Imersif VR',
            z: -8.0,
            desc: 'Platform pembelajaran digital yang menyesuaikan gaya belajar setiap mahasiswa, laboratorium simulasi virtual reality, dan sertifikasi micro-credentials global.',
          },
        ].map((item) => (
          <group
            key={item.id}
            position={[0, 2.9, item.z]}
            rotation={[0, Math.PI / 2, 0]}
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
                  period: 'Visi Masa Depan',
                  shortLabel: 'Smart University',
                  description: item.desc,
                  fullContent: `${item.title} (${item.sub}): ${item.desc} Merupakan langkah terukur Universitas Diponegoro dalam memimpin transformasi digital pendidikan tinggi di era kecerdasan buatan.`,
                },
              })
            }}
          >
            {/* Dark Walnut & Gold Trim Frame */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[2.3, 1.42, 0.08]} />
              <primitive object={materials.darkWalnut} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.042]}>
              <boxGeometry args={[2.16, 1.28, 0.01]} />
              <primitive object={materials.goldTrim} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.046]}>
              <boxGeometry args={[2.08, 1.2, 0.005]} />
              <primitive object={materials.deepTeal} attach="material" />
            </mesh>
          </group>
        ))}
      </group>

      {/* 2. Right Wall (X = 7.44): Green Eco-Campus & Sustainability 2045 Gallery */}
      <group position={[7.44, 0, 0]}>
        {[
          {
            id: 'fut-plts-rooftop',
            title: 'Jaringan Pembangkit Listrik Tenaga Surya (PLTS) Rooftop',
            era: 'Transisi Energi Bersih',
            z: 5.5,
            desc: 'Pemasangan panel surya fotovoltaik di atap seluruh gedung fakultas untuk memasok hingga 40% kebutuhan listrik mandiri kampus Tembalang.',
          },
          {
            id: 'fut-solar-boat-research',
            title: 'Kapal Riset Tenaga Surya & Blue Economy Karimunjawa',
            era: 'Inovasi Maritim Hijau',
            z: 0.0,
            desc: 'Eksplorasi perairan tropis nir-emisi untuk pemantauan terumbu karang dan pemberdayaan nelayan ramah lingkungan di gugusan Kepulauan Karimunjawa.',
          },
          {
            id: 'fut-netzero-2045',
            title: 'Peta Jalan Kampus Net-Zero Emission Undip 2045',
            era: 'Visi Indonesia Emas 2045',
            z: -5.5,
            desc: 'Integrasi sistem transportasi bus listrik, daur ulang 100% air waduk edukasi, restorasi hutan kampus, dan dekarbonisasi rantai pasok universitas.',
          },
          {
            id: 'fut-bioplastik-mangrove',
            title: 'Inovasi Bioplastik Rumput Laut & Sabuk Hijau Mangrove',
            era: 'Kemandirian Berkelanjutan',
            z: -11.0,
            desc: 'Hilirisasi riset polimer organik pengganti plastik sekali pakai dari makroalga serta perlindungan pesisir pantai utara Jawa dari abrasi.',
          },
        ].map((item) => (
          <group
            key={item.id}
            position={[0, 2.9, item.z]}
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
                  shortLabel: 'Keberlanjutan 2045',
                  description: item.desc,
                  fullContent: `${item.title}: ${item.desc} Mengukuhkan peran Universitas Diponegoro sebagai pelopor Green Eco-Campus bertaraf internasional yang mengedepankan kelestarian bumi.`,
                },
              })
            }}
          >
            {/* Monumental Frame */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[2.3, 1.42, 0.08]} />
              <primitive object={materials.darkWalnut} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.042]}>
              <boxGeometry args={[2.16, 1.28, 0.01]} />
              <primitive object={materials.goldTrim} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.046]}>
              <boxGeometry args={[2.08, 1.2, 0.005]} />
              <primitive object={materials.deepTeal} attach="material" />
            </mesh>
          </group>
        ))}
      </group>

      {/* 3. Center Stage Future Display Pod: Maket Konsep Kampus Berkelanjutan 2045 (Z = -3.5) */}
      <group position={[0, 0, -3.5]}>
        {/* Octagonal Walnut Plinth */}
        <mesh position={[0, 0.22, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[2.0, 2.15, 0.44, 8]} />
          <primitive object={materials.darkWalnut} attach="material" />
        </mesh>
        <mesh position={[0, 0.445, 0]}>
          <cylinderGeometry args={[2.02, 2.02, 0.015, 8]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>

        {/* Futuristic Minimalist Hologram / Crystal Pedestal */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <cylinderGeometry args={[1.3, 1.4, 0.9, 16]} />
          <primitive object={materials.deepTeal} attach="material" />
        </mesh>
        {/* Luminous Core Ring */}
        <mesh position={[0, 1.36, 0]}>
          <torusGeometry args={[1.1, 0.03, 16, 32]} />
          <primitive object={materials.holoGlow} attach="material" />
        </mesh>
        {/* Floating Concept Model (Biomimetic Architectural Crystal) */}
        <mesh position={[0, 1.7, 0]} rotation={[0.4, 0.4, 0]} castShadow>
          <octahedronGeometry args={[0.45, 0]} />
          <primitive object={materials.holoGlow} attach="material" />
        </mesh>
      </group>

      {/* 4. Heritage Library Bookshelves for Zone 5 */}
      {/* Tall Wall Bookshelf: Roadmap Undip 2045 & Buku Putih AI (Left Flank, Z = -16.0) */}
      <WallBookshelf
        position={[-6.8, 0, -16.0]}
        rotationY={Math.PI / 2}
        categoryTitle="ROADMAP 2045 & BUKU PUTIH AI UNDIP"
        interactiveBooks={wallBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* Island Bookshelf: Transisi Energi & Eco-Campus 2030 (Right Flank, Z = -16.0) */}
      <IslandBookshelf
        position={[4.6, 0, -16.0]}
        rotationY={0}
        categoryTitle="TRANSISI ENERGI & ECO-CAMPUS 2030"
        interactiveBooks={islandBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* 5. Glass Display Cabinets */}
      {/* Cabinet 1: Prototype Robot Medis Tele-Rehabilitasi RSND Undip */}
      {zone5Artifacts[0] && (
        <GlassDisplayCabinet
          position={[-4.5, 0, -10.5]}
          rotationY={Math.PI / 4}
          artifact={zone5Artifacts[0]}
          isSelected={selectedArtifactId === zone5Artifacts[0].id}
          isHovered={hoveredId === zone5Artifacts[0].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* Cabinet 2: Miniatur Kapal Riset Bertenaga Surya FPIK Undip */}
      {zone5Artifacts[1] && (
        <GlassDisplayCabinet
          position={[4.5, 0, -10.5]}
          rotationY={-Math.PI / 4}
          artifact={zone5Artifacts[1]}
          isSelected={selectedArtifactId === zone5Artifacts[1].id}
          isHovered={hoveredId === zone5Artifacts[1].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* 6. Visitor Study & Discussion Alcove (Left Corridor, Z = 5.0) */}
      <ReadingLounge position={[-4.8, 0, 5.0]} rotationY={Math.PI / 2} />
    </group>
  )
}
