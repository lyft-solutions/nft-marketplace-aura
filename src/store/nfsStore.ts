import { create } from "zustand";
import { persist } from "zustand/middleware";

type ViewMode = "grid" | "small-grid" | "list";
type SortOrder =
  | "price_asc"
  | "price_desc"
  | "rarity_asc"
  | "rarity_desc"
  | "recent";

interface NFTState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;

  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;

  priceRange: number;
  setPriceRange: (range: number) => void;

  selectedItems: string[];
  toggleItemSelection: (id: string) => void;
  clearSelectedItems: () => void;

  filters: {
    traits: Record<string, string[]>;
    priceMin: number | null;
    priceMax: number | null;
  };
  setFilter: (key: string, value: any) => void;
  clearFilters: () => void;
}

export const useNFTStore = create<NFTState>()(
  persist(
    (set) => ({
      viewMode: "grid",
      setViewMode: (mode) => set({ viewMode: mode }),

      sortOrder: "price_asc",
      setSortOrder: (order) => set({ sortOrder: order }),

      priceRange: 0,
      setPriceRange: (range) => set({ priceRange: range }),

      selectedItems: [],
      toggleItemSelection: (id) =>
        set((state) => ({
          selectedItems: state.selectedItems.includes(id)
            ? state.selectedItems.filter((item) => item !== id)
            : [...state.selectedItems, id],
        })),
      clearSelectedItems: () => set({ selectedItems: [] }),

      filters: {
        traits: {},
        priceMin: null,
        priceMax: null,
      },
      setFilter: (key, value) =>
        set((state) => ({
          filters: {
            ...state.filters,
            [key]: value,
          },
        })),
      clearFilters: () =>
        set({
          filters: {
            traits: {},
            priceMin: null,
            priceMax: null,
          },
        }),
    }),
    {
      name: "nft-store",
    }
  )
);
