import { useState } from "react";
import { motion } from "framer-motion";
import {
  BottomActionPanel,
  CharacterDisplay,
  GameModePanel,
} from "@/components/pages/home";
import { Meta, SafeAreaWrapper } from "@/components/atoms";
import { homeMeta } from "@/data/home";

const HomePage = () => {
  const [gameMode, setGameMode] = useState("PLAY GAME");
  const [ranked, setRanked] = useState(false);
  const [solo, setSolo] = useState(true);

  return (
    <>
      <Meta meta={homeMeta} />
      <div className="relative h-[100vh] w-full overflow-hidden bg-[url(/assets/image/background1.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/5 to-black/60"></div>
        <SafeAreaWrapper>
          <div className="h-full flex flex-col md:flex-row mt-3">
            <div className="w-[215px] sm:w-[250px] md:w-[350px] px-3 md:py-8 md:pl-8 home-slider-container">
              <GameModePanel
                gameMode={gameMode}
                ranked={ranked}
                solo={solo}
                onRankedChange={() => setRanked(!ranked)}
                onSoloChange={() => setSolo(!solo)}
              />
            </div>
            <div className="flex-1 flex items-center justify-center character-outer-container">
              <CharacterDisplay username="God killer" />
            </div>
            <div className="hidden md:block w-1/4"></div>
          </div>
          <div className="absolute mobile-button-container px-3 block md:hidden">
            <div className="bg-black/40 backdrop-blur-lg p-3 rounded-[4px] shadow-lg absolute">
              <div className="text-white font-bold text-lg md:text-3xl tracking-wide text-center uppercase whitespace-nowrap">
                Battle Royal
              </div>
              <motion.button
                className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black py-1 px-3 rounded-[4px] font-bold  transition-all shadow-md w-full"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                PLAY
              </motion.button>
            </div>
          </div>
        </SafeAreaWrapper>
      </div>
      <BottomActionPanel level={35} />
    </>
  );
};

export default HomePage;
