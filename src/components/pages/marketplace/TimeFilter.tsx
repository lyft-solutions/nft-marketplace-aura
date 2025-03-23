import { currencyRangesMockData, timeRangesMockData } from "@/data/marketplace";
import type { TimeRange } from "@/types/marketplace";

interface TimeFilterProps {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
  showCrypto: boolean;
  onToggleCurrency: () => void;
}

const TimeFilter = ({
  selectedRange,
  onRangeChange,
  showCrypto,
  onToggleCurrency,
}: TimeFilterProps) => {
  return (
    <div className="flex items-center gap-1 md:gap-2 justify-between w-full">
      <div className="bg-gray-800 rounded-[4px] p-1 flex">
        {timeRangesMockData.map((range) => (
          <button
            key={range.value}
            onClick={() => onRangeChange(range.value)}
            className={`px-2 md:px-3 py-1 rounded-md text-xs md:text-sm font-medium transition-colors
              ${
                selectedRange === range.value
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 rounded-[4px] p-1 flex">
        {currencyRangesMockData.map((range) => (
          <button
            key={range.value}
            onClick={() => onToggleCurrency()}
            className={`px-2 md:px-3 py-1 rounded-md text-xs md:text-sm font-medium transition-colors
              ${
                selectedRange === range.value
                  ? "bg-purple-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            {range.label}
          </button>
        ))}
      </div>

      <div className="bg-gray-800 rounded-[4px] p-1 hidden md:flex">
        <button
          onClick={() => onToggleCurrency()}
          className={`px-2 md:px-3 py-1 rounded-md text-sm font-medium transition-colors text-gray-400 hover:text-white whitespace-nowrap`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default TimeFilter;
