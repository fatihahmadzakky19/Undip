import { useMemo } from 'react'
import * as THREE from 'three'
import { assetCache } from '../Zone1/cache'
import { HERITAGE_BOOKS, type HeritageBook } from '../data/books'
import { HERITAGE_ARTIFACTS, type HeritageArtifact } from '../data/artifacts'
import { WallBookshelf } from '../common/WallBookshelf'
import { IslandBookshelf } from '../common/IslandBookshelf'
import { GlassDisplayCabinet } from '../common/GlassDisplayCabinet'
import { ReadingLounge } from '../common/ReadingLounge'

interface FacultyExhibit {
  id: string
  name: string
  year: string
  decan: string
  description: string
  color: string
}

export const FACULTIES_DATA: FacultyExhibit[] = [
  {
    id: 'fac-hukum',
    name: 'Fakultas Hukum',
    year: '1957',
    decan: 'Mr. Imam Bardjo',
    description: 'Fakultas perintis pertama Undip yang menjadi cikal bakal Mazhab Hukum Progresif nasional.',
    color: '#8b0000',
  },
  {
    id: 'fac-feb',
    name: 'Fakultas Ekonomika dan Bisnis',
    year: '1958',
    decan: 'Drs. Tjioe Sien Khing',
    description: 'Pusat keunggulan pendidikan ekonomi, manajemen, dan akuntansi terakreditasi internasional AACSB.',
    color: '#808080',
  },
  {
    id: 'fac-teknik',
    name: 'Fakultas Teknik',
    year: '1958',
    decan: 'Prof. Ir. Jacob Rais',
    description: 'Mencetak insinyur perintis sipil, arsitektur, mesin, kimia, perkapalan, dan elektro nasional.',
    color: '#000080',
  },
  {
    id: 'fac-kedokteran',
    name: 'Fakultas Kedokteran',
    year: '1961',
    decan: 'dr. Heyder bin Heyder',
    description: 'Pelopor riset gizi klinis, genetika medik, dan layanan rumah sakit pendidikan RSND.',
    color: '#006400',
  },
  {
    id: 'fac-fpp',
    name: 'Fakultas Peternakan dan Pertanian',
    year: '1964',
    decan: 'Prof. Dr. Ir. Soekamto',
    description: 'Pusat riset ketahanan pangan tropis, agrobisnis modern, dan genetika ternak unggul.',
    color: '#2e8b57',
  },
  {
    id: 'fac-fib',
    name: 'Fakultas Ilmu Budaya',
    year: '1965',
    decan: 'Prof. Drs. Soedjarwo',
    description: 'Kajian sastra, sejarah kebudayaan maritim, linguistik, dan kearsipan peradaban bangsa.',
    color: '#d2691e',
  },
  {
    id: 'fac-fisip',
    name: 'Fakultas Ilmu Sosial dan Ilmu Politik',
    year: '1968',
    decan: 'Mr. Goenawan Goetomo',
    description: 'Kawah kepemimpinan publik, tata kelola pemerintahan, hubungan internasional, dan ilmu komunikasi.',
    color: '#ff8c00',
  },
  {
    id: 'fac-fpik',
    name: 'Fakultas Perikanan dan Ilmu Kelautan',
    year: '1968',
    decan: 'Prof. Dr. Ir. Gatot Rahardjo Joenoes',
    description: 'Pilar utama Pola Ilmiah Pokok (PIP) Undip dalam riset oseanografi dan bioteknologi perairan.',
    color: '#008b8b',
  },
  {
    id: 'fac-fsm',
    name: 'Fakultas Sains dan Matematika',
    year: '1988',
    decan: 'Prof. Dr. Susilo Wibowo',
    description: 'Riset fundamental sains, kimia material, fisika nuklir, bioteknologi, dan kecerdasan buatan.',
    color: '#4682b4',
  },
  {
    id: 'fac-fkm',
    name: 'Fakultas Kesehatan Masyarakat',
    year: '1993',
    decan: 'Prof. Dr. dr. Hertanto Wahyu Subagio',
    description: 'Pelopor epidemiologi kesehatan lingkungan tropis, gizi masyarakat, dan manajemen rumah sakit.',
    color: '#9acd32',
  },
  {
    id: 'fac-psikologi',
    name: 'Fakultas Psikologi',
    year: '1995',
    decan: 'Prof. Dr. Prasetyo Hadi',
    description: 'Pusat pengembangan psikologi klinis, pendidikan, industri, dan kesehatan mental masyarakat.',
    color: '#9370db',
  },
]

