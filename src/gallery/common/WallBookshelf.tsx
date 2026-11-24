import { useMemo } from 'react'
import * as THREE from 'three'
import { assetCache } from '../Zone1/cache'
import type { HeritageBook } from '../data/books'

interface WallBookshelfProps {
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
 * Type A: Wall Bookshelf (Rak Buku Tinggi Sisi Dinding)
 * Characteristics:
 * - Material: Dark Walnut Wood & Classical Timber Architecture
 * - Brushed Gold / Antique Brass Line Details & Crown Cornice
 * - Category Header Plaque (Engraved Brass)
 * - Integrated Warm White Shelf Downlight
 * - Filled with rows of academic volumes and highlighted interactive books
 */
export function WallBookshelf({
  position,
  rotationY = 0,
  categoryTitle: _categoryTitle = 'KOLEKSI ARSIP & BUKU AKADEMIK',
  interactiveBooks = [],
  selectedBookId = null,
  hoveredId = null,
  onSelectBook,
  onHover,
}: WallBookshelfProps) {
  const materials = useMemo(() => {
    return {
      walnutFrame: assetCache.getMaterial(
        'wb-walnut-frame',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#26160b',
            roughness: 0.45,
            metalness: 0.12,
          }),
      ),
      walnutBack: assetCache.getMaterial(
        'wb-walnut-back',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#1a0e07',
            roughness: 0.65,
          }),
      ),
      goldTrim: assetCache.getMaterial(
        'wb-gold-trim',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.28,
            metalness: 0.88,
          }),
      ),
      brassPlaque: assetCache.getMaterial(
        'wb-brass-plaque',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#cda842',
            roughness: 0.25,
            metalness: 0.85,
          }),
      ),
      shelfWarmGlow: assetCache.getMaterial(
        'wb-shelf-glow',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#fff3d1',
            emissive: '#e6be65',
            emissiveIntensity: 0.35,
            roughness: 0.3,
          }),
      ),
      bookSpines: [
        assetCache.getMaterial('wb-sp-wine', () => new THREE.MeshStandardMaterial({ color: '#54151a', roughness: 0.55 })),
        assetCache.getMaterial('wb-sp-navy', () => new THREE.MeshStandardMaterial({ color: '#0d2542', roughness: 0.55 })),
        assetCache.getMaterial('wb-sp-green', () => new THREE.MeshStandardMaterial({ color: '#163820', roughness: 0.55 })),
        assetCache.getMaterial('wb-sp-amber', () => new THREE.MeshStandardMaterial({ color: '#452f16', roughness: 0.55 })),
        assetCache.getMaterial('wb-sp-purple', () => new THREE.MeshStandardMaterial({ color: '#2b1a38', roughness: 0.55 })),
      ],
      goldFoil: assetCache.getMaterial(
        'wb-gold-foil',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.25,
            metalness: 0.85,
          }),
      ),
      interactiveBookMat: assetCache.getMaterial(
        'wb-book-interactive',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#801824',
            roughness: 0.38,
            metalness: 0.2,
          }),
      ),
      interactiveGlowMat: assetCache.getMaterial(
        'wb-book-glow',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            emissive: '#d4af37',
            emissiveIntensity: 0.6,
            roughness: 0.2,
          }),
      ),
    }
  }, [])

  const bw = 2.2 // width
  const bh = 3.8 // height
  const bd = 0.52 // depth
  const shelvesCount = 5

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* 1. Main Classical Timber Outer Frame */}
      {/* Left Wall Panel */}
      <mesh position={[-bw / 2 + 0.05, bh / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.1, bh, bd]} />
        <primitive object={materials.walnutFrame} attach="material" />
      </mesh>
      {/* Right Wall Panel */}
      <mesh position={[bw / 2 - 0.05, bh / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.1, bh, bd]} />
        <primitive object={materials.walnutFrame} attach="material" />
      </mesh>

      {/* Top Architectural Crown Cornice */}
      <mesh position={[0, bh + 0.08, 0]} castShadow>
        <boxGeometry args={[bw + 0.16, 0.16, bd + 0.12]} />
        <primitive object={materials.walnutFrame} attach="material" />
      </mesh>
      {/* Gold Crown Frieze Line */}
      <mesh position={[0, bh + 0.15, bd / 2 + 0.06]}>
        <boxGeometry args={[bw + 0.18, 0.024, 0.02]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>
      <mesh position={[0, bh + 0.01, bd / 2 + 0.06]}>
        <boxGeometry args={[bw + 0.16, 0.016, 0.02]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Bottom Heavy Plinth Base */}
      <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
        <boxGeometry args={[bw + 0.12, 0.24, bd + 0.08]} />
        <primitive object={materials.walnutFrame} attach="material" />
      </mesh>
      <mesh position={[0, 0.23, bd / 2 + 0.04]}>
        <boxGeometry args={[bw + 0.14, 0.02, 0.02]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Rear Timber Backboard */}
      <mesh position={[0, bh / 2, -bd / 2 + 0.025]} receiveShadow>
        <boxGeometry args={[bw - 0.1, bh - 0.1, 0.05]} />
        <primitive object={materials.walnutBack} attach="material" />
      </mesh>

      {/* Top Header Category Brass Plaque */}
      <group position={[0, bh - 0.16, bd / 2 + 0.01]}>
        <mesh castShadow>
          <boxGeometry args={[bw * 0.72, 0.18, 0.025]} />
          <primitive object={materials.brassPlaque} attach="material" />
        </mesh>
        <mesh position={[0, 0, 0.014]}>
          <boxGeometry args={[bw * 0.74, 0.2, 0.005]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>
      </group>

      {/* Integrated Warm White Canopy Downlight Strip */}
      <mesh position={[0, bh - 0.02, 0]}>
        <boxGeometry args={[bw - 0.2, 0.03, bd - 0.1]} />
        <primitive object={materials.shelfWarmGlow} attach="material" />
      </mesh>

      {/* 2. Shelves & Books Layers */}
      {Array.from({ length: shelvesCount }).map((_, sIdx) => {
        const shelfY = 0.42 + sIdx * ((bh - 0.8) / (shelvesCount - 1))
        const shelfInteractiveBook = interactiveBooks[sIdx] ?? null
        const isThisBookHovered = shelfInteractiveBook && hoveredId === shelfInteractiveBook.id
        const isThisBookSelected = shelfInteractiveBook && selectedBookId === shelfInteractiveBook.id

        return (
          <group key={`shelf-${sIdx}`}>
            {/* Shelf Board */}
            <mesh position={[0, shelfY, 0]} castShadow receiveShadow>
              <boxGeometry args={[bw - 0.1, 0.06, bd - 0.04]} />
              <primitive object={materials.walnutFrame} attach="material" />
            </mesh>
            {/* Gold Front Inset on Shelf */}
            <mesh position={[0, shelfY, bd / 2 - 0.02]}>
              <boxGeometry args={[bw - 0.1, 0.016, 0.012]} />
              <primitive object={materials.goldTrim} attach="material" />
            </mesh>

            {/* Shelf Warm Lighting Accent under board */}
            {sIdx < shelvesCount - 1 && (
              <mesh position={[0, shelfY + ((bh - 0.8) / (shelvesCount - 1)) - 0.02, 0]}>
                <boxGeometry args={[bw - 0.24, 0.015, bd - 0.16]} />
                <primitive object={materials.shelfWarmGlow} attach="material" />
              </mesh>
            )}

            {/* Books clustered on this shelf */}
            {sIdx < shelvesCount - 1 && (
              <group position={[-bw / 2 + 0.22, shelfY + 0.03, 0]}>
                {/* Decorative Academic Volumes */}
                {Array.from({ length: 16 }).map((_, bIdx) => {
                  const bWidth = 0.042 + (bIdx % 3) * 0.014
                  const bHeight = 0.36 + ((bIdx * 5) % 4) * 0.025
                  const bDepth = 0.36
                  const posX = bIdx * 0.088
                  const bookMat = materials.bookSpines[(bIdx + sIdx * 3) % materials.bookSpines.length]

                  return (
                    <group key={`book-${bIdx}`} position={[posX, bHeight / 2, 0]}>
                      {/* Spine / Volume Body */}
                      <mesh castShadow>
                        <boxGeometry args={[bWidth, bHeight, bDepth]} />
                        <primitive object={bookMat} attach="material" />
                      </mesh>
                      {/* Gilded Ribs / Spine Details */}
                      {[-0.08, 0, 0.08].map((ribY, ri) => (
                        <mesh key={`rib-${ri}`} position={[0, ribY, bDepth / 2 + 0.002]}>
                          <boxGeometry args={[bWidth * 0.75, 0.008, 0.003]} />
                          <primitive object={materials.goldFoil} attach="material" />
                        </mesh>
                      ))}
                    </group>
                  )
                })}

                {/* Prominently Featured Interactive Heritage Book on this Shelf */}
                {shelfInteractiveBook && (
                  <group
                    position={[1.52, 0.24, 0.04]}
                    rotation={[0, -0.06, 0]}
                    onPointerOver={(e) => {
                      e.stopPropagation()
                      onHover?.(shelfInteractiveBook.id)
                    }}
                    onPointerOut={(e) => {
                      e.stopPropagation()
                      onHover?.(null)
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelectBook?.(shelfInteractiveBook)
                    }}
                  >
                    {/* Interactive Book Body */}
                    <mesh castShadow receiveShadow>
                      <boxGeometry args={[0.07, 0.44, 0.38]} />
                      <primitive
                        object={
                          isThisBookSelected || isThisBookHovered
                            ? materials.interactiveGlowMat
                            : materials.interactiveBookMat
                        }
                        attach="material"
                      />
                    </mesh>

                    {/* Gold Title Band on Spine */}
                    <mesh position={[0, 0.08, 0.192]}>
                      <boxGeometry args={[0.058, 0.035, 0.004]} />
                      <primitive object={materials.goldFoil} attach="material" />
                    </mesh>
                    <mesh position={[0, -0.05, 0.192]}>
                      <boxGeometry args={[0.054, 0.015, 0.004]} />
                      <primitive object={materials.goldFoil} attach="material" />
                    </mesh>

                    {/* Subtle Golden Cursor Halo Indicator on Hover */}
                    {isThisBookHovered && (
                      <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.085, 0.46, 0.4]} />
                        <primitive object={materials.interactiveGlowMat} attach="material" />
                      </mesh>
                    )}
                  </group>
                )}
              </group>
            )}
          </group>
        )
      })}
    </group>
  )
}
