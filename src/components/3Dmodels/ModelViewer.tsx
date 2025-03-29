import { useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { TextureLoader, AnimationMixer, MeshStandardMaterial } from "three";

interface Props {
  folder: string;
  file: string;
  textures?: any;
}

export default function ModelViewer({ folder, file, textures = {} }: Props) {
  const group = useRef(null);
  const model = useLoader(FBXLoader, `/models/${folder}/${file}`);
  const mixer = useRef<AnimationMixer>(null);
  const textureLoader = new TextureLoader();
  const loadedTextures: any = {};

  Object.entries(textures).forEach(([key, textureFile]) => {
    loadedTextures[key] = textureLoader.load(
      `/models/${folder}/${textureFile}`
    );
  });

  useEffect(() => {
    model.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({ ...loadedTextures });
        child.castShadow = true;
      }
    });

    if (model.animations.length > 0) {
      mixer.current = new AnimationMixer(model);
      const action = mixer.current.clipAction(model.animations[0]);
      action?.play();
    }

    model.position.set(0, -0.8, 0);
    model.rotation.y = Math.PI;
  }, [model]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <group ref={group}>
      <primitive object={model} scale={0.007} />
    </group>
  );
}
