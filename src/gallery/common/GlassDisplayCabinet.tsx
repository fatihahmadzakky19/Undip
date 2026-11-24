import { useMemo } from 'react'
import * as THREE from 'three'
import { assetCache } from '../Zone1/cache'
import type { HeritageArtifact } from '../data/artifacts'

interface GlassDisplayCabinetProps {
  position: [number, number, number]
  rotationY?: number
  artifact?: HeritageArtifact | null
  isSelected?: boolean
  isHovered?: boolean
  onSelectArtifact?: (artifact: HeritageArtifact) => void
  onHover?: (id: string | null) => void
}

/**
 * Type C: Glass Display Cabinet (Lemari Kaca Artefak & Arsip Sejarah)
 * Characteristics:
 * - Height 2.3m, Width 1.4m, Depth 0.65m
 * - Solid Dark Walnut Plinth and Gilded Cornice
 * - Clear Tempered Glass Chamber with Brushed Gold Corner Bracing
 * - Recessed Warm LED Interior Accent Spotlight on Pedestal
 * - Displays authentic historical documents, academic regalia, trophies, medals, seals
 * - Interactive: Clicking displays full provenance, photos, and academic history
 */
export function GlassDisplayCabinet({
  position,
  rotationY = 0,
  artifact = null,
  isSelected = false,
  isHovered = false,
  onSelectArtifact,
  onHover,
}: GlassDisplayCabinetProps) {
  const materials = useMemo(() => {
    return {
      darkWalnut: assetCache.getMaterial(
        'gdc-walnut',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#24150b',
            roughness: 0.42,
            metalness: 0.15,
          }),
      ),
      brushedGold: assetCache.getMaterial(
        'gdc-gold',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.25,
            metalness: 0.88,
          }),
      ),
      glass: assetCache.getMaterial(
        'gdc-glass',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#ffffff',
            transparent: true,
            opacity: 0.32,
            roughness: 0.04,
            metalness: 0.1,
          }),
      ),
      redVelvet: assetCache.getMaterial(
        'gdc-velvet',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#52141a',
            roughness: 0.85,
            metalness: 0.05,
          }),
      ),
      spotlightGlow: assetCache.getMaterial(
        'gdc-glow',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#fff5d6',
            emissive: '#ffd980',
            emissiveIntensity: 0.8,
            roughness: 0.2,
          }),
      ),
      artifactGold: assetCache.getMaterial(
        'gdc-art-gold',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#d4af37',
            roughness: 0.22,
            metalness: 0.9,
          }),
      ),
      highlightRing: assetCache.getMaterial(
        'gdc-halo',
        () =>
          new THREE.MeshStandardMaterial({
            color: '#ffd700',
            emissive: '#ffd700',
            emissiveIntensity: 0.7,
            roughness: 0.1,
          }),
      ),
    }
  }, [])

  const cw = 1.4 // width
  const ch = 2.3 // total height
  const cd = 0.65 // depth
  const baseH = 0.75 // solid plinth base height
  const chamberH = ch - baseH - 0.15 // glass chamber height (1.4m)

  return (
    <group
      position={position}
      rotation={[0, rotationY, 0]}
      onPointerOver={(e) => {
        if (!artifact) return
        e.stopPropagation()
        onHover?.(artifact.id)
      }}
      onPointerOut={(e) => {
        if (!artifact) return
        e.stopPropagation()
        onHover?.(null)
      }}
      onClick={(e) => {
        if (!artifact) return
        e.stopPropagation()
        onSelectArtifact?.(artifact)
      }}
    >
      {/* 1. Base Plinth (Dark Walnut with Gold Moldings) */}
      <mesh position={[0, baseH / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[cw, baseH, cd]} />
        <primitive object={materials.darkWalnut} attach="material" />
      </mesh>
      {/* Top and Bottom Gold Trim on Plinth */}
      <mesh position={[0, baseH, 0]}>
        <boxGeometry args={[cw + 0.04, 0.024, cd + 0.04]} />
        <primitive object={materials.brushedGold} attach="material" />
      </mesh>
      <mesh position={[0, 0.04, 0]}>
        <boxGeometry args={[cw + 0.04, 0.04, cd + 0.04]} />
        <primitive object={materials.brushedGold} attach="material" />
      </mesh>

      {/* Front Identification Brass Plaque */}
      <mesh position={[0, baseH - 0.14, cd / 2 + 0.008]} castShadow>
        <boxGeometry args={[cw * 0.65, 0.1, 0.015]} />
        <primitive object={materials.brushedGold} attach="material" />
      </mesh>

      {/* 2. Clear Tempered Glass Chamber */}
      <group position={[0, baseH + chamberH / 2, 0]}>
        {/* Front Glass Pane */}
        <mesh position={[0, 0, cd / 2]}>
          <boxGeometry args={[cw - 0.06, chamberH, 0.015]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        {/* Back Glass Pane */}
        <mesh position={[0, 0, -cd / 2]}>
          <boxGeometry args={[cw - 0.06, chamberH, 0.015]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        {/* Left Glass Pane */}
        <mesh position={[-cw / 2, 0, 0]}>
          <boxGeometry args={[0.015, chamberH, cd - 0.04]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>
        {/* Right Glass Pane */}
        <mesh position={[cw / 2, 0, 0]}>
          <boxGeometry args={[0.015, chamberH, cd - 0.04]} />
          <primitive object={materials.glass} attach="material" />
        </mesh>

        {/* Four Corner Brushed Brass Vertical Pillars */}
        {[-1, 1].map((sx) =>
          [-1, 1].map((sz) => (
            <mesh
              key={`pillar-${sx}-${sz}`}
              position={[sx * (cw / 2 - 0.02), 0, sz * (cd / 2 - 0.02)]}
              castShadow
            >
              <cylinderGeometry args={[0.022, 0.022, chamberH, 16]} />
              <primitive object={materials.brushedGold} attach="material" />
            </mesh>
          )),
        )}
      </group>

      {/* 3. Top Canopy Cornice & Recessed Spotlight */}
      <mesh position={[0, ch - 0.075, 0]} castShadow>
        <boxGeometry args={[cw + 0.04, 0.15, cd + 0.04]} />
        <primitive object={materials.darkWalnut} attach="material" />
      </mesh>
      <mesh position={[0, ch - 0.01, 0]}>
        <boxGeometry args={[cw + 0.06, 0.02, cd + 0.06]} />
        <primitive object={materials.brushedGold} attach="material" />
      </mesh>

      {/* Interior Warm LED Downlight Fitting */}
      <mesh position={[0, ch - 0.15, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.03, 16]} />
        <primitive object={materials.spotlightGlow} attach="material" />
      </mesh>

      {/* 4. Interior Pedestal & Artifact Display */}
      {/* Red Velvet / Ivory Pedestal Block */}
      <mesh position={[0, baseH + 0.28, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.58, 0.52, 0.42]} />
        <primitive object={materials.redVelvet} attach="material" />
      </mesh>
      <mesh position={[0, baseH + 0.545, 0]}>
        <boxGeometry args={[0.6, 0.015, 0.44]} />
        <primitive object={materials.brushedGold} attach="material" />
      </mesh>

      {/* Artifact Model on Pedestal */}
      <group position={[0, baseH + 0.65, 0]}>
        {/* Ceremonial Insignia / Medal / Relic representation */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.16, 0.18, 0.14, 24]} />
          <primitive object={materials.artifactGold} attach="material" />
        </mesh>
        <mesh position={[0, 0.12, 0]} castShadow>
          <sphereGeometry args={[0.09, 20, 20]} />
          <primitive object={materials.artifactGold} attach="material" />
        </mesh>

        {/* Hover / Selected Interactive Glow Ring */}
        {(isHovered || isSelected) && (
          <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.22, 0.26, 32]} />
            <primitive object={materials.highlightRing} attach="material" />
          </mesh>
        )}
      </group>
    </group>
  )
}
