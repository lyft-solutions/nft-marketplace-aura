import { useRef } from "react";
import { motion } from "framer-motion";
import ModelViewer from "../../3Dmodels/ModelViewer";
import { CharacterDisplayProps } from "@/types/games";


const CharacterDisplay = ({ username }: CharacterDisplayProps) => {
  const characterRef = useRef<HTMLDivElement>(null);

  const characterAnimation = {
    idle: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        className="absolute top-[-30px] -translate-x-1/2 z-20 flex items-center space-x-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold">
          ⭐
        </div>
        <span className="text-white font-bold">{username}</span>
      </motion.div>

      <motion.div
        ref={characterRef}
        className="relative z-10 character-container"
        variants={characterAnimation}
        animate="idle"
      >
        <div className="w-[150px] h-[300px] md:w-[200px] md:h-[400px] flex items-center justify-center character-inner-container">
          <div className="w-full h-full bg-transparent relative">
            <img
              src="/assets/image/char.png"
              className="w-full h-full object-cover character"
            />
            {/* <ModelViewer /> */}
          </div>
        </div>
      </motion.div>

      <div className="absolute top-1/2 left-[-50px] -translate-y-1/2 flex space-x-8">
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border-2 border-white/20 flex items-center justify-center text-white">
          +
        </button>
      </div>

      <div className="absolute top-1/2 right-[-50px] -translate-y-1/2 flex space-x-8">
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border-2 border-white/20 flex items-center justify-center text-white">
          +
        </button>
      </div>
    </div>
  );
};

export default CharacterDisplay;
