import { useMemo } from 'react'
import * as THREE from 'three'
import { assetCache } from '../Zone1/cache'
import { HERITAGE_BOOKS, type HeritageBook } from '../data/books'
import { HERITAGE_ARTIFACTS, type HeritageArtifact } from '../data/artifacts'
import { WallBookshelf } from '../common/WallBookshelf'
import { IslandBookshelf } from '../common/IslandBookshelf'
import { GlassDisplayCabinet } from '../common/GlassDisplayCabinet'
import { ReadingLounge } from '../common/ReadingLounge'

interface Zone4ContentProps {
  selectedBookId?: string | null
  selectedArtifactId?: string | null
  hoveredId?: string | null
  onSelectBook: (book: HeritageBook) => void
  onSelectArtifact: (artifact: HeritageArtifact) => void
  onSelectExhibit?: (data: any) => void
  onHover: (id: string | null) => void
}

/**
 * ZONA 4: UNDIP TODAY
 * PTN-BH, Modern Campus Architecture & World Class University:
 * - Left Wall: Modern Landmark Architecture (Muladi Dome, RSND, ICT, MSTP Jepara)
 * - Right Wall: QS World Rankings, Hilirisasi Paten, & Global Partnerships
 * - Center Stage: Maket Arsitektur 3D Muladi Dome & Kawasan Tembalang Modern
 * - Bookshelves: Publikasi Scopus Q1, Hilirisasi Riset, & Inovasi Medis RSND
 * - Glass Cabinets: Piala Juara Umum PIMNAS & Piagam Akreditasi Internasional ABET/ASIIN
 */
