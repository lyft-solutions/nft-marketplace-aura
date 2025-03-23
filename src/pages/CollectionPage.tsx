import React from "react";
import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Star,
  Share2,
  Search,
  ChevronDown,
  ShoppingCart,
  DollarSignIcon,
  Gauge,
  Settings,
  MessageSquare,
  Paintbrush,
  Layers,
  HandHelping,
  ChartColumn,
  Activity,
  ChartNoAxesColumn,
} from "lucide-react";
import { useNFTStore } from "@/store/nfsStore";
import {
  CollectionStats,
  NFTGrid,
  NFTList,
  PriceRangeSlider,
  ViewToggle,
} from "@/components/pages/collection";
import { fetchNFTs } from "@/data/api";

const MarketplacePage = () => {
  const {
    viewMode,
    sortOrder,
    setSortOrder,
    selectedItems,
    toggleItemSelection,
  } = useNFTStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["nfts", sortOrder, searchQuery],
      queryFn: ({ pageParam = 1 }) =>
        fetchNFTs({
          page: pageParam,
          limit: 16,
          sort: sortOrder,
          search: searchQuery,
        }),
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
    });

  const nfts = data?.pages.flatMap((page) => page.items) || [];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-0 md:py-6">
        <div className="h-60 rounded-[10px] overflow-hidden mb-10 mt-5">
          <img
            src="assets/image/collection-banner.webp"
            alt="Tekika Relics Season One"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-6 mb-4">
          <div className="flex items-center md:items-end gap-4">
            <div className="w-12 h-12 rounded-full relative">
              <img
                src="assets/image/fortnite-event-1.webp"
                alt="CryptoPunks"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="bg-purple-500 p-1 rounded-full absolute top-[-5px] right-[-4px]">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-l font-bold">CryptoPunks</h1>

                <button className="text-gray-400 hover:text-white">
                  <Star className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-2 mt-1">
                <button
                  className="bg-[#1c1c28] px-2 py-1 rounded-lg text-sm flex items-center gap-1"
                  onClick={handleShowInfo}
                >
                  Info
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button className="bg-[#1c1c28] px-2 py-1 rounded-lg text-sm flex items-center gap-1">
                  Share Stats
                  <Share2 className="w-3 h-3" />
                </button>
                <div className="flex gap-1">
                  <button className="bg-[#1c1c28] p-1 rounded-lg">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </button>
                  <button className="bg-[#1c1c28] p-1 rounded-lg">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                  </button>
                  <button className="bg-[#1c1c28] p-1 rounded-lg">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.48.41-2.86 1.12-4.06l10.94 10.94C14.86 19.59 13.48 20 12 20zm6.88-3.94L8.94 5.12C10.14 4.41 11.52 4 13 4c4.41 0 8 3.59 8 8 0 1.48-.41 2.86-1.12 4.06z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <CollectionStats />
        </div>
        {showInfo && (
          <div className="bg-[#1c1c28] rounded-[8px] p-4">
            <h1 className="text-sm">
              CryptoPunks launched as a fixed set of 10,000 items in mid-2017
              and became one of the inspirations for the ERC-721 standard. They
              have been featured in places like The New York Times, Christie’s
              of London, Art|Basel Miami, and The PBS NewsHour.
            </h1>
            <button className="group hover:text-gray-400 text-white flex items-center gap-2 text-sm mt-3 bg-gray-500/10 py-2 px-3 rounded-[5px]">
              <Star className="w-4 h-4 text-gray-400 group-hover:text-yellow-500 transition-colors duration-300" />
              Add WatchList
            </button>
          </div>
        )}
        <div className="border-b border-gray-800 mb-6 mt-8 hidden md:block">
          <div className="flex justify-between">
            <div className="flex">
              <button className="px-4 text-sm py-2 border-b-2 border-purple-500 font-medium">
                Items
              </button>
              <button className="px-4 text-sm py-2 text-gray-400 hover:text-white">
                Offers
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 text-sm py-2 text-gray-400 hover:text-white">
                Chart
              </button>
              <button className="px-4 text-sm py-2 text-gray-400 hover:text-white">
                Analytics
              </button>
              <button className="px-4 text-sm py-2 text-gray-400 hover:text-white">
                Activity
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <ViewToggle />

          <div className="flex-1 relative">
            <Search className="absolute left-3 w-4 h-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search items"
              className="w-full text-sm bg-transparent rounded-[5px] border-2 border-[#1c1c28] pl-9 pr-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <div className="flex gap-2">
            <button
              className="bg-[#1c1c28] py-2 px-3 rounded-[5px] flex items-center gap-2 text-sm"
              onClick={() =>
                setSortOrder(
                  sortOrder === "price_asc" ? "price_desc" : "price_asc"
                )
              }
            >
              Price: {sortOrder === "price_asc" ? "Low to High" : "High to Low"}
              <ChevronDown className="w-4 h-4" />
            </button>

            <button className="bg-[#1c1c28] p-2 rounded-lg">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <InfiniteScroll
              dataLength={nfts.length}
              next={fetchNextPage}
              hasMore={!!hasNextPage}
              loader={
                <div className="py-4 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              }
              endMessage={
                <div className="py-4 text-center text-gray-400">
                  {nfts.length > 0 ? "You've seen all items" : "No items found"}
                </div>
              }
              scrollThreshold={0.9}
              className="overflow-hidden"
            >
              {viewMode === "grid" ? (
                <NFTGrid
                  nfts={nfts}
                  onSelect={toggleItemSelection}
                  selectedItems={selectedItems}
                />
              ) : (
                <NFTList
                  nfts={nfts}
                  onSelect={toggleItemSelection}
                  selectedItems={selectedItems}
                />
              )}
            </InfiniteScroll>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a0f] border-t border-gray-800 py-2 md:py-3 px-2 md:px-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center flex-col md:flex-row">
          <div className="flex items-center gap-4 justify-between w-full md:w-fit">
            <div className="text-sm border border-gray-800 rounded-[6px] px-3 py-2">
              <span className="font-bold text-sm mr-2">
                {selectedItems.length}
              </span>
              Items
            </div>

            <PriceRangeSlider />
            <Settings size={18} className="w-[28px]" />
          </div>

          <div className="flex gap-2 justify-between w-full md:w-fit mt-2 md:mt-0">
            <button className="bg-purple-600 hover:bg-purple-700 px-8 py-2 rounded-[4px] md:rounded-[6px font-medium w-[100%] md:w-[150px] text-sm">
              Buy
            </button>

            <button className="bg-[#1c1c28] p-2 rounded-[6px] hidden md:block">
              <ShoppingCart size={18} className="w-[28px]" />
            </button>
            <button className="bg-[#1c1c28] p-2 rounded-[6px]">
              <Paintbrush size={18} className="w-[28px]" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center mt-4 w-100 px-3">
          <div className="flex items-center gap-4 justify-between w-full">
            <div className="flex items-center gap-1 text-green-400 text-xs">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              Live Data
            </div>
            <div className="flex gap-4 items-center justify-center">
              <div className="text-xs font-medium flex gap-1 items-center">
                <DollarSignIcon size={12} /> 1,882.45
              </div>

              <button className="bg-[#1c1c28] px-2 py-1 rounded-[4px] text-xs flex items-center gap-2">
                <Gauge size={14} />
                Standard
              </button>

              <button className="text-gray-400 hover:text-white">
                <Settings size={16} />
              </button>

              <button className="text-gray-400 text-xs hover:text-white flex items-center gap-2">
                <MessageSquare size={14} />
                Support
              </button>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Items", icon: <Layers size={18} /> },
    { name: "Offers", icon: <HandHelping size={18} /> },
    { name: "Chart", icon: <ChartColumn size={18} />, button: true },
    { name: "Activity", icon: <Activity size={18} />, button: true },
    { name: "Analytics", icon: <ChartNoAxesColumn size={18} />, button: true },
  ];

  return (
    <div className="flex items-center mt-4 w-full border-t border-gray-500 md:hidden">
      <div className="flex items-center gap-4 justify-between w-full mt-3">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`text-[10px] font-medium flex flex-col gap-1 items-center pb-1 px-3 ${
              item.name === "Items" ? "border-b-2 border-purple-600" : ""
            }`}
          >
            {item.icon}
            {item.name}
          </button>
        ))}

        <button className="bg-[#1c1c28] p-2 rounded-[6px]">
          <ShoppingCart size={18} className="w-[28px]" />
        </button>
      </div>
    </div>
  );
};

export default MarketplacePage;
