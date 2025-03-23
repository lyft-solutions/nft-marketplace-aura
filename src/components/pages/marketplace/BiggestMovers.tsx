
import { SliderSection } from "@/components/atoms";
import { biggestMoversMockData } from "@/data/marketplace";

const BiggestMovers: React.FC = () => {
  return (
    <SliderSection
      title="Biggest Movers in NFTs"
      items={biggestMoversMockData}
      renderCardContent={(item) => (
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div>
            <div className="text-gray-500 text-[12px] mb-1">FLOOR PRICE</div>
            <div className="text-white">
              {item.price} {item.currency}
            </div>
          </div>
          <div>
            <div className="text-gray-500 text-[12px] mb-1">1d VOL. CHANGE</div>
            <div className="text-green-400">{item.minted}</div>
          </div>
        </div>
      )}
    />
  );
};

export default BiggestMovers;