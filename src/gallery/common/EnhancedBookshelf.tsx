import { useMemo } from 'react'
import * as THREE from 'three'
import type { HeritageBook } from '../data/books'

interface EnhancedBookshelfProps {
  position: [number, number, number]
  rotationY?: number
  categoryTitle?: string
  interactiveBook?: HeritageBook
  onSelectBook?: (book: HeritageBook) => void
  onHoverBook?: (id: string | null) => void
  hoveredBookId?: string | null
}

/**
 * Enhanced Heritage Vertical Bookcase
 * Preserves the original tall dark wood bookcase while adding:
 * - Refined warm white internal shelf downlights (solving the "too dark" issue)
 * - Classical pediment with embossed brass category title plate
 * - Antique gold moulding lines & shelf edges
 * - Realistic leather-bound book varieties with gold foil spines
 */
export function EnhancedBookshelf({
  position,
  rotationY = 0,
  categoryTitle = 'HISTORICAL ARCHIVE COLLECTION',
  interactiveBook,
  onSelectBook,
  onHoverBook,
  hoveredBookId,
}: EnhancedBookshelfProps) {
  const materials = useMemo(() => {
    return {
      woodFrame: new THREE.MeshStandardMaterial({
        color: '#2a170d',
        roughness: 0.5,
        metalness: 0.12,
      }),
      woodBack: new THREE.MeshStandardMaterial({
        color: '#1e0f07',
        roughness: 0.65,
      }),
      goldTrim: new THREE.MeshStandardMaterial({
        color: '#d4af37',
        roughness: 0.28,
        metalness: 0.88,
      }),
      goldGilt: new THREE.MeshStandardMaterial({
        color: '#ffd700',
        roughness: 0.2,
        metalness: 0.9,
      }),
      shelfWarmGlow: new THREE.MeshStandardMaterial({
        color: '#fff3db',
        emissive: '#ffdca3',
        emissiveIntensity: 0.95,
        roughness: 0.3,
      }),
      bookSpines: [
        new THREE.MeshStandardMaterial({ color: '#54151a', roughness: 0.6 }), // Burgundy
        new THREE.MeshStandardMaterial({ color: '#0d2440', roughness: 0.6 }), // Navy
        new THREE.MeshStandardMaterial({ color: '#163b22', roughness: 0.6 }), // Forest Green
        new THREE.MeshStandardMaterial({ color: '#3d2516', roughness: 0.62 }), // Dark Brown
        new THREE.MeshStandardMaterial({ color: '#1f1b29', roughness: 0.6 }), // Indigo
      ],
      pageEdges: new THREE.MeshStandardMaterial({
        color: '#f5eee1',
        roughness: 0.85,
      }),
    }
  }, [])

  // Canvas texture for the upper pediment brass plate
  const pedimentPlateTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 128
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const grad = ctx.createLinearGradient(0, 0, 1024, 0)
      grad.addColorStop(0, '#785b24')
      grad.addColorStop(0.2, '#c49b45')
      grad.addColorStop(0.5, '#f0d38d')
      grad.addColorStop(0.8, '#c49b45')
      grad.addColorStop(1, '#785b24')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 1024, 128)

      ctx.strokeStyle = '#2b170c'
      ctx.lineWidth = 4
      ctx.strokeRect(6, 6, 1012, 116)

      ctx.fillStyle = '#1c0e06'
      ctx.font = 'bold 34px "Cinzel", "Times New Roman", serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`✦  ${categoryTitle.toUpperCase()}  ✦`, 512, 64)
    }
    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [categoryTitle])

  const bw = 1.9 // width
  const bh = 3.6 // height
  const bd = 0.5 // depth
  const shelves = 5

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* 1. Main Outer Timber Frame */}
      {/* Left side panel */}
      <mesh position={[-bw / 2 + 0.04, bh / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.08, bh, bd]} />
        <primitive object={materials.woodFrame} attach="material" />
      </mesh>
      {/* Right side panel */}
      <mesh position={[bw / 2 - 0.04, bh / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.08, bh, bd]} />
        <primitive object={materials.woodFrame} attach="material" />
      </mesh>

      {/* Top crown cornice */}
      <mesh position={[0, bh + 0.05, 0]} castShadow>
        <boxGeometry args={[bw + 0.14, 0.12, bd + 0.1]} />
        <primitive object={materials.woodFrame} attach="material" />
      </mesh>
      {/* Gold crown trim */}
      <mesh position={[0, bh + 0.11, bd / 2 + 0.05]}>
        <boxGeometry args={[bw + 0.16, 0.02, 0.02]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Classical Archival Pediment Header */}
      <group position={[0, bh + 0.22, bd / 2 + 0.02]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[bw * 0.88, 0.16, 0.04]} />
          <primitive object={materials.woodFrame} attach="material" />
        </mesh>
        <mesh position={[0, 0, 0.022]}>
          <planeGeometry args={[bw * 0.84, 0.13]} />
          <meshStandardMaterial map={pedimentPlateTexture} roughness={0.3} metalness={0.7} />
        </mesh>
      </group>

      {/* Bottom base plinth */}
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[bw + 0.08, 0.2, bd + 0.06]} />
        <primitive object={materials.woodFrame} attach="material" />
      </mesh>
      <mesh position={[0, 0.2, bd / 2 + 0.03]}>
        <boxGeometry args={[bw + 0.1, 0.02, 0.02]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Backboard */}
      <mesh position={[0, bh / 2, -bd / 2 + 0.02]} receiveShadow>
        <boxGeometry args={[bw - 0.08, bh, 0.04]} />
        <primitive object={materials.woodBack} attach="material" />
      </mesh>

      {/* Internal Warm Downlight to illuminate the books */}
      <pointLight position={[0, bh - 0.3, bd / 4]} color="#ffe7ba" intensity={4.5} distance={3.8} decay={2} />

      {/* 2. Horizontal Shelves & Books */}
      {Array.from({ length: shelves }).map((_, i) => {
        const shelfY = 0.35 + i * ((bh - 0.6) / (shelves - 1))
        return (
          <group key={i}>
            {/* Shelf board */}
            <mesh position={[0, shelfY, 0]} castShadow receiveShadow>
              <boxGeometry args={[bw - 0.08, 0.05, bd - 0.04]} />
              <primitive object={materials.woodFrame} attach="material" />
            </mesh>
            {/* Front gold edge on each shelf */}
            <mesh position={[0, shelfY, bd / 2 - 0.02]}>
              <boxGeometry args={[bw - 0.08, 0.014, 0.012]} />
              <primitive object={materials.goldTrim} attach="material" />
            </mesh>
            {/* Subtle recessed warm shelf glow strip */}
            <mesh position={[0, shelfY - 0.026, 0]}>
              <boxGeometry args={[bw - 0.14, 0.008, 0.03]} />
              <primitive object={materials.shelfWarmGlow} attach="material" />
            </mesh>

            {/* Books clustered on this shelf */}
            {i < shelves - 1 && (
              <group position={[-bw / 2 + 0.18, shelfY + 0.025, 0]}>
                {Array.from({ length: 15 }).map((_, bIdx) => {
                  const bWidth = 0.042 + (bIdx % 4) * 0.012
                  const bHeight = 0.32 + ((bIdx * 7) % 5) * 0.025
                  const bDepth = 0.34
                  const mat = materials.bookSpines[(bIdx + i * 2) % materials.bookSpines.length]
                  const isSpecial = interactiveBook && i === 2 && bIdx === 7
                  const isHovered = isSpecial && hoveredBookId === interactiveBook.id

                  return (
                    <group
                      key={bIdx}
                      position={[bIdx * 0.088, bHeight / 2, 0]}
                      onPointerOver={(e) => {
                        if (isSpecial) {
                          e.stopPropagation()
                          onHoverBook?.(interactiveBook.id)
                        }
                      }}
                      onPointerOut={(e) => {
                        if (isSpecial) {
                          e.stopPropagation()
                          onHoverBook?.(null)
                        }
                      }}
                      onClick={(e) => {
                        if (isSpecial) {
                          e.stopPropagation()
                          onSelectBook?.(interactiveBook)
                        }
                      }}
                    >
                      {/* Book spine/body */}
                      <mesh castShadow receiveShadow>
                        <boxGeometry args={[bWidth, bHeight, bDepth]} />
                        <primitive
                          object={isHovered ? materials.goldGilt : mat}
                          attach="material"
                        />
                      </mesh>
                      {/* Gold embossed title line on spine */}
                      <mesh position={[0, 0, bDepth / 2 + 0.002]}>
                        <boxGeometry args={[bWidth * 0.75, 0.01, 0.002]} />
                        <primitive object={materials.goldGilt} attach="material" />
                      </mesh>
                      <mesh position={[0, -0.06, bDepth / 2 + 0.002]}>
                        <boxGeometry args={[bWidth * 0.6, 0.006, 0.002]} />
                        <primitive object={materials.goldGilt} attach="material" />
                      </mesh>
                      <mesh position={[0, 0.06, bDepth / 2 + 0.002]}>
                        <boxGeometry args={[bWidth * 0.6, 0.006, 0.002]} />
                        <primitive object={materials.goldGilt} attach="material" />
                      </mesh>
                    </group>
                  )
                })}
              </group>
            )}
          </group>
        )
      })}
    </group>
  )
}
