import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { ReactNode, useState } from "react";
import Slider, { Settings } from "react-slick";

interface SliderSectionProps {
  title: string;
  items: any[];
  renderCardContent: (item: any, isHovered: boolean) => ReactNode;
  renderFooter?: (item: any, isHovered: boolean) => ReactNode;
  sliderSettings?: Partial<Settings>;
}

const NextArrow = ({
  onClick,
  currentSlide,
  slideCount,
  slidesToShow,
}: any) => {
  if (currentSlide >= slideCount - slidesToShow) return null;
  return (
    <button
      onClick={onClick}
      className="absolute right-[60px] top-1/2 -translate-y-1/2 translate-x-full p-2 rounded-full bg-pink-600 hover:bg-gray-800 transition-colors"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );
};

const PrevArrow = ({ onClick, currentSlide }: any) => {
  if (currentSlide === 0) return null;
  return (
    <button
      onClick={onClick}
      className="absolute left-[60px] top-1/2 -translate-y-1/2 -translate-x-full p-2 rounded-full bg-pink-600 hover:bg-gray-800 transition-colors z-10"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
};

const defaultSettings: Settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1366, settings: { slidesToShow: 3 } },
    { breakpoint: 886, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const SliderSection: React.FC<SliderSectionProps> = ({
  title,
  items,
  renderCardContent,
  renderFooter,
  sliderSettings = {},
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const settings = { ...defaultSettings, ...sliderSettings };

  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button className="text-purple-400 hover:text-purple-300 flex items-center">
          See all
          <svg
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {items.map((item) => (
            <motion.div key={item.id} className="px-2 h-full">
              <div
                className="bg-[#1a1a1a] rounded-xl overflow-hidden relative h-full flex flex-col"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative w-full h-[180px] aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-white font-medium text-lg mb-4 truncate">
                    {item.name}
                  </h3>
                  {renderCardContent(item, hoveredId === item.id)}
                  {renderFooter && (
                    <div className="mt-4">
                      {renderFooter(item, hoveredId === item.id)}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
