import { FetchNFTsParams, FetchNFTsResponse } from "@/types/collection"
import { punksData } from "./mockdata"

export const fetchNFTs = async ({
  page = 1,
  limit = 16,
  sort = "price_asc",
  search = "",
  filters = {},
}: FetchNFTsParams): Promise<FetchNFTsResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  let filteredData = [...punksData]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredData = filteredData.filter(
      (item) =>
        item.tokenId.includes(search) ||
        Object.values(item.traits).some(
          (trait) => typeof trait === "string" && trait.toLowerCase().includes(searchLower),
        ),
    )
  }

  if (filters.priceMin !== undefined) {
    filteredData = filteredData.filter((item) => item.price >= filters.priceMin)
  }

  if (filters.priceMax !== undefined) {
    filteredData = filteredData.filter((item) => item.price <= filters.priceMax)
  }

  if (filters.traits && Object.keys(filters.traits).length > 0) {
    Object.entries(filters.traits).forEach(([traitType, traitValues]: [string, any]) => {
      if (Array.isArray(traitValues) && traitValues.length > 0) {
        filteredData = filteredData.filter((item) => traitValues.includes(item.traits[traitType]))
      }
    })
  }

  filteredData.sort((a, b) => {
    switch (sort) {
      case "price_asc":
        return a.price - b.price
      case "price_desc":
        return b.price - a.price
      case "rarity_asc":
        return a.rarityRank - b.rarityRank
      case "rarity_desc":
        return b.rarityRank - a.rarityRank
      case "recent":
        return new Date(b.lastSale?.date || 0).getTime() - new Date(a.lastSale?.date || 0).getTime()
      default:
        return 0
    }
  })

  const total = filteredData.length
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const pageCount = Math.ceil(total / limit)

  const items = filteredData.slice(startIndex, endIndex)

  const hasNextPage = endIndex < total

  return {
    items,
    total,
    nextPage: hasNextPage ? page + 1 : null,
    pageCount,
    currentPage: page,
  }
}


