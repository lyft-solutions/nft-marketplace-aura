export type TimeRange = "10m" | "1h" | "6h" | "1d" | "7d" | "30d";

export interface Chain {
  name: string;
  icon: string;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
  chain: string;
  chainIcon: string;
  type: string;
  floor: number;
  volume: number;
  change: number;
}

export interface NFTDrop {
  id: string;
  name: string;
  image: string;
  price: string;
  supply: number;
  minted: number;
  status: "live" | "upcoming";
  endsAt: string;
}

export interface Mover {
  id: string;
  name: string;
  image: string;
  chain: string;
  chainIcon: string;
  price: string;
  change: number;
  verified: boolean;
}
