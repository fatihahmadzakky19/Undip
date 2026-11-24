import { useMemo, useState } from 'react'
import * as THREE from 'three'
import type { HeritageBook } from '../data/books'
import { HERITAGE_BOOKS } from '../data/books'

interface WallBookshelfProps {
  position: [number, number, number]
  rotationY?: number
  length?: number // Length along wall (default 4.8m)
  categoryTitle?: string
  interactiveBookIds?: string[]
  onSelectBook?: (book: HeritageBook) => void
  onHoverBook?: (id: string | null) => void
  hoveredBookId?: string | null
}

/**
 * Low-Profile Architectural Wall Bookshelf (Heritage Library Collection)
 * Designed strictly according to the Master Specification:
 * - Positioned cleanly against the wall directly UNDER the photo frames
 * - Height: 1.05m (leaves 0.35m–0.85m clean breathing space below photo frames)
 * - Depth: 0.36m (ultra-slim against wall, keeping the 5.5m wide aisle completely open)
 * - Finish: Dark Walnut wood with Antique Gold inlays & warm shelf illumination
 * - Realistic book arrangements (vertical clusters, leaning books, horizontal stacks)
 * - Clickable interactive books with golden hover aura
 */
export function WallBookshelf({
  position,
  rotationY = 0,
  length = 4.8,
  categoryTitle = 'KOLEKSI HISTORIS PERPUSTAKAAN UNDIP',
  interactiveBookIds = [],
  onSelectBook,
  onHoverBook,
  hoveredBookId,
}: WallBookshelfProps) {
  const [internalHover, setInternalHover] = useState<string | null>(null)
  const activeHoverId = hoveredBookId !== undefined ? hoveredBookId : internalHover

  // Find book definitions for interactive books
  const interactiveBooks = useMemo(() => {
    return interactiveBookIds
      .map((id) => HERITAGE_BOOKS.find((b) => b.id === id))
      .filter((b): b is HeritageBook => b !== undefined)
  }, [interactiveBookIds])

  // Canvas texture for brass category nameplate
  const nameplateTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 128
    const ctx = canvas.getContext('2d')
    if (ctx) {
      // Antique Brushed Brass Background
      const grad = ctx.createLinearGradient(0, 0, 1024, 0)
      grad.addColorStop(0, '#785b24')
      grad.addColorStop(0.2, '#c49b45')
      grad.addColorStop(0.5, '#e4c478')
      grad.addColorStop(0.8, '#c49b45')
      grad.addColorStop(1, '#785b24')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 1024, 128)

      // Double Gold Rim Border
      ctx.strokeStyle = '#3d2516'
      ctx.lineWidth = 4
      ctx.strokeRect(8, 8, 1008, 112)
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth = 1.5
      ctx.strokeRect(14, 14, 996, 100)

      // Embossed Serif Typography
      ctx.fillStyle = '#1a0e05'
      ctx.font = 'bold 36px "Cinzel", "Times New Roman", Georgia, serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(`✦  ${categoryTitle.toUpperCase()}  ✦`, 512, 64)
    }
    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    return tex
  }, [categoryTitle])

  // Shared library materials
  const materials = useMemo(() => {
    return {
      darkWalnut: new THREE.MeshStandardMaterial({
        color: '#2a180e',
        roughness: 0.52,
        metalness: 0.12,
      }),
      darkWalnutCarved: new THREE.MeshStandardMaterial({
        color: '#1f1109',
        roughness: 0.45,
        metalness: 0.15,
      }),
      goldTrim: new THREE.MeshStandardMaterial({
        color: '#d4af37',
        roughness: 0.28,
        metalness: 0.85,
      }),
      goldAccentBright: new THREE.MeshStandardMaterial({
        color: '#ffd700',
        roughness: 0.2,
        metalness: 0.9,
      }),
      warmLedGlow: new THREE.MeshStandardMaterial({
        color: '#fff3db',
        emissive: '#ffd9a0',
        emissiveIntensity: 0.75,
        roughness: 0.3,
      }),
      leatherBlotter: new THREE.MeshStandardMaterial({
        color: '#152438',
        roughness: 0.65,
      }),
      // Palette of authentic leather/cloth book covers
      bookNavy: new THREE.MeshStandardMaterial({ color: '#0d2238', roughness: 0.6 }),
      bookBurgundy: new THREE.MeshStandardMaterial({ color: '#54151a', roughness: 0.6 }),
      bookGreen: new THREE.MeshStandardMaterial({ color: '#163822', roughness: 0.6 }),
      bookBrown: new THREE.MeshStandardMaterial({ color: '#3d2516', roughness: 0.62 }),
      bookBlack: new THREE.MeshStandardMaterial({ color: '#1a1918', roughness: 0.65 }),
      bookGoldFoil: new THREE.MeshStandardMaterial({
        color: '#d4af37',
        roughness: 0.25,
        metalness: 0.82,
      }),
      pageEdgeIvory: new THREE.MeshStandardMaterial({
        color: '#f4ebd9',
        roughness: 0.85,
      }),
    }
  }, [])

  const bw = length
  const bh = 1.05 // Total height (meters)
  const bd = 0.36 // Total depth from wall (meters)
  const bays = Math.max(2, Math.round(length / 1.2)) // Number of vertical compartments

  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* ============================================================
          1. MAIN ARCHITECTURAL TIMBER FRAMEWORK
          ============================================================ */}
      {/* Bottom Closed Plinth Base */}
      <mesh position={[0, 0.08, 0]} castShadow receiveShadow>
        <boxGeometry args={[bw, 0.16, bd]} />
        <primitive object={materials.darkWalnutCarved} attach="material" />
      </mesh>
      {/* Gold Baseboard Molding Strip */}
      <mesh position={[0, 0.162, bd / 2 - 0.01]}>
        <boxGeometry args={[bw + 0.02, 0.016, 0.02]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Back Wall Panel (Hugs the museum wainscot) */}
      <mesh position={[0, bh / 2, -bd / 2 + 0.015]} receiveShadow>
        <boxGeometry args={[bw - 0.06, bh, 0.03]} />
        <primitive object={materials.darkWalnut} attach="material" />
      </mesh>

      {/* Left End Column Pilaster */}
      <mesh position={[-bw / 2 + 0.03, bh / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.06, bh, bd]} />
        <primitive object={materials.darkWalnutCarved} attach="material" />
      </mesh>
      <mesh position={[-bw / 2 + 0.03, bh / 2, bd / 2 - 0.005]}>
        <boxGeometry args={[0.02, bh - 0.1, 0.01]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Right End Column Pilaster */}
      <mesh position={[bw / 2 - 0.03, bh / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.06, bh, bd]} />
        <primitive object={materials.darkWalnutCarved} attach="material" />
      </mesh>
      <mesh position={[bw / 2 - 0.03, bh / 2, bd / 2 - 0.005]}>
        <boxGeometry args={[0.02, bh - 0.1, 0.01]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>

      {/* Middle Vertical Compartment Dividers */}
      {Array.from({ length: bays - 1 }).map((_, i) => {
        const divX = -bw / 2 + (bw / bays) * (i + 1)
        return (
          <group key={`div-${i}`} position={[divX, bh / 2, 0]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.045, bh - 0.16, bd - 0.04]} />
              <primitive object={materials.darkWalnut} attach="material" />
            </mesh>
            <mesh position={[0, 0, bd / 2 - 0.02]}>
              <boxGeometry args={[0.015, bh - 0.18, 0.008]} />
              <primitive object={materials.goldTrim} attach="material" />
            </mesh>
          </group>
        )
      })}

      {/* ============================================================
          2. HORIZONTAL SHELF TIERS & INTEGRATED LIGHTING
          ============================================================ */}
      {/* Shelf 1 (Lower Shelf Board) */}
      <mesh position={[0, 0.54, 0]} castShadow receiveShadow>
        <boxGeometry args={[bw - 0.06, 0.04, bd - 0.03]} />
        <primitive object={materials.darkWalnut} attach="material" />
      </mesh>
      <mesh position={[0, 0.54, bd / 2 - 0.015]}>
        <boxGeometry args={[bw - 0.04, 0.014, 0.01]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>
      {/* Underside Warm LED Strip for Shelf 1 */}
      <mesh position={[0, 0.518, 0]}>
        <boxGeometry args={[bw - 0.1, 0.008, 0.02]} />
        <primitive object={materials.warmLedGlow} attach="material" />
      </mesh>

      {/* Top Mantle Shelf Board */}
      <mesh position={[0, bh, 0]} castShadow receiveShadow>
        <boxGeometry args={[bw + 0.06, 0.05, bd + 0.04]} />
        <primitive object={materials.darkWalnutCarved} attach="material" />
      </mesh>
      <mesh position={[0, bh, bd / 2 + 0.015]}>
        <boxGeometry args={[bw + 0.08, 0.02, 0.012]} />
        <primitive object={materials.goldTrim} attach="material" />
      </mesh>
      {/* Underside Warm LED Strip for Top Shelf */}
      <mesh position={[0, bh - 0.026, 0]}>
        <boxGeometry args={[bw - 0.1, 0.008, 0.02]} />
        <primitive object={materials.warmLedGlow} attach="material" />
      </mesh>

      {/* ============================================================
          3. ANTIQUE BRASS CATEGORY NAMEPLATE
          Centered proudly on the top front mantle
          ============================================================ */}
      <group position={[0, bh + 0.08, bd / 2 - 0.01]}>
        {/* Nameplate Base Plate */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[Math.min(bw * 0.75, 2.2), 0.12, 0.015]} />
          <primitive object={materials.goldTrim} attach="material" />
        </mesh>
        <mesh position={[0, 0, 0.009]}>
          <planeGeometry args={[Math.min(bw * 0.75, 2.16), 0.105]} />
          <meshStandardMaterial map={nameplateTexture} roughness={0.3} metalness={0.7} />
        </mesh>
      </group>

      {/* ============================================================
          4. CURATED BOOK COLLECTIONS (LOWER & UPPER TIERS)
          ============================================================ */}
      {Array.from({ length: bays }).map((_, bayIdx) => {
        const bayW = bw / bays
        const bayCenterX = -bw / 2 + bayW * (bayIdx + 0.5)

        return (
          <group key={`bay-books-${bayIdx}`} position={[bayCenterX, 0, 0]}>
            {/* --- Lower Shelf Books (Y = 0.18 to 0.52) --- */}
            <ShelfCluster
              shelfY={0.16}
              maxWidth={bayW - 0.1}
              bayIndex={bayIdx}
              tier={1}
              materials={materials}
              interactiveBooks={interactiveBooks}
              activeHoverId={activeHoverId}
              onSelectBook={onSelectBook}
              onHoverBook={(id) => {
                setInternalHover(id)
                onHoverBook?.(id)
              }}
            />

            {/* --- Upper Shelf Books (Y = 0.56 to 0.98) --- */}
            <ShelfCluster
              shelfY={0.56}
              maxWidth={bayW - 0.1}
              bayIndex={bayIdx}
              tier={2}
              materials={materials}
              interactiveBooks={interactiveBooks}
              activeHoverId={activeHoverId}
              onSelectBook={onSelectBook}
              onHoverBook={(id) => {
                setInternalHover(id)
                onHoverBook?.(id)
              }}
            />
          </group>
        )
      })}
    </group>
  )
}

