import { useEffect, useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useMarketStore } from "@/store/marketplaceStore";
import { TimeRange } from "@/types/marketplace";
import { chainsMockData } from "@/data/marketplace";
import {
  BiggestMovers,
  ChainTabs,
  InscriptionClubs,
  NFTDrops,
  RareAndExotic,
  TimeFilter,
  TopCollections,
  TrendingCollections,
} from "@/components/pages/marketplace";
import { SafeAreaWrapper } from "@/components/atoms";

const LockerPage = () => {
  const searchParams = useSearch<any>({
    from: undefined,
  });

  const navigate = useNavigate();
  const { selectedChain, setSelectedChain } = useMarketStore();
  const [selectedRange, setSelectedRange] = useState<TimeRange>("1d");

  useEffect(() => {
    const marketplaceSlug = searchParams.marketplace || "all-chains";

    const matchingChain = chainsMockData.find(
      (chain) => chain.slug === marketplaceSlug
    );

    if (matchingChain) {
      setSelectedChain(matchingChain);
    }
  }, [searchParams, setSelectedChain]);

  useEffect(() => {
    navigate({
      search: (prev) => ({
        ...prev,
        marketplace: selectedChain.slug,
      }),
    });
  }, [selectedChain.slug, navigate]);

  return (
    <SafeAreaWrapper>
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="sticky top-0 z-50 bg-background-DEFAULT py-4">
          <div className="flex justify-between items-center">
            <ChainTabs />
          </div>
        </div>

        <section className="mb-8">
          <TrendingCollections />
        </section>

        <section className="my-8">
          <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
            <h2 className="text-2xl font-bold text-white capitalize flex justify-between items-center w-full">
              Top
              {selectedChain.slug === "all-chains" ? "NFT" : selectedChain.name}
              Collections
              <span className="text-gray-400 font-normal text-sm md:hidden">
                See all
              </span>
            </h2>
            <div className="mt-3 md:mt-0 w-full md:w-fit">
              <TimeFilter
                selectedRange={selectedRange}
                onRangeChange={setSelectedRange}
                showCrypto={false}
                onToggleCurrency={() => {}}
              />
            </div>
          </div>
          <TopCollections />
        </section>

        {/* NFT Drops */}
        <section className="my-8">
          <NFTDrops />
        </section>
        <section className="my-8">
          <BiggestMovers />
        </section>
        <section className="my-8">
          <InscriptionClubs />
        </section>
        <section className="my-8">
          <RareAndExotic />
        </section>
      </div>
    </SafeAreaWrapper>
  );
};

export default LockerPage;