interface Zone2ContentProps {
  selectedBookId?: string | null
  selectedArtifactId?: string | null
  hoveredId?: string | null
  onSelectBook: (book: HeritageBook) => void
  onSelectArtifact: (artifact: HeritageArtifact) => void
  onSelectExhibit?: (data: any) => void
  onHover: (id: string | null) => void
}

/**
 * ZONA 2: THE GROWTH OF KNOWLEDGE (1962–1990-an)
 * - Left Wall: Faculty Evolution Gallery (11 Perintis Fakultas Undip)
 * - Right Wall: Campus Transformation Timeline (Pleburan -> Hayam Wuruk -> Masterplan Tembalang)
 * - Bookshelves: Koleksi Kurikulum, Monograf Keilmuan, dan Perencanaan Kampus
 * - Glass Cabinets: PP No. 7/1961 & Mikroskop Riset Perdana 1965
 */
export function Zone2Content({
  selectedBookId = null,
  selectedArtifactId = null,
  hoveredId = null,
  onSelectBook,
  onSelectArtifact,
  onSelectExhibit,
  onHover,
}: Zone2ContentProps) {
  const materials = useMemo(() => {
    return {
      frameTeak: assetCache.getMaterial(
        'z2-frame-teak',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#2b1a10',
            roughness: 0.45,
            metalness: 0.15,
          }),
      ),
      goldTrim: assetCache.getMaterial(
        'z2-gold-trim',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.25,
            metalness: 0.88,
          }),
      ),
      canvasIvory: assetCache.getMaterial(
        'z2-canvas-ivory',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#f4f0e6',
            roughness: 0.75,
          }),
      ),
      pedestalNavy: assetCache.getMaterial(
        'z2-ped-navy',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#0e2b47',
            roughness: 0.4,
            metalness: 0.2,
          }),
      ),
    }
  }, [])

  const zone2Books = useMemo(() => HERITAGE_BOOKS.filter((b) => b.zone === 2), [])
  const zone2Artifacts = useMemo(() => HERITAGE_ARTIFACTS.filter((a) => a.zone === 2), [])

  const wallBooks = useMemo(() => zone2Books.filter((b) => b.shelfType === 'wall'), [zone2Books])
  const islandBooks = useMemo(() => zone2Books.filter((b) => b.shelfType === 'island'), [zone2Books])

  return (
    <group name="Zone2-TheGrowthOfKnowledge">
      {/* 1. Left Wall (X = -7.44): Faculty Evolution Gallery */}
      <group position={[-7.44, 0, 0]}>
        {FACULTIES_DATA.map((fac, idx) => {
          const zPos = 8.5 - idx * 2.8 // Distributed evenly along the hall
          const isHovered = hoveredId === fac.id

          return (
            <group
              key={fac.id}
              position={[0, 2.8, zPos]}
              rotation={[0, Math.PI / 2, 0]}
              onPointerOver={(e) => {
                e.stopPropagation()
                onHover(fac.id)
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
                    id: fac.id,
                    title: `Sejarah Pendirian ${fac.name}`,
                    category: 'campus-photo',
                    period: `Tahun Pendirian: ${fac.year}`,
                    shortLabel: fac.name,
                    description: `${fac.description} Dipimpin pertama kali oleh Dekan ${fac.decan}.`,
                    fullContent: `Fakultas ini didirikan pada tahun ${fac.year} sebagai respon atas tingginya kebutuhan tenaga ahli dan cendekiawan profesional di Jawa Tengah. Di bawah kepemimpinan dekan perdana ${fac.decan}, fakultas merintis kurikulum inovatif yang memadukan teori fundamental dengan praktik lapangan, kini berkembang menjadi salah satu fakultas terbaik bereputasi global di Indonesia.`,
                  },
                })
              }}
            >
              {/* Outer Teak Frame */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[1.7, 1.4, 0.08]} />
                <primitive object={materials.frameTeak} attach="material" />
              </mesh>
              {/* Gold Molding Trim */}
              <mesh position={[0, 0, 0.042]}>
                <boxGeometry args={[1.56, 1.26, 0.01]} />
                <primitive object={materials.goldTrim} attach="material" />
              </mesh>
              {/* Inner Ivory Display Matting */}
              <mesh position={[0, 0, 0.046]}>
                <boxGeometry args={[1.48, 1.18, 0.005]} />
                <primitive object={materials.canvasIvory} attach="material" />
              </mesh>
              {/* Faculty Crest Accent Plate */}
              <mesh position={[0, 0.22, 0.05]}>
                <boxGeometry args={[0.42, 0.42, 0.006]} />
                <meshStandardMaterial color={fac.color} roughness={0.3} metalness={0.2} />
              </mesh>
              {/* Gold Title Plaque below crest */}
              <mesh position={[0, -0.32, 0.05]}>
                <boxGeometry args={[1.2, 0.16, 0.008]} />
                <primitive object={materials.goldTrim} attach="material" />
              </mesh>

              {/* Hover Highlight Ring */}
              {isHovered && (
                <mesh position={[0, 0, 0.055]}>
                  <boxGeometry args={[1.74, 1.44, 0.01]} />
                  <meshStandardMaterial
                    color="#ffd700"
                    emissive="#ffd700"
                    emissiveIntensity={0.6}
                    transparent
                    opacity={0.5}
                  />
                </mesh>
              )}
            </group>
          )
        })}
      </group>

      {/* 2. Right Wall (X = 7.44): Campus Transformation Timeline */}
      <group position={[7.44, 0, 0]}>
        {[
          {
            id: 'tf-pleburan-1957',
            title: 'Era Perintis: Kampus Pleburan & Hayam Wuruk (1957–1975)',
            year: '1957–1975',
            z: 7.0,
            desc: 'Awal perkuliahan di Gedung Panti Budaya hingga kompleks perkantoran dan kuliah di kawasan Pleburan Semarang Selatan.',
          },
          {
            id: 'tf-masterplan-1980',
            title: 'Prakarsa Relokasi & Masterplan Tembalang (1980–1988)',
            year: '1980–1988',
            z: 2.0,
            desc: 'Pencanangan kawasan perbukitan Tembalang seluas 180 hektar sebagai kampus terpadu ramah lingkungan berwawasan masa depan.',
          },
          {
            id: 'tf-pembangunan-1990',
            title: 'Pembangunan Kampus Terpadu Tembalang (1990–1999)',
            year: '1990–1999',
            z: -3.0,
            desc: 'Perpindahan bertahap gedung rektorat Widya Puraya, perpustakaan utama, dan fakultas-fakultas ke kampus baru Tembalang.',
          },
          {
            id: 'tf-stasiun-jepara',
            title: 'Stasiun Riset Kelautan & Konservasi Teluk Awur Jepara',
            year: '1985–Kini',
            z: -8.0,
            desc: 'Pusat riset kelautan tropis, penetasan udang, laboratorium oseanografi, dan pelatihan selam ilmiah FPIK Undip.',
          },
          {
            id: 'tf-transformasi-ptnbh',
            title: 'Transformasi Universitas Menuju Otonomi PTN-BH',
            year: '2015–Kini',
            z: -13.0,
            desc: 'Penetapan status Perguruan Tinggi Negeri Badan Hukum (PP No. 81/2014) memacu kemandirian riset dan tata kelola berkelas dunia.',
          },
        ].map((tf) => (
          <group
            key={tf.id}
            position={[0, 2.9, tf.z]}
            rotation={[0, -Math.PI / 2, 0]}
            onPointerOver={(e) => {
              e.stopPropagation()
              onHover(tf.id)
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
                  id: tf.id,
                  title: tf.title,
                  category: 'campus-photo',
                  period: tf.year,
                  shortLabel: 'Transformasi Kampus',
                  description: tf.desc,
                  fullContent: `${tf.title}: ${tf.desc} Menjadi bukti komitmen kepemimpinan berkelanjutan Universitas Diponegoro dalam menyediakan sarana dan prasarana pendidikan terbaik bagi generasi muda bangsa.`,
                },
              })
            }}
          >
            {/* Monumental Architectural Frame */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[2.2, 1.4, 0.08]} />
              <primitive object={materials.frameTeak} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.042]}>
              <boxGeometry args={[2.08, 1.28, 0.01]} />
              <primitive object={materials.goldTrim} attach="material" />
            </mesh>
            <mesh position={[0, 0, 0.046]}>
              <boxGeometry args={[2.0, 1.2, 0.005]} />
              <primitive object={materials.canvasIvory} attach="material" />
            </mesh>
            {/* Navy Backdrop Band */}
            <mesh position={[0, -0.25, 0.05]}>
              <boxGeometry args={[1.9, 0.35, 0.006]} />
              <primitive object={materials.pedestalNavy} attach="material" />
            </mesh>
          </group>
        ))}
      </group>

      {/* 3. Heritage Library Bookshelf System for Zone 2 */}
      {/* Tall Wall Bookshelf: Koleksi Kurikulum & Monograf Fakultas (Left Flank, Z = -16.5) */}
      <WallBookshelf
        position={[-6.8, 0, -16.5]}
        rotationY={Math.PI / 2}
        categoryTitle="KOLEKSI KURIKULUM & MONOGRAF FAKULTAS"
        interactiveBooks={wallBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* Island Bookshelf: Riset Kelautan & Masterplan Tembalang (Right Side Corridor, Z = -16.5) */}
      <IslandBookshelf
        position={[4.6, 0, -16.5]}
        rotationY={0}
        categoryTitle="MONOGRAF RISET & ARSIP TEMBALANG"
        interactiveBooks={islandBooks}
        selectedBookId={selectedBookId}
        hoveredId={hoveredId}
        onSelectBook={onSelectBook}
        onHover={onHover}
      />

      {/* 4. Glass Display Cabinets */}
      {/* Cabinet 1: Piagam Keputusan Presiden PP No. 7/1961 Pengesahan PTN */}
      {zone2Artifacts[0] && (
        <GlassDisplayCabinet
          position={[-4.5, 0, -10.5]}
          rotationY={Math.PI / 4}
          artifact={zone2Artifacts[0]}
          isSelected={selectedArtifactId === zone2Artifacts[0].id}
          isHovered={hoveredId === zone2Artifacts[0].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* Cabinet 2: Mikroskop Riset Laboratorium Perdana (1965) */}
      {zone2Artifacts[1] && (
        <GlassDisplayCabinet
          position={[4.5, 0, -10.5]}
          rotationY={-Math.PI / 4}
          artifact={zone2Artifacts[1]}
          isSelected={selectedArtifactId === zone2Artifacts[1].id}
          isHovered={hoveredId === zone2Artifacts[1].id}
          onSelectArtifact={onSelectArtifact}
          onHover={onHover}
        />
      )}

      {/* 5. Center Axis Exhibition: Monumental Timeline Pillar at Z = -3.5 */}
      <group position={[0, 0, -3.5]}>
        {/* Tiered Octagonal Pedestal */}
        <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.8, 2.0, 0.5, 8]} />
          <primitive object={materials.frameTeak} attach="material" />
        </mesh>
        <mesh position={[0, 0.51, 0]}>
          <cylinderGeometry args={[1.84, 1.84, 0.02, 8]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>
        {/* Central Pedestal Monument: "Pohon Ilmu Pengetahuan Undip" */}
        <mesh position={[0, 1.35, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.9, 1.1, 1.65, 8]} />
          <primitive object={materials.pedestalNavy} attach="material" />
        </mesh>
        <mesh position={[0, 2.2, 0]}>
          <sphereGeometry args={[0.35, 24, 24]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>
      </group>

      {/* 6. Visitor Study & Reading Alcove (Left Corridor, Z = 4.0) */}
      <ReadingLounge position={[-4.8, 0, 4.0]} rotationY={Math.PI / 2} />
    </group>
  )
}
