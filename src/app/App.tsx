import { Canvas } from "@react-three/fiber";
import Experience from "../scene/experience";
import Overlay from "../ui/overlay";

export default function App() {
    return (
        <>
            <div className="relative w-full h-dvh">
                <Canvas
                    camera={{ position: [6, 14, 14], fov: 45 }}
                    dpr={[1, 1.5]}
                >
                    <Experience />
                </Canvas>
                <Overlay />
            </div>
        </>
    );
}
