// CharacterScene.tsx
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import CharacterDisplay from "./CharacterDisplay";
import { motion } from "framer-motion";
import { characters } from "@/data/mockdata";

const CharacterScene = () => {
  const [index, setIndex] = useState(0);
  const character = characters[index];

  const next = () => setIndex((prev) => (prev + 1) % characters.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? characters.length - 1 : (prev - 1) % characters.length
    );

  return (
    <div className="relative h-full w-full">
      {/* 3D Viewer Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] md:w-[500px] h-[400px] md:h-[600px]">
          <Canvas
            camera={{ position: [0, 2, 5], fov: 50 }}
            style={{ width: "100%", height: "100%" }}
          >
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 5, 5]} intensity={1.2} />
            <Environment preset="studio" />
            <CharacterDisplay index={index} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Character Name Display */}
        <motion.div
          className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-yellow-400 flex items-center justify-center text-[10px] font-bold">
            ⭐
          </div>
          <span className="text-white font-bold text-xs md:text-lg tracking-wide">
            {character?.name ?? "Unknown"}
          </span>
        </motion.div>

        {/* Navigation Arrows - Closer to Center */}
        <div className="absolute top-1/2 left-1 md:left-4 -translate-y-1/2 z-20">
          <button
            onClick={prev}
            className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/50 border-2 border-white/20 flex items-center justify-center text-white"
          >
            ←
          </button>
        </div>
        <div className="absolute top-1/2 right-1 md:right-4 -translate-y-1/2 z-20">
          <button
            onClick={next}
            className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-black/50 border-2 border-white/20 flex items-center justify-center text-white"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterScene;
