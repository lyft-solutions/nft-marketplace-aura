import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { GameModePanelProps } from "@/types/games";
import { HomeSlider } from ".";

const StatusText: React.FC<{
  label: string;
  value: string;
  isActive: boolean;
}> = ({ label, value, isActive }) => (
  <div className="text-white font-bold flex justify-center items-center text-lg md:text-xl">
    {label}
    <span className={`ml-2 ${isActive ? "text-white-400" : "text-red-400"}`}>
      {value}
    </span>
  </div>
);

const downloadLink =
  "https://drive.google.com/file/d/1jI183eLe88lQUlrED8x4tNfFzMGgW_wx/view";

const GameModePanel: React.FC<GameModePanelProps> = ({
  gameMode,
  ranked,
  solo,
  onRankedChange,
  onSoloChange,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className="flex flex-col space-y-6 h-[30vh] md:h-[85vh] relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-xl w-full max-w-md shadow-lg home-slider-border">
        <HomeSlider />
      </div>

      <div className="bg-black/40 backdrop-blur-lg p-3 md:p-6 md:py-8 rounded-xl shadow-lg absolute bottom-3 w-full hidden md:block">
        <div className="text-white font-bold text-lg md:text-3xl tracking-wide text-center uppercase">
          {gameMode}
        </div>
        {/* 
        <div className="rounded-xl p-1 bg-pink-400/80 mt-2 md:mt-6 mb-4 shadow-md">
          <StatusText
            label="RANKED:"
            value={ranked ? "ON" : "OFF"}
            isActive={ranked}
          />
          <StatusText
            label=""
            value={solo ? "SOLO" : "SQUAD"}
            isActive={true}
          />
        </div> */}

        <motion.button
          className="relative bg-yellow-400 hover:bg-yellow-500 text-white py-2 md:py-4 rounded-xl font-bold text-lg md:text-xl tracking-wide w-full transition-all shadow-md mt-3 cursor-pointer"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log("I am not able to click")
            window.open(downloadLink, "_blank");
          }}
        >
          PLAY
        </motion.button>
      </div>
    </motion.div>
  );
};

export default GameModePanel;
