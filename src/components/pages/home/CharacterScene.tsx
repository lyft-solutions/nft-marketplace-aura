import { useState } from "react";
import CharacterDisplay from "./CharacterDisplay";
import { characters } from "@/data/mockdata";
import { motion } from "framer-motion";

const CharacterScene = () => {
  const [index, setIndex] = useState(0);
  const character = characters[index];

  const next = () => setIndex((prev) => (prev + 1) % characters.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? characters.length - 1 : (prev - 1) % characters.length
    );

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="absolute top-[30px] -translate-x-1/2 z-20 flex items-center space-x-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">
          ⭐
        </div>
        <span className="text-white font-bold">
          {character?.name ?? "Unknown"}
        </span>
      </motion.div>

      <motion.div className="relative z-10 character-container">
        <div className="w-[330px] h-[300px] md:w-[500px] lg:w-[400px] md:h-[400px] flex items-center justify-center character-inner-container">
          <div className="w-full h-full bg-transparent relative">
            <CharacterDisplay index={index} />
          </div>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-[-50px] -translate-y-1/2 flex space-x-8 custom-arrow-prev">
        <button
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border-2 border-white/20 flex items-center justify-center text-white"
          onClick={prev}
        >
          ←
        </button>
      </div>
      <div className="absolute top-1/2 right-[-50px] -translate-y-1/2 flex space-x-8 custom-arrow-next">
        <button
          onClick={next}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border-2 border-white/20 flex items-center justify-center text-white"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CharacterScene;