export function Zone4Content({
  selectedBookId = null,
  selectedArtifactId = null,
  hoveredId = null,
  onSelectBook,
  onSelectArtifact,
  onSelectExhibit,
  onHover,
}: Zone4ContentProps) {
  const materials = useMemo(() => {
    return {
      darkWalnut: assetCache.getMaterial(
        'z4-walnut',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#201309',
            roughness: 0.42,
            metalness: 0.15,
          }),
      ),
      goldTrim: assetCache.getMaterial(
        'z4-gold',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.25,
            metalness: 0.88,
          }),
      ),
      royalNavy: assetCache.getMaterial(
        'z4-navy',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#0e2b47',
            roughness: 0.35,
            metalness: 0.25,
          }),
      ),
      domeIvory: assetCache.getMaterial(
        'z4-dome-ivory',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#ece8de',
            roughness: 0.35,
            metalness: 0.1,
          }),
      ),
    }
  }, [])

  const zone4Books = useMemo(() => HERITAGE_BOOKS.filter((b) => b.zone === 4), [])
  const zone4Artifacts = useMemo(() => HERITAGE_ARTIFACTS.filter((a) => a.zone === 4), [])

  const wallBooks = useMemo(() => zone4Books.filter((b) => b.shelfType === 'wall'), [zone4Books])
  const islandBooks = useMemo(() => zone4Books.filter((b) => b.shelfType === 'island'), [zone4Books])

  return (
    <group name="Zone4-UndipToday">
      {/* 1. Left Wall (X = -7.44): Modern Campus Landmark Architecture */}
      <group position={[-7.44, 0, 0]}>
        {[
          {
            id: 'mod-muladi-dome',
            title: 'Gedung Serbaguna Muladi Dome Tembalang',
            sub: 'Convention Center Terbesar & Termodern di Jawa Tengah',
            z: 7.0,
            desc: 'Gedung konvensi megah berkapasitas 5.000 orang yang diresmikan untuk menghormati jasa Rektor Prof. Dr. Muladi, S.H. Pusat wisuda, orasi ilmiah internasional, dan konser budaya.',
          },
          {
            id: 'mod-rsnd',
            title: 'Rumah Sakit Nasional Diponegoro (RSND)',
            sub: 'Rumah Sakit Pendidikan Tinggi Negeri Tipe B Terakreditasi Paripurna',
            z: 2.0,
            desc: 'Pusat layanan kesehatan rujukan dengan fasilitas radioterapi, bedah invasif minimal, rehabilitasi medik robotik, dan riset klinis translaksional.',
          },
          {
            id: 'mod-ict-lab',
            title: 'Gedung ICT & Laboratorium Terpadu Sentral Undip',
            sub: 'Pusat Komputasi Awan, Big Data & Sains Terapan',
            z: -3.0,
            desc: 'Menampung superkomputer riset, jaringan backbone serat optik kampus, dan inkubator inovasi teknologi digital mahasiswa.',
          },
          {
            id: 'mod-mstp-jepara',
            title: 'Marine Science Techno Park (MSTP) Teluk Awur Jepara',
            sub: 'Kawasan Sains dan Teknologi Kelautan Tropis',
            z: -8.0,
            desc: 'Fasilitas riset kelautan nasional dengan kolam penetasan, laboratorium bioteknologi mikroalga, tambak udang presisi, dan wisma riset pesisir.',
          },
          {
            id: 'mod-widya-puraya',
            title: 'Gedung Rektorat & Landmark Widya Puraya',
            sub: 'Pusat Tata Kelola Otonom & Lambang Wibawa Kampus',
            z: -13.0,
            desc: 'Kompleks kantor pusat administrasi universitas, menara lonceng, dan lapangan upacara utama yang memadukan arsitektur vernakular Jawa dengan gaya modern.',
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
                  category: 'campus-photo',
                  period: 'Fasilitas Kampus Modern',
                  shortLabel: 'Kampus Modern',
                  description: item.desc,
                  fullContent: `${item.title} (${item.sub}): ${item.desc} Fasilitas ini menjadi penopang utama ekosistem pembelajaran modern dan riset berdaya saing global di Universitas Diponegoro.`,
                },
              })
            }}
          >
            {/* Dark Walnut Display Frame */}
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
              <primitive object={materials.royalNavy} attach="material" />
            </mesh>
          </group>
        ))}
      </group>

      {/* 2. Right Wall (X = 7.44): Excellence & World Class University Gallery */}
      <group position={[7.44, 0, 0]}>
        {[
          {
            id: 'wcu-qs-ranking',
            title: 'Peringkat QS World University Rankings & THE Impact',
            year: 'Pencapaian 2024',
            z: 5.5,
            desc: 'Undip melesat di peringkat 700 besar dunia QS WUR dan peringkat 1 di Indonesia untuk indikator serapan kerja lulusan tercepat (Graduate Employability).',
          },
          {
            id: 'wcu-hilirisasi-paten',
            title: 'Pusat Hilirisasi Inovasi & Hak Kekayaan Intelektual (HAKI)',
            year: 'Portofolio Industri',
            z: 0.0,
            desc: 'Ratusan paten terdaftar dan produk inovasi komersial: implan ortopedi biomedis, pakan ikan kaya probiotik, dan ozonizer pengawet hasil pertanian.',
          },
          {
            id: 'wcu-global-partnership',
            title: 'Kemitraan Internasional & Mobilitas Akademik Global',
            year: '150+ Mitra Universitas Dunia',
            z: -5.5,
            desc: 'Program gelar ganda (Double Degree), pertukaran mahasiswa IISMA ke universitas top dunia, dan konsorsium riset internasional lintas benua.',
          },
          {
            id: 'wcu-sdg-greenmetric',
            title: 'Peringkat UI GreenMetric & Komitmen Keberlanjutan SDG',
            year: 'Kampus Hijau Berkelanjutan',
            z: -11.0,
            desc: 'Undip secara konsisten masuk dalam Top 5 Kampus Paling Berkelanjutan di Indonesia dengan pengelolaan air daur ulang, tata hijau 70%, dan bus listrik kampus.',
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
                  period: item.year,
                  shortLabel: 'Prestasi Global',
                  description: item.desc,
                  fullContent: `${item.title}: ${item.desc} Mencerminkan kepemimpinan akademik yang kokoh dan dedikasi seluruh sivitas akademika dalam mewujudkan visi World Class University.`,
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
              <primitive object={materials.royalNavy} attach="material" />
            </mesh>
          </group>
        ))}
      </group>

      {/* 3. Center Stage Architectural Maket: Muladi Dome 3D Centerpiece (Z = -3.5) */}
      <group position={[0, 0, -3.5]}>
        {/* Tiered Granite Plinth */}
        <mesh position={[0, 0.22, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[2.2, 2.35, 0.44, 32]} />
          <primitive object={materials.darkWalnut} attach="material" />
        </mesh>
        <mesh position={[0, 0.445, 0]}>
          <cylinderGeometry args={[2.22, 2.22, 0.015, 32]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>

        {/* 3D Representation of Muladi Dome */}
        <group position={[0, 0.46, 0]}>
          {/* Base Arena Building Body */}
          <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[1.5, 1.6, 0.8, 32]} />
            <primitive object={materials.royalNavy} attach="material" />
          </mesh>
          {/* Gilded Tension Ring */}
          <mesh position={[0, 0.82, 0]}>
            <torusGeometry args={[1.52, 0.04, 16, 32]} />
            <primitive object={materials.goldTrim} attach="material" />
          </mesh>
          {/* Majestic Curved Dome Roof */}
          <mesh position={[0, 0.82, 0]} castShadow>
            <sphereGeometry args={[1.52, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2.3]} />
            <primitive object={materials.domeIvory} attach="material" />
          </mesh>
          {/* Crown Lantern Spire */}
          <mesh position={[0, 1.68, 0]}>
            <coneGeometry args={[0.12, 0.45, 16]} />
            <primitive object={materials.goldTrim} attach="material" />
          </mesh>
        </group>
      </group>

      {/* 4. Heritage Library Bookshelves for Zone 4 */}
      {/* Tall Wall Bookshelf: Publikasi Scopus & Paten Hilirisasi (Left Flank, Z = -16.0) */}
      <WallBookshelf
        position={[-6.8, 0, -16.0]}
        rotationY={Math.PI / 2}
        categoryTitle="PUBLIKASI SCOPUS & PATEN INOVASI UNDIP"
        interactiveBooks={wallBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* Island Bookshelf: Inovasi Medis RSND (Right Flank, Z = -16.0) */}
      <IslandBookshelf
        position={[4.6, 0, -16.0]}
        rotationY={0}
        categoryTitle="INOVASI KESEHATAN RSND & KEDOKTERAN"
        interactiveBooks={islandBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* 5. Glass Display Cabinets */}
      {/* Cabinet 1: Piala Emas Juara Umum PIMNAS Kontingen Undip */}
      {zone4Artifacts[0] && (
        <GlassDisplayCabinet
          position={[-4.5, 0, -10.5]}
          rotationY={Math.PI / 4}
          artifact={zone4Artifacts[0]}
          isSelected={selectedArtifactId === zone4Artifacts[0].id}
          isHovered={hoveredId === zone4Artifacts[0].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* Cabinet 2: Piagam Akreditasi Internasional ABET & ASIIN */}
      {zone4Artifacts[1] && (
        <GlassDisplayCabinet
          position={[4.5, 0, -10.5]}
          rotationY={-Math.PI / 4}
          artifact={zone4Artifacts[1]}
          isSelected={selectedArtifactId === zone4Artifacts[1].id}
          isHovered={hoveredId === zone4Artifacts[1].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* 6. Visitor Study & Reading Alcove (Left Corridor, Z = 5.0) */}
      <ReadingLounge position={[-4.8, 0, 5.0]} rotationY={Math.PI / 2} />
    </group>
  )
}
