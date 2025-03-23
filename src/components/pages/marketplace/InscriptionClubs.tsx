
import { SliderSection } from "@/components/atoms";
import { inscriptionClubMockData } from "@/data/marketplace";

const InscriptionClubs: React.FC = () => {
  return (
    <SliderSection
      title="Inscription Clubs"
      items={inscriptionClubMockData}
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

export default InscriptionClubs;
