import type { ThreeElements } from "@react-three/fiber";
import { useMemo } from "react";
import { getCoordinates } from "../domain/coordinates";
import Cubie from "./Cubie";
export type CubeProps = ThreeElements["group"] & {
  size?: number;
};
export default function Cube({ size = 3, ...groupProps }: CubeProps) {
  // @ts-ignore
  const center = (size - 1) / 2;
  const coords = useMemo(() => getCoordinates(size), [size]);
  return (
    <group {...groupProps} key={size}>
      {coords.map((coord, _idx) => (
        <group key={coord.join(",")} position={coord}>
          <Cubie size={size} coord={coord} />
        </group>
      ))}
    </group>
  );
}
