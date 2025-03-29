import { Suspense, useEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader, AnimationMixer } from "three";
interface Props {
  folder: string;
  file: string;
  textures?: any;
}

const Character = ({ folder, file, textures = {} }: Props) => {
  const group = useRef(null);
  const model = useLoader(FBXLoader, `/models/${folder}/${file}`);
  const mixer = useRef<AnimationMixer>(null);
  const textureLoader = new TextureLoader();
  const loadedTextures: any = {};

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  Object.entries(textures).forEach(([key, textureFile]) => {
    loadedTextures[key] = textureLoader.load(
      `/models/${folder}/${textureFile}`
    );
  });

  useEffect(() => {
    model.traverse((child: any) => {
      if (child.isMesh) {
        child.geometry.computeBoundingBox();
        // #TODO - add character with textures
        // child.material = new MeshStandardMaterial({ ...loadedTextures });
        // child.castShadow = true;
        if (child.material) {
          child.material.transparent = false;
          child.material.opacity = 1;
          child.material.needsUpdate = true;
        }
      }
    });
    if (model.animations.length > 0) {
      mixer.current = new AnimationMixer(model);
      const action = mixer.current.clipAction(model.animations[0]);
      action?.play();
    }
    model.updateMatrixWorld(true);
  }, [model]);

  return (
    <group ref={group}>
      <primitive object={model} scale={0.029} position={[0, 2.5, 0]} />;
    </group>
  );
};

function ModelViewer({ folder, file, textures = {} }: Props) {
  const backgroundTexture = new TextureLoader().load("/assets/background.jpg");

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "visible",
        position: "relative",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "calc(100vh - 0px)" }}
        camera={{ position: [0, 10, 30], fov: 60, near: 0.001, far: 1000 }}
        onCreated={({ scene }) => {
          scene.background = backgroundTexture;
        }}
      >
        <Suspense
          fallback={
            <mesh>
              <boxGeometry />
              <meshStandardMaterial color="blue" />
            </mesh>
          }
        >
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
          <Character folder={folder} file={file} textures={textures} />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            minDistance={0.5}
            maxDistance={50}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ModelViewer;
