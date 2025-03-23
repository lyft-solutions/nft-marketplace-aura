import React, { useState } from "react";
import { LayoutGrid, List, Star } from "lucide-react";
import { useMarketStore } from "@/store/marketplaceStore";
import { formatCurrency } from "@/utils/format";
import { motion } from "framer-motion";

const displayOptions = [10, 25, 50, 100];
const mockData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Collection ${i + 1}`,
  floorPrice: Math.random() * 5,
  volume: Math.random() * 500,
  change: (Math.random() - 0.5) * 10,
  sales: Math.floor(Math.random() * 100),
  pending: Math.floor(Math.random() * 50),
  listed: Math.floor(Math.random() * 20),
  last10Min: (Math.random() - 0.5) * 5,
}));

const TopCollections = () => {
  const { displayCount, setDisplayCount, showCrypto } = useMarketStore();
  const [isGridView, setIsGridView] = useState(false);
  const visibleData = mockData.slice(0, displayCount);

  return (
    <div className="bg-background-card overflow-hidden">
      {isGridView ? (
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {visibleData.map((collection) => (
            <motion.div
              key={collection.id}
              className="bg-gray-900 rounded-lg shadow-lg p-4 hover:bg-gray-800"
            >
              <h3 className="text-white font-medium">{collection.name}</h3>
              <p className="text-gray-400">
                Floor: {formatCurrency(collection.floorPrice, showCrypto)}
              </p>
              <p className="text-gray-400">
                Volume: {formatCurrency(collection.volume, showCrypto)}
              </p>
              <p
                className={`font-bold ${
                  collection.change >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {collection.change.toFixed(2)}%
              </p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="w-full overflow-x-auto">
        <motion.table
          layout
          className="w-full border-collapse min-w-[900px]" // Set a min-width to trigger scrolling on small screens
        >
          <thead>
            <tr className="bg-gray-800 rounded-[4px]">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 whitespace-nowrap">
                <Star className="w-4 h-4 text-yellow-500" />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 whitespace-nowrap">
                Collection
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 whitespace-nowrap">
                Floor Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 whitespace-nowrap">
                Floor 1d %
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 whitespace-nowrap">
                Volume
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 whitespace-nowrap">
                Sales
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 whitespace-nowrap">
                Pending
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 whitespace-nowrap">
                Listed
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 whitespace-nowrap">
                Last 10 min
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((collection) => (
              <motion.tr
                key={collection.id}
                className="hover:bg-gray-800"
                whileHover={{ backgroundColor: "#2D3748" }} // Optional: enhance hover with framer-motion
              >
                <td className="px-6 py-3 text-white">
                  <Star className="w-4 h-4 text-yellow-500" />
                </td>
                <td className="px-6 py-3 text-white whitespace-nowrap">
                  {collection.name}
                </td>
                <td className="px-6 py-3 text-right text-gray-400 whitespace-nowrap">
                  {formatCurrency(collection.floorPrice, showCrypto)}
                </td>
                <td
                  className={`px-6 py-3 text-right font-bold whitespace-nowrap ${
                    collection.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {collection.change.toFixed(2)}%
                </td>
                <td className="px-6 py-3 text-right text-gray-400 whitespace-nowrap">
                  {formatCurrency(collection.volume, showCrypto)}
                </td>
                <td className="px-6 py-3 text-right text-gray-400 whitespace-nowrap">
                  {collection.sales}
                </td>
                <td className="px-6 py-3 text-right text-gray-400 whitespace-nowrap">
                  {collection.pending}
                </td>
                <td className="px-6 py-3 text-right text-gray-400 whitespace-nowrap">
                  {collection.listed}
                </td>
                <td
                  className={`px-6 py-3 text-right font-bold whitespace-nowrap ${
                    collection.last10Min >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {collection.last10Min.toFixed(2)}%
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Show top:</span>
          <div className="bg-gray-800 rounded-[4px] p-1 flex w-fit">
            {displayOptions.map((option) => (
              <button
                key={option}
                onClick={() => setDisplayCount(option)}
                className={`px-3 py-1 rounded-[4px] text-sm font-medium transition-colors ${
                  displayCount === option
                    ? "bg-purple-500 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="p-2 bg-gray-800 rounded-[4px] hover:bg-gray-700"
            >
              {isGridView ? (
                <List className="w-5 h-5 text-white" />
              ) : (
                <LayoutGrid className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollections;
