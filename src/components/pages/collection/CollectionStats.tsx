const stats = [
  { label: "Floor Price", value: "38.39 ETH" },
  { label: "Top Offer", value: "--" },
  { label: "24h Vol", value: "90.39 ETH" },
  { label: "24h Sales", value: "2" },
  { label: "All Vol", value: "1.3M ETH" },
  { label: "Avg. Sale (24h)", value: "45.2 ETH" },
  { label: "Listed / Supply", value: "1.1K / 9,996", percent: "10.82%" },
  { label: "Owners", value: "4,008" },
];

const CollectionStats = () => {
  return (
    <div className="flex-1 md:grid grid-cols-2 md:grid-cols-4 gap-3 hidden">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <div className="text-xs text-gray-400">{stat.label}</div>
          <div className="font-medium text-[14px] whitespace-nowrap">
            {stat.value}
            {stat.percent && (
              <span className="text-sm text-gray-400 ml-1 ">
                {stat.percent}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionStats;
