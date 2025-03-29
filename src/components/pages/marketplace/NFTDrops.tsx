
import { SliderSection } from "@/components/atoms";
import { NFTDropMockData } from "@/data/marketplace";

const NFTDrops: React.FC = () => {
  return (
    <SliderSection
      title="NFT Drops Calendar"
      items={NFTDropMockData}
      renderCardContent={(item) => (
        <div className="grid grid-cols-3 gap-4 text-sm mb-4">
          <div>
            <div className="text-gray-500 text-[12px] mb-1">PRICE</div>
            <div className="text-white">
              {item.price} {item.currency}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-[12px] mb-1">ITEMS</div>
            <div className="text-white">{item.items}</div>
          </div>
          <div>
            <div className="text-gray-500 text-[12px] mb-1">MINTED</div>
            <div className="text-white">{item.minted}</div>
          </div>
        </div>
      )}
      renderFooter={(item, isHovered) =>
        isHovered ? (
          <button className="w-full text-sm bg-[#e42575] text-white py-3 rounded-[6px] font-medium hover:bg-[#d11f6b] transition-colors">
            Mint
          </button>
        ) : (
          <div className="flex items-center justify-between p-3 bg-slate-600/50 rounded-[6px]">
            <div className="flex items-center">
              {item.status === "Live" && (
                <>
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                  <span className="text-green-400 text-sm">Live</span>
                </>
              )}
            </div>
            <div className="text-gray-400 text-sm">
              {item.type === "ends" ? "ends: " : "starts: "}
              {item.type === "ends" ? item.endsIn : item.startsIn}
            </div>
          </div>
        )
      }
    />
  );
};

export default NFTDrops;
