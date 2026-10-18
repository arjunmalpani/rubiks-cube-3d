import type { Vector3Tuple } from "../types";
import { Faces } from "./faces";
export function getStickers(coord: Vector3Tuple, size: number, all?: boolean) {
  if (all) return Faces;

  const center = (size - 1) / 2;

  return Faces.filter((face) =>
    face.n.some((value, idx) => {
      if (value === 1) return coord[idx] === center;
      if (value === -1) return coord[idx] === -center;
      return false;
    }),
  );
}
