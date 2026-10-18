import { Canvas } from "@react-three/fiber";

export default function App() {
    return (
        <>
            <div className="relative w-full h-dvh">
                <Canvas
                    camera={{ position: [6, 14, 14], fov: 45 }}
                    dpr={[1, 1.5]}
                ></Canvas>
            </div>
        </>
    );
}
