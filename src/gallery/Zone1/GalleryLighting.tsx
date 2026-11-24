
import { memo } from 'react'

interface GalleryLightingProps {
  castShadows: boolean
}

/**
 * Museum Virtual Undip - Low-Light Cinematic Exhibition Lighting
 * Features:
 * - Moody, high-contrast cinematic atmosphere
 * - Soft warm wall-grazing track spotlights creating dramatic falloffs around artwork
 * - Rich shadows cast by objects and furniture onto the marble floor and carpet
 * - Ambient warm golden glow from the PVC cove lighting and crystal chandeliers
 * - Clean ceilings without harsh light spillage or glare flares
 */
export const GalleryLighting = memo(function GalleryLighting({ castShadows }: GalleryLightingProps) {
  return (
    <group>
      {/* 1. Ambient Fill Light - Crisp & Rich Contrast */}
      <ambientLight color="#f5eadc" intensity={0.58} />

      {/* 2. Primary Architectural Overhead Key Light - Optimized Shadow Map */}
      <directionalLight
        position={[0.3, 14.8, -7.0]}
        target-position={[0, 0, -7.0]}
        color="#fffaf0"
        intensity={1.2}
        castShadow={castShadows}
        shadow-mapSize-width={castShadows ? 1536 : 512}
        shadow-mapSize-height={castShadows ? 1536 : 512}
        shadow-camera-near={1.0}
        shadow-camera-far={26.0}
        shadow-camera-left={-8.5}
        shadow-camera-right={8.5}
        shadow-camera-top={21.0}
        shadow-camera-bottom={-21.0}
        shadow-bias={-0.00008}
      />

      {/* 3. Subtle Counter-Fill from ceiling for natural architectural illumination */}
      <directionalLight
        position={[-0.3, 12.0, -7.0]}
        color="#d8e8f8"
        intensity={0.3}
      />

      {/* 4. Left Wall (Founders Wing) -
          Each founder portrait has its own dedicated gallery frame downlight in FoundersWing.tsx.
          Ceiling-washing spotlights have been removed to eliminate harsh light cones on the upper ceiling. */}

      {/* 5. Right Wall (History & Archives Salon) -
          Directly illuminated by the Active Track Spotlights on the horizontal beam in HistoryArchivesWing.tsx. */}

      {/* 6. Soft Warm Cream Downlights Along Central Red Carpet Aisle */}
      {[5.0, 0.0, -5.0, -10.0].map((az, ai) => (
        <spotLight
          key={`aisle-downlight-${ai}`}
          position={[0, 6.5, az]}
          target-position={[0, 0, az]}
          color="#fff5e4"
          intensity={42}
          angle={0.62}
          penumbra={0.75}
          distance={11.0}
          decay={2}
        />
      ))}

      {/* 8. Ceremonial Podium Stage Accent Downlight (Soft Warm Cream) */}
      <spotLight
        position={[0, 7.2, -15.5]}
        target-position={[0, 1.8, -18.2]}
        color="#fff6e8"
        intensity={50}
        angle={0.62}
        penumbra={0.75}
        distance={14.0}
        decay={2}
      />

      {/* 9. Dedicated Spotlight on the Grand Prasasti Pendirian Undip */}
      <spotLight
        position={[-3.8, 6.5, -15.2]}
        target-position={[-3.8, 1.2, -18.2]}
        color="#fff6e6"
        intensity={45}
        angle={0.52}
        penumbra={0.7}
        distance={12.5}
        decay={2}
      />

      {/* 10. Grand Focal Back Wall Illumination: Logo Undip, Ivory Granite & "Universitas Diponegoro"
          Calibrated softly so there is zero specular glare or white hotspots on the honed stone slab */}
      <spotLight
        position={[0, 7.4, -19.0]}
        target-position={[0, 4.6, -25.8]}
        color="#fff3e2"
        intensity={26}
        angle={0.68}
        penumbra={0.9}
        distance={16.0}
        decay={2}
      />

      {/* Back Wall Architectural Wall-Washing Flood Lights (Even, diffuse warm tone) */}
      {[-2.8, 2.8].map((wx, wi) => (
        <spotLight
          key={`back-wash-${wi}`}
          position={[wx, 7.8, -20.5]}
          target-position={[wx, 4.0, -25.8]}
          color="#fff5e8"
          intensity={24}
          angle={0.82}
          penumbra={0.92}
          distance={15.0}
          decay={2}
        />
      ))}

      {/* 11. Soft Central Ambient Bounce for the Back Ceremonial Zone */}
      <pointLight position={[0, 5.2, -21.0]} color="#fff3df" intensity={16} distance={12} decay={2} />

      {/* 12. Entrance Area Welcome Warm Light */}
      <pointLight
        position={[0, 5.5, 10.5]}
        color="#ffeedd"
        intensity={20}
        distance={12}
        decay={2}
      />
    </group>
  )
})
