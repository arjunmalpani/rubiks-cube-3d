import type { Vector3Tuple } from "../types";

export function getCoordinates(size: number): Vector3Tuple[] {
  const coords: Vector3Tuple[] = [];
  const center = (size - 1) / 2;
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
      for (let z = 0; z < size; z++) {
        // Skip internal cubies
        if (x === 0 || x === size - 1 || y === 0 || y === size - 1 || z === 0 || z === size - 1) {
          coords.push([x - center, y - center, z - center]);
        }
      }
    }
  }

  return coords;
}
