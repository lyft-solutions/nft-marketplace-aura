import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  useGLTF,
} from "@react-three/drei";

function Character() {
  const { scene } = useGLTF("assets/models/sample.glb");

  return <primitive object={scene} scale={4.8} />;
}

export default function CharacterViewer() {
  return (
    <div className="w-full h-full">
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 2, 6], fov: 50, near: 0.1, far: 1000 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={2.0} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2.0}
            castShadow={false}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <pointLight position={[-5, 5, 5]} intensity={1.5} />
          <Environment preset="studio" />

          <Character />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
          />
          <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

