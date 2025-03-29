import  { JSX, useState } from "react";
import {
  Shapes,
  Bitcoin,
  BadgeDollarSign,
  Hexagon,
  Grid,
  Layers,
  Beaker,
  TestTube,
  Network,
  Waves,
  ChevronDown,
  Diamond,
} from "lucide-react";
import { useMarketStore } from "@/store/marketplaceStore";
import { chainsMockData } from "@/data/marketplace";

const getIcon = (iconKey: string) => {
  const icons: Record<string, JSX.Element | null> = {
    shapes: <Shapes size={18} />,
    bitcoin: <Bitcoin size={18} />,
    badgeDollar: <BadgeDollarSign size={18} />,
    hexagon: <Hexagon size={18} />,
    grid: <Grid size={18} />,
    layers: <Layers size={18} />,
    beaker: <Beaker size={18} />,
    testTube: <TestTube size={18} />,
    network: <Network size={18} />,
    waves: <Waves size={18} />,
    ethereum: <Diamond size={18} />,
  };
  return icons[iconKey] || null;
};

export default function ChainTabs() {
  const { selectedChain, setSelectedChain } = useMarketStore();
  console.log("selectedChain", selectedChain);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (

    <nav className="border border-gray-800 bg-gray-900 text-white py-2 flex items-center space-x-4 relative w-full mt-2 rounded-[6px] px-2 md:px-0">
      <div className="relative block sm:hidden w-[100%]">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between px-4 py-2 bg-gray-800 rounded-[6px] w-[100%]"
        >
          <div className="flex items-center gap-2">
          {getIcon(selectedChain.iconKey)}
          <span>{selectedChain.name}</span>
          </div>
          
          <ChevronDown size={18} />
        </button>
        {isDropdownOpen && (
          <ul className="absolute left-0 mt-2 bg-gray-800 text-white shadow-md z-50 w-[100%] rounded-[6px]">
            {chainsMockData.map((chain, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setSelectedChain(chain);
                  setIsDropdownOpen(false);
                }}
              >
                {getIcon(chain.iconKey)}
                <span>{chain.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="sm:flex space-x-4 hidden">
        {chainsMockData.map((chain, index) => (
          <button
            key={index}
            className={`p-2 rounded-[4px] transition-all flex items-center space-x-2 ${
              selectedChain.slug === chain.slug
                ? "bg-gray-600 px-3 py-2"
                : "bg-transparent p-2"
            }`}
            onClick={() => setSelectedChain(chain)}
          >
            {getIcon(chain.iconKey)}
            {selectedChain.slug === chain.slug && <span>{chain.name}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
}
