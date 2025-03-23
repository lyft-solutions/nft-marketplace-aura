import React from "react";
import { Camera, CircleChevronLeft, MessageSquare, Smile } from "lucide-react";
import { motion } from "framer-motion";
import { BottomNavProps } from "@/types/games";

const NavButton: React.FC<{ icon: React.ReactNode; label?: string }> = ({
  icon,
  label,
}) => (
  <button className="px-4 py-2 rounded flex items-center justify-center gap-2 bg-white/30 backdrop-blur-md">
    {icon}
    {label && (
      <span className="text-black text-sm font-bold hidden lg:block">
        {label}
      </span>
    )}
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ level }) => {
  return (
    <motion.div
      className="p-3 flex items-end justify-between absolute bottom-0 left-0 right-0 z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <div className="flex space-x-2 bg-black/50 backdrop-blur-sm p-3 rounded-full">
        <Camera className="text-white w-6 h-6 md:w-8 md:h-8" />
      </div>

      <div className="flex flex-wrap md:flex-row lg:flex-col items-center lg:items-end gap-2 md:gap-4 w-full md:w-auto justify-end lg:justify-center">
        <div className="bg-white/30 backdrop-blur-md rounded lg:rounded-[15px] p-[10px] flex items-center justify-center w-fit">
          <div className="lg:border-[6px] lg:border-gray-50/30 lg:rounded-full lg:w-[65px] lg:h-[65px] flex gap-2 lg:gap-0 lg:flex-col items-center justify-center text-black text-xs lg:text-sm font-bold leading-[14px]">
            <span className="text-gray-50/40">LVL</span>
            <span>{level}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <NavButton
            icon={<MessageSquare size={16} className="text-black" />}
            label="CHAT"
          />
          <NavButton
            icon={<Smile size={16} className="text-black" />}
            label="EMOTE"
          />
          <NavButton
            icon={
              <CircleChevronLeft size={16} className="text-black lg:hidden" />
            }
            label="BACK"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BottomNav;
