import { Armchair, GlassTable } from '../Zone1/MuseumFurniture'

interface ReadingLoungeProps {
  position: [number, number, number]
  rotationY?: number
}

/**
 * Museum Visitor Reading & Study Alcove
 * Features:
 * - Two deep royal navy velvet armchairs with polished walnut frames and brass studs
 * - Low glass coffee table with gold trim
 * - Classical academic atmosphere for studying historical archives
 */
export function ReadingLounge({ position, rotationY = 0 }: ReadingLoungeProps) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* Central Glass Table with Open Historical Volume */}
      <GlassTable position={[0, 0, 0]} />

      {/* Left and Right Armchairs facing the Table */}
      <Armchair position={[-1.05, 0, 0]} rotationY={Math.PI / 2} />
      <Armchair position={[1.05, 0, 0]} rotationY={-Math.PI / 2} />
    </group>
  )
}
