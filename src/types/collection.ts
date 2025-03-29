export interface NFTItem {
  id: string
  tokenId: string
  image: string
  price: number
  lastPrice: number
  rarity: string
  traits: Record<string, string>
  rarityRank: number
  collection: string
  owner: string
  listed: boolean
  lastSale?: {
    price: number
    date: string
    from: string
    to: string
  }
}

export interface FetchNFTsParams {
  page: number
  limit: number
  sort: string
  search?: string
  filters?: Record<string, any>
}

export interface FetchNFTsResponse {
  items: NFTItem[]
  total: number
  nextPage: number | null
  pageCount: number
  currentPage: number
}
