import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="relative w-[150px] h-[250px] mx-auto my-8">
        <motion.div
          className="absolute top-[20%] left-[45%] w-[10%] h-[60%] bg-gradient-to-t from-gray-300 to-silver shadow-lg"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[10%] left-[40%] w-[20%] h-[80%] rounded-full bg-cyan-500 opacity-30 blur-md"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[25%] left-[42.5%] w-[15%] h-[50%] rounded-full border-2 border-cyan-400"
          animate={{ rotate: 179 }}
          transition={{
            repeat: Infinity,
            duration: 0.85,
            ease: [0.2, 0.8, 0.9, 0.1],
          }}
        />
        <div className="absolute top-[80%] left-[40%] w-[20%] h-[10%] bg-gray-600 rounded-sm" />
        <div className="absolute top-[85%] left-[35%] w-[30%] h-[5%] bg-gray-800 rounded-sm" />
      </div>

      <div className="absolute bottom-20 text-white text-xl font-extrabold animate-pulse tracking-wider">
        Charging the Blade...
      </div>

      <style>{`
        .shadow-lg {
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }
        .blur-md {
          filter: blur(8px);
        }
      `}</style>
    </div>
  );
};

export default Loader;