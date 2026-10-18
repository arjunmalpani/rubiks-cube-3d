import type { Vector3Tuple } from "../types";

type Face = {
  n: Vector3Tuple;
  color: `#${string}`;
  rot: Vector3Tuple;
};
export const Faces = [
  { n: [1, 0, 0], color: "#b71234", rot: [0, Math.PI / 2, 0] }, // R red
  { n: [-1, 0, 0], color: "#ff5800", rot: [0, -Math.PI / 2, 0] }, // L orange
  { n: [0, 1, 0], color: "#ffffff", rot: [-Math.PI / 2, 0, 0] }, // U white
  { n: [0, -1, 0], color: "#ffd500", rot: [Math.PI / 2, 0, 0] }, // D yellow
  { n: [0, 0, 1], color: "#009b48", rot: [0, 0, 0] }, // F green
  { n: [0, 0, -1], color: "#0046ad", rot: [0, Math.PI, 0] }, // B blue
] satisfies Face[];
