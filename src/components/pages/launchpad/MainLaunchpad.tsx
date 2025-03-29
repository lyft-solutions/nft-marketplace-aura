import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bitcoin, Timer, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import { ChainTabs } from "../marketplace";
import { NFTProject, SubTab, Tab } from "@/types/launchpad";
import { featuredProjects, liveProjects, pastProjects } from "@/data/launchpad";

function MainLaunchpad() {
  const [activeTab, setActiveTab] = useState<Tab>("live");
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("all");
  const sliderRef = React.useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  const nextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ProjectCard: React.FC<{ project: NFTProject }> = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800 rounded-xl overflow-hidden"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="relative aspect-square h-[200px] w-full"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-yellow-500 rounded-full p-1">
          <Bitcoin size={16} />
        </div>
      </motion.div>

      <div className="p-4 space-y-4">
        <h3 className="text-white font-medium text-lg mb-4 truncate">
          {project.name}
        </h3>

        <div className="grid grid-cols-3 gap-4 text-sm mb-4">
          <div>
            <div className="text-gray-500 text-[12px] mb-1">PRICE</div>
            <div className="text-white">{project.price}</div>
          </div>
          <div>
            <div className="text-gray-500 text-[12px] mb-1">ITEMS</div>
            <div className="text-white">{project.items}</div>
          </div>
          <div>
            <div className="text-gray-500 text-[12px] mb-1">MINTED</div>
            <div className="text-white">{project.minted}</div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm bg-black/45 rounded-[4px] px-2 py-2">
          {project.status.type === "live" ? (
            <>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-sm">Live</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Timer size={14} />
                <span className="text-sm">ends: {project.status.endsAt}</span>
              </div>
            </>
          ) : (
            <span className="text-gray-400 text-sm">Ended</span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <ChainTabs />
      <div className="min-h-screen text-white mt-4">
        <div className="relative w-full overflow-hidden rounded-[8px]">
          <Slider ref={sliderRef} {...sliderSettings}>
            {featuredProjects.map((project) => (
              <div key={project.id} className="relative h-[400px] md:h-[500px] w-full">
                <div className="absolute inset-0">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="relative px-6 md:px-12 h-full flex flex-col justify-end pb-6 md:pb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4 w-[90%] mx-auto"
                  >
                    <h2 className="text-xl md:text-2xl font-bold">
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className=" bg-yellow-500 rounded-full p-1">
                        <Bitcoin size={16} />
                      </div>
                      <div className="ml-3 flex items-center gap-3 bg-white/10 py-1 px-3 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-green-500">Live</span>
                        <span className="text-gray-400 text-sm">
                          ends: {project.status.endsAt}
                        </span>
                      </div>
                    </div>

                    <div className="flex md:items-center items-baseline justify-between flex-col md:flex-row">
                      <p className="text-sm text-gray-300 max-w-2xl">
                        {project.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 md:0 px-4 py-2 bg-pink-600 rounded-[4px] text-sm ont-medium hover:bg-pink-700 transition-colors"
                      >
                        Go to launchpad
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 flex items-center justify-between w-[calc(100%-1rem)] md:w-[calc(100%-2rem)]">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        <div className="p-4 md:p-8 space-y-8">
          <div className="flex gap-8 border-b border-gray-800">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`pb-4 relative ${
                activeTab === "live" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("live")}
            >
              Live & Upcoming
              {activeTab === "live" && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"
                />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`pb-4 relative ${
                activeTab === "past" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("past")}
            >
              Past
              {activeTab === "past" && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"
                />
              )}
            </motion.button>
          </div>

          <div className="flex bg-gray-700 rounded-[4px] w-fit py-1 px-2 gap-2">
            {["all", "launchpad", "openEditions"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveSubTab(tab as SubTab)}
                className={`px-2 py-1 rounded-[4px] text-sm ${
                  activeSubTab === tab
                    ? "bg-gray-800 text-white"
                    : "bg-transparent text-gray-400"
                }`}
              >
                {tab === "openEditions"
                  ? "Open Editions"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={tabVariants}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {(activeTab === "live" ? liveProjects : pastProjects).map(
                (project) => (
                  <ProjectCard key={project.id} project={project} />
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default MainLaunchpad;
