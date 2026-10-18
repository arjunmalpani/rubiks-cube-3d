import { Environment, Grid, OrbitControls } from "@react-three/drei";
import Cube from "../cube/rendering/cube";

export default function Experience() {
  return (
    <>
      {/*Lighiting and Envirionment*/}
      <Environment preset="city" />
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, 20, 10]}
        intensity={2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
        shadow-camera-near={1}
        shadow-camera-far={200}
      />
      {/*Cube and Group*/}
      <mesh position={[14, 1, 0]}>
        <boxGeometry args={[1, 2, 3]} />
        <meshPhysicalMaterial
          color={"hotpink"}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.8}
          transmission={0.9}
          ior={1.4}
          thickness={0.5}
        />
      </mesh>
      <Cube />
      {/*Shadow Platform and Grid*/}
      <mesh position={[0, 0.01, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
      <Grid
        position={[0, 0, 0]}
        cellColor="#1b1b1b"
        sectionColor="#1b1b1b"
        fadeDistance={100}
        fadeStrength={10}
        infiniteGrid
      />

      {/*Orbits and Camera Controls*/}
      <OrbitControls />
    </>
  );
}
