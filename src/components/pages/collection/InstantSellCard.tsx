import { Zap } from "lucide-react";

const InstantSellCard = () => {
  return (
    <div className="relative rounded-[10px] overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      <div
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundImage: "url('assets/image/fortnight.jpg')" }}
      ></div>
      <div className="relative p-4 flex flex-col items-center justify-center h-full bg-[#1c1c28]/80">
        <Zap size={48} className="w-8 h-8 mb-2 text-white" />
        <h3 className="text-xl font-bold mb-1 text-white">Instant Sell</h3>
        <div className="text-2xl font-bold mb-4 text-white">-- ETH</div>

        <button className="w-fit bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-[8px] font-medium mb-4">
          Sell Now
        </button>
        <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
          View All Offers
        </a>
      </div>
    </div>
  );
};

export default InstantSellCard;
