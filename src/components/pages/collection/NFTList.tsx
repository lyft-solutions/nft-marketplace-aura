import { memo } from "react";
import { motion } from "framer-motion";

interface NFTListProps {
  nfts: any[];
  onSelect: (id: string) => void;
  selectedItems: string[];
}

const NFTList = memo(({ nfts, onSelect, selectedItems }: NFTListProps) => {
  if (!nfts.length) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-400">No items found</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {nfts.map((nft) => (
        <motion.div
          key={nft.id}
          className={`bg-[#1c1c28] rounded-lg overflow-hidden cursor-pointer ${
            selectedItems.includes(nft.id) ? "ring-1 ring-purple-500" : ""
          }`}
          onClick={() => onSelect(nft.id)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center p-3">
            <div className="w-16 h-16 mr-4">
              <img
                src={nft.image || "/placeholder.svg"}
                alt={`NFT #${nft.tokenId}`}
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <div className="font-medium">#{nft.tokenId}</div>
                  <div className="text-sm text-gray-400">
                    Rarity: {nft.rarity}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-medium">{nft.price} ETH</div>
                  <div className="text-sm text-gray-400">
                    Last {nft.lastPrice} ETH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
});

NFTList.displayName = "NFTList";

export default NFTList;
