export type Tab = "live" | "past";
export type SubTab = "all" | "launchpad" | "openEditions";

export interface NFTProject {
  id: string;
  image: string;
  name: string;
  price: string;
  items: string;
  minted: string;
  status: {
    type: "live" | "ended";
    endsAt?: string;
  };
  description?: string;
  type?: string;
}
