
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
interface MarketState {
  selectedChain: { name: string; iconKey: string; slug: string };
  timeRange: string
  displayCount: number
  showCrypto: boolean
  setSelectedChain: (chain: { name: string; iconKey: string; slug: string }) => void;
  setTimeRange: (range: string) => void
  setDisplayCount: (count: number) => void
  toggleCurrency: () => void
  resetDisplayCount: () => void
}

export const useMarketStore = create<MarketState>()(
  persist(
    (set) => ({
      selectedChain: { name: "All Chains", iconKey: "shape", slug: "all-chains" },
      timeRange: "1d",
      displayCount: 5,
      showCrypto: true,
      setSelectedChain: (chain) => set({ selectedChain: chain }),
      setTimeRange: (range) => set({ timeRange: range }),
      setDisplayCount: (count) => set({ displayCount: count }),
      toggleCurrency: () => set((state) => ({ showCrypto: !state.showCrypto })),
      resetDisplayCount: () => set({ displayCount: 5 }),
    }),
    {
      name: "market-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

