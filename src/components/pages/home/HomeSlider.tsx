import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeSlider } from "@/data/home";


const FortniteSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % homeSlider.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100px] md:h-[170px] rounded-[4px] md:rounded-[15px] overflow-hidden home-slider-banner">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {homeSlider[currentSlide].type === "image" ? (
            <img
              src={homeSlider[currentSlide].src}
              alt={homeSlider[currentSlide].title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={homeSlider[currentSlide].src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-5 left-4 text-white font-bold">
            <div className="text-sm md:text-lg">
              {homeSlider[currentSlide].title}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-2 left-4 flex space-x-1">
        {homeSlider.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FortniteSlider;
