import { motion } from "framer-motion";
import { Globe, Twitter, Lock, Bitcoin, Timer } from "lucide-react";

 function GoToLaunchpad() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white p-4 md:p-6 lg:p-12">
      <div className="max-w-5xl w-full border border-gray-800 p-2 md:p-4 lg:p-6 shadow rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden h-full"
          >
            <motion.img
              src="https://img-cdn.magiceden.dev/rs:fill:640:640:0:0/plain/https%3A%2F%2Fmedia.cdn.magiceden.dev%2Flaunchpad%2F%2F6742c0c9-ccf0-4824-9caf-b045cfb72191"
              alt="OX999 NFT"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <div className="flex items-center justify-between">
              <motion.h1
                className="text-xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                OX999
              </motion.h1>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center text-sm gap-2 text-gray-400 bg-gray-800 rounded-[4px] py-1 px-2">
                <span>TOTAL SUPPLY 999</span>
              </div>

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800 rounded-[4px] py-1 px-2"
              >
                <Globe className="w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors bg-gray-800 rounded-[4px] py-1 px-2"
              >
                <Twitter className="w-4" />
              </motion.a>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 text-xs md:text-sm mt-4"
            >
              999 unique OX999 pieces inscribed on Bitcoin, inspired by the
              natural spirals found in galaxies, whirlpools, and the unseen
              rhythms of life. A fusion of motion, form, and permanence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="p-2 md:p-4 border border-gray-800 rounded-[6px] mt-8 shadow-lg bg-gray-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Lock className="w-3" />
                    <span className="text-xs md:text-sm">Whitelist</span>
                  </div>
                  <span className="text-purple-500 text-xs md:text-sm">ENDED</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="w-3" />
                    <span className="text-xs md:text-sm" >0.000999 BTC (99900 sats)</span>
                  </div>
                  <span className="text-xs md:text-sm">1 PER WALLET</span>
                </div>
              </div>

              <div className="p-2 md:p-4 border border-purple-500 rounded-[6px] mt-8 shadow-lg bg-gray-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Timer className="w-3 text-purple-500" />
                    <span className="bg-gray-800 rounded-[4px] py-1 px-2 text-xs">
                      Public
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                   
                    <span className="text-xs md:text-sm text-purple-500">ENDS IN</span>
                    <span className="bg-gray-800 rounded-[4px] py-1 px-2 font-bold text-xs md:text-sm">06</span>
                    <span className="bg-gray-800 rounded-[4px] py-1 px-2 font-bold text-xs md:text-sm">00</span>
                    <span className="bg-gray-800 rounded-[4px] py-1 px-2 font-bold text-xs md:text-sm">58</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bitcoin className="w-3" />
                    <span className="text-xs md:text-sm">0.0001665 BTC (16650 sats)</span>
                  </div>
                  <span className="text-xs md:text-sm">UNLIMITED</span>
                </div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-14 w-full bg-purple-500 text-white py-2 rounded-[6px] text-sm hover:bg-purple-700 transition-colors"
            >
              Connect Wallet
            </motion.button>

            <div>
              <motion.div
                className="mt-4 w-full h-[6px] bg-gray-800 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.div
                  className="h-full bg-purple-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "72%" }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </motion.div>
              <div className="flex justify-between items-center mt-3">
                <span className="text-xs">Total Minted</span>
                <span className="text-xs">72% (729/999)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GoToLaunchpad;