interface ShelfClusterProps {
  shelfY: number
  maxWidth: number
  bayIndex: number
  tier: number
  materials: Record<string, THREE.Material>
  interactiveBooks: HeritageBook[]
  activeHoverId: string | null
  onSelectBook?: (book: HeritageBook) => void
  onHoverBook?: (id: string | null) => void
}

/**
 * Cluster of books populated naturally on each shelf section
 */
function ShelfCluster({
  shelfY,
  maxWidth,
  bayIndex,
  tier,
  materials,
  interactiveBooks,
  activeHoverId,
  onSelectBook,
  onHoverBook,
}: ShelfClusterProps) {
  // Generate deterministic variations for realistic shelving
  const books = useMemo(() => {
    const list: Array<{
      width: number
      height: number
      depth: number
      materialKey: string
      tiltAngle: number
      isInteractive: boolean
      interactiveData?: HeritageBook
    }> = []

    const count = Math.floor(maxWidth / 0.065) - (bayIndex % 2 === 0 ? 1 : 0) // Leave natural breathing gap
    const palette = ['bookNavy', 'bookBrown', 'bookBurgundy', 'bookGreen', 'bookBlack']

    // Distribute interactive book if available for this slot
    const assignedBookIndex = (bayIndex * 2 + tier - 1) % Math.max(1, interactiveBooks.length)
    const targetInteractiveBook = interactiveBooks[assignedBookIndex]
    const interactiveSlot = Math.floor(count / 2)

    for (let i = 0; i < count; i++) {
      const isInteractive = Boolean(targetInteractiveBook && i === interactiveSlot)
      const matKey = isInteractive
        ? 'bookNavy'
        : palette[(i + bayIndex * 3 + tier) % palette.length]

      const bWidth = 0.038 + ((i * 13) % 4) * 0.009
      const bHeight = isInteractive
        ? 0.32
        : 0.24 + ((i * 7 + tier * 5) % 5) * 0.018
      const bDepth = 0.24 + ((i * 3) % 3) * 0.015

      // Natural book tilt at end of row
      let tilt = 0
      if (i === count - 1 && bayIndex % 2 === 1) {
        tilt = 0.12 // Lean naturally against divider
      }

      list.push({
        width: bWidth,
        height: bHeight,
        depth: bDepth,
        materialKey: matKey,
        tiltAngle: tilt,
        isInteractive,
        interactiveData: isInteractive ? targetInteractiveBook : undefined,
      })
    }

    return list
  }, [maxWidth, bayIndex, tier, interactiveBooks])

  let currentX = -maxWidth / 2 + 0.04

  return (
    <group position={[0, shelfY, 0]}>
      {books.map((b, idx) => {
        const posX = currentX + b.width / 2
        currentX += b.width + 0.004

        const isHovered = b.isInteractive && b.interactiveData?.id === activeHoverId

        return (
          <group
            key={`bk-${idx}`}
            position={[posX, b.height / 2, 0]}
            rotation={[0, 0, b.tiltAngle]}
            onPointerOver={(e) => {
              if (b.isInteractive && b.interactiveData) {
                e.stopPropagation()
                onHoverBook?.(b.interactiveData.id)
              }
            }}
            onPointerOut={(e) => {
              if (b.isInteractive) {
                e.stopPropagation()
                onHoverBook?.(null)
              }
            }}
            onClick={(e) => {
              if (b.isInteractive && b.interactiveData) {
                e.stopPropagation()
                onSelectBook?.(b.interactiveData)
              }
            }}
          >
            {/* Book Body */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[b.width, b.height, b.depth]} />
              <primitive
                object={
                  isHovered
                    ? materials.goldAccentBright
                    : materials[b.materialKey] || materials.bookNavy
                }
                attach="material"
              />
            </mesh>

            {/* Gold Foil Spine Bands */}
            {[-0.08, 0, 0.08].map((bandY, bi) => (
              <mesh key={`band-${bi}`} position={[0, bandY, b.depth / 2 + 0.001]}>
                <boxGeometry args={[b.width * 0.85, 0.006, 0.002]} />
                <primitive object={materials.bookGoldFoil} attach="material" />
              </mesh>
            ))}

            {/* Pages Edge (Top & Front edge) */}
            <mesh position={[0, b.height / 2 - 0.008, -0.01]}>
              <boxGeometry args={[b.width * 0.9, 0.004, b.depth * 0.9]} />
              <primitive object={materials.pageEdgeIvory} attach="material" />
            </mesh>

            {/* Interactive Book Glowing Beacon / Hover Indicator */}
            {b.isInteractive && (
              <group position={[0, b.height / 2 + 0.04, b.depth / 2]}>
                {isHovered && (
                  <pointLight color="#ffe899" intensity={6} distance={1.2} decay={2} />
                )}
                <mesh>
                  <sphereGeometry args={[0.012, 12, 12]} />
                  <meshStandardMaterial
                    color="#ffd700"
                    emissive="#ffcc00"
                    emissiveIntensity={isHovered ? 2.5 : 1.2}
                  />
                </mesh>
              </group>
            )}
          </group>
        )
      })}
    </group>
  )
}
