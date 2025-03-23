
import { SliderSection } from "@/components/atoms";
import { rareAndExoticMockData } from "@/data/marketplace";
const RareAndExotic: React.FC = () => {
  return (
    <SliderSection
      title="Rare & Exotic Sats"
      items={rareAndExoticMockData}
      renderCardContent={(item) => (
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-purple-500 text-xs cursor-pointer">
            {item.status}
          </div>
        </div>
      )}
    />
  );
};

export default RareAndExotic;
