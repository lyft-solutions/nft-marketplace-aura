import React, { useState } from "react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { Search, Menu, X, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { name: "GAME", path: "/" },
    { name: "MARKETPLACE", path: "/locker" },
    { name: "SENTRIES", path: "/shop", comingSoon: true },
    { name: "MINTS", path: "/passes" },
    { name: "QUESTS", path: "/quests" },
    { name: "REMOVE", path: "/compete" },
    { name: "LEADERBOARD", path: "/career" },
  ];

  const matchRoute = useMatchRoute();

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { width: "200px", opacity: 1, transition: { duration: 0.3 } },
  };

  const handleLogout = () => {
    console.log("Logged out");
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`px-1 md:px-4 py-3 flex justify-between items-center absolute inset-x-0 top-0 z-20`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-4 w-full justify-between">
        <div className="flex items-center space-x-2">
          <motion.button
            className="p-2 text-white"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            whileHover={{ scale: 1.1 }}
          >
            <Search size={20} className={"text-white"} />
          </motion.button>
          <AnimatePresence>
            {isSearchOpen && (
              <motion.input
                type="text"
                placeholder="Search..."
                className={`px-3 py-1 rounded-md text-sm ${"bg-gray-800 text-white"}`}
                variants={searchVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            )}
          </AnimatePresence>

          {navItems.map((item) => {
            const isActive = matchRoute({ to: item.path });
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-1.5 rounded-[8px] text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-pink-600 text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                {item.comingSoon && (
                  <span className="ml-2 text-xs text-gray-400">
                    (Coming Soon)
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className={"text-white font-bold"}>3,150</span>
          </div>
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full relative">
            <img
              src="assets/image/fortnite-event-1.webp"
              alt="CryptoPunks"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="bg-purple-500 p-1 rounded-full absolute top-[-5px] right-[-4px]">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                />
              </svg>
            </div>
            <div className="w-3 h-3 rounded-full bg-green-400 absolute animate-pulse bottom-[2px] right-1"></div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between w-full">
        <motion.button
          className="p-2 text-white"
          onClick={() => setIsMobileMenuOpen(true)}
          whileHover={{ scale: 1.1 }}
        >
          <Menu size={24} className={"text-white"} />
        </motion.button>
        <div className="flex items-center space-x-2 pr-2">
          <div className="w-10 h-10 rounded-full relative">
            <img
              src="assets/image/fortnite-event-1.webp"
              alt="CryptoPunks"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="w-2 h-2 rounded-full bg-green-400 absolute animate-pulse bottom-[2px] right-1"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 z-30 flex flex-col justify-between"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div>
              <div className="flex justify-between p-4">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <X size={24} className="text-white" />
                </motion.button>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-bold">3,150</span>
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4 px-4 mt-3">
                <motion.div className="flex items-center space-x-2 w-full border px-2 py-2 rounded-[4px]">
                  <Search size={20} className="text-white" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="px-1 py-1 rounded-md w-full text-sm bg-transparent text-white border-none outline-none"
                  />
                </motion.div>
                {navItems.map((item) => {
                  const isActive = matchRoute({ to: item.path });
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`px-4 py-2 rounded-[4px] text-sm font-bold transition-colors w-full ${
                        isActive
                          ? "bg-pink-600 text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="p-4">
              <motion.button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 rounded-[8px] text-lg font-bold text-white  w-full"
                whileTap={{ scale: 0.95 }}
              >
                <LogOut size={20} />
                <span className="text-sm">Logout</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
