import { memo } from "react";
import { motion } from "framer-motion";
import InstantSellCard from "./InstantSellCard";

interface NFTGridProps {
  nfts: any[];
  onSelect: (id: string) => void;
  selectedItems: string[];
}

const NFTGrid = memo(({ nfts, onSelect, selectedItems }: NFTGridProps) => {
  if (!nfts.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-400">No items found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <InstantSellCard />
      {nfts.map((nft) => (
        <motion.div
          key={nft.id}
          className={`bg-[#1c1c28] rounded-[10px] overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] ${
            selectedItems.includes(nft.id) ? "ring-2 ring-purple-500" : ""
          }`}
          onClick={() => onSelect(nft.id)}
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <img
              src={nft.image || "/placeholder.svg"}
              alt={`NFT #${nft.tokenId}`}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div className="p-3">
            <div className="flex justify-between">
              <div className="text-sm">#{nft.tokenId}</div>
              <div className="text-sm right-2 bg-gray-700 px-2 py-1 rounded">
                {nft.rarity}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">{nft.price} ETH</div>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Last {nft.lastPrice} ETH
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

NFTGrid.displayName = "NFTGrid";

export default NFTGrid;
