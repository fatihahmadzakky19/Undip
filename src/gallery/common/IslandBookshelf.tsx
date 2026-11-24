import { useMemo } from 'react'
import * as THREE from 'three'
import { assetCache } from '../Zone1/cache'
import type { HeritageBook } from '../data/books'

interface IslandBookshelfProps {
  position: [number, number, number]
  rotationY?: number
  categoryTitle?: string
  interactiveBooks?: HeritageBook[]
  selectedBookId?: string | null
  hoveredId?: string | null
  onSelectBook?: (book: HeritageBook) => void
  onHover?: (id: string | null) => void
}

/**
 * Type B: Island Bookshelf (Rak Buku Rendah / Pulau di Area Samping)
 * Characteristics:
 * - Low-profile height (1.25m) so it does NOT obstruct red carpet or primary hall vista
 * - Multi-sided accessible browsing with dark walnut wood & brushed brass feet
 * - Upper display shelf with angled bookstands for featured historical volumes
 * - Category plaque in antique brass
 */
export function IslandBookshelf({
  position,
  rotationY = 0,
  categoryTitle: _categoryTitle = 'KOLEKSI TEMATIK ZONA',
  interactiveBooks = [],
  selectedBookId = null,
  hoveredId = null,
  onSelectBook,
  onHover,
}: IslandBookshelfProps) {
  const materials = useMemo(() => {
    return {
      walnut: assetCache.getMaterial(
        'ib-walnut',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#24150b',
            roughness: 0.48,
            metalness: 0.12,
          }),
      ),
      goldTrim: assetCache.getMaterial(
        'ib-gold',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.28,
            metalness: 0.88,
          }),
      ),
      brassPlaque: assetCache.getMaterial(
        'ib-brass-plaque',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#cda842',
            roughness: 0.25,
            metalness: 0.85,
          }),
      ),
      bookSpines: [
        assetCache.getMaterial('ib-sp-0', () => new THREE.MeshStandardMaterial({ color: '#54151a', roughness: 0.6 })),
        assetCache.getMaterial('ib-sp-1', () => new THREE.MeshStandardMaterial({ color: '#0d2542', roughness: 0.6 })),
        assetCache.getMaterial('ib-sp-2', () => new THREE.MeshStandardMaterial({ color: '#163820', roughness: 0.6 })),
        assetCache.getMaterial('ib-sp-3', () => new THREE.MeshStandardMaterial({ color: '#452f16', roughness: 0.6 })),
      ],
      interactiveMat: assetCache.getMaterial(
        'ib-book-active',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#0e2b47',
            roughness: 0.35,
            metalness: 0.2,
          }),
      ),
      glowMat: assetCache.getMaterial(
        'ib-book-glow',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            emissive: '#d4af37',
            emissiveIntensity: 0.55,
            roughness: 0.2,
          }),
      ),
    }
  }, [])

  const iw = 1.85 // width
  const ih = 1.25 // height (low-profile)
  const id = 0.85 // depth (two-sided)

  const featuredBook = interactiveBooks[0] ?? null
  const isBookHovered = featuredBook && hoveredId === featuredBook.id
  const isBookSelected = featuredBook && selectedBookId === featuredBook.id

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* 1. Main Table / Island Cabinet Body */}
      {/* Top Reading & Display Deck */}
      <mesh position={[0, ih, 0]} castShadow receiveShadow>
        <boxGeometry args={[iw, 0.06, id]} />
        <primitive object={materials.walnut} attach="material" />
      </mesh>
      {/* Perimeter Gold Molding around top deck */}
      <mesh position={[0, ih, 0]}>
        <boxGeometry args={[iw + 0.03, 0.064, id + 0.03]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Central Vertical Spine Divider separating the two sides */}
      <mesh position={[0, ih / 2, 0]}>
        <boxGeometry args={[iw - 0.12, ih, 0.06]} />
        <primitive object={materials.walnut} attach="material" />
      </mesh>

      {/* Left and Right Side Stanchion Endcaps */}
      {[-1, 1].map((side) => (
        <group key={`endcap-${side}`} position={[side * (iw / 2 - 0.05), ih / 2, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[0.1, ih, id]} />
            <primitive object={materials.walnut} attach="material" />
          </mesh>
          <mesh position={[side * 0.052, 0, 0]}>
            <boxGeometry args={[0.008, ih - 0.08, id - 0.08]} />
            <primitive object={materials.goldTrim} attach="material" />
          </mesh>
        </group>
      ))}

      {/* Lower Storage Shelves on Front and Back Sides */}
      {[-1, 1].map((face) => (
        <group key={`face-${face}`} position={[0, 0, face * (id / 4)]}>
          {/* Lower Shelf Board */}
          <mesh position={[0, 0.42, 0]} receiveShadow>
            <boxGeometry args={[iw - 0.12, 0.04, id / 2 - 0.04]} />
            <primitive object={materials.walnut} attach="material" />
          </mesh>
          <mesh position={[0, 0.42, face * (id / 4 - 0.02)]}>
            <boxGeometry args={[iw - 0.12, 0.012, 0.01]} />
            <primitive object={materials.goldTrim} attach="material" />
          </mesh>

          {/* Book Rows on Lower Shelf */}
          <group position={[-iw / 2 + 0.22, 0.44, 0]}>
            {Array.from({ length: 14 }).map((_, bIdx) => {
              const bWidth = 0.045
              const bHeight = 0.32 + ((bIdx * 3) % 4) * 0.02
              const bDepth = 0.32
              const bMat = materials.bookSpines[(bIdx + (face > 0 ? 1 : 2)) % materials.bookSpines.length]
              return (
                <mesh key={`b-${bIdx}`} position={[bIdx * 0.095, bHeight / 2, 0]} castShadow>
                  <boxGeometry args={[bWidth, bHeight, bDepth]} />
                  <primitive object={bMat} attach="material" />
                </mesh>
              )
            })}
          </group>
        </group>
      ))}

      {/* 2. Top Display Centerpiece: Angled Bookstand with Featured Heritage Book */}
      {featuredBook && (
        <group
          position={[0, ih + 0.03, 0]}
          onPointerOver={(e) => {
            e.stopPropagation()
            onHover?.(featuredBook.id)
          }}
          onPointerOut={(e) => {
            e.stopPropagation()
            onHover?.(null)
          }}
          onClick={(e) => {
            e.stopPropagation()
            onSelectBook?.(featuredBook)
          }}
        >
          {/* Angled Brass Reading Stand */}
          <mesh position={[0, 0.1, 0]} rotation={[0.42, 0, 0]} castShadow>
            <boxGeometry args={[0.54, 0.03, 0.42]} />
            <primitive object={materials.goldTrim} attach="material" />
          </mesh>
          {/* Document / Book Body on the Stand */}
          <mesh position={[0, 0.12, -0.01]} rotation={[0.42, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.48, 0.045, 0.36]} />
            <primitive
              object={isBookSelected || isBookHovered ? materials.glowMat : materials.interactiveMat}
              attach="material"
            />
          </mesh>
          {/* Gold Inset Title on Cover */}
          <mesh position={[0, 0.145, -0.01]} rotation={[0.42, 0, 0]}>
            <planeGeometry args={[0.28, 0.18]} />
            <primitive object={materials.goldTrim} attach="material" />
          </mesh>
        </group>
      )}

      {/* Front & Back Category Brass Identification Plaques */}
      {[-1, 1].map((face) => (
        <mesh
          key={`plaque-${face}`}
          position={[0, ih - 0.08, face * (id / 2 + 0.012)]}
          castShadow
        >
          <boxGeometry args={[0.72, 0.07, 0.012]} />
          <primitive object={materials.brassPlaque} attach="material" />
        </mesh>
      ))}

      {/* 3. Four Heavy Turned Brass Feet at Corners */}
      {[-1, 1].map((sx) =>
        [-1, 1].map((sz) => (
          <mesh
            key={`foot-${sx}-${sz}`}
            position={[sx * (iw / 2 - 0.1), 0.06, sz * (id / 2 - 0.1)]}
            castShadow
          >
            <cylinderGeometry args={[0.04, 0.05, 0.12, 16]} />
            <primitive object={materials.goldTrim} attach="material" />
          </mesh>
        )),
      )}
    </group>
  )
}
