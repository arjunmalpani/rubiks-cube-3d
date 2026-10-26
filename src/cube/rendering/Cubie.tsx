import { RoundedBox } from "@react-three/drei";
import type { Vector3Tuple } from "../types";
import { getStickers } from "../domain/get-stickers";
export type CubieProps = {
  coord: Vector3Tuple;
  size: number;
  all?: boolean;
};
export default function Cubie({ coord, size, all }: CubieProps) {
  const stickers = getStickers(coord, size, all);
  return (
      <>
          <RoundedBox args={[0.96, 0.96, 0.96]} radius={0.1}>
              <meshStandardMaterial
                  color={"#1b1b1b"}
                  roughness={0}
                  metalness={1}
              />
          </RoundedBox>
          {stickers.map((face) => (
              <mesh
                  key={face.color}
                  position={
                      face.n.map(
                          (val) => val * (0.96 / 2 + 0.002),
                      ) as Vector3Tuple
                  }
                  rotation={face.rot}
              >
                  <planeGeometry args={[0.8, 0.8]} />
                  <meshStandardMaterial
                      side={2}
                      color={face.color}
                      roughness={0}
                      metalness={1}
                  />
              </mesh>
          ))}
      </>
  );
}
