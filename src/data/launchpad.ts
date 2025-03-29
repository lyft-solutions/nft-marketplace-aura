import { NFTProject } from "@/types/launchpad";

export const featuredProjects: NFTProject[] = [
  {
    id: "f1",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600",
    name: "Bullet 100k Trading Cup",
    type: "OPEN EDITION",
    description:
      "This NFT rewards early Bullet supporters with a 10% starting capital bonus in the $100K Bullet Trading Cup.",
    price: "0.00017 BTC",
    items: "999",
    minted: "72%",
    status: { type: "live", endsAt: "04d 00h 42m" },
  },
  {
    id: "f2",
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1600",
    name: "Crypto Velocity",
    type: "EXCLUSIVE DROP",
    description:
      "Experience the future of digital art with this high-speed crypto-inspired collection.",
    price: "0.00021 BTC",
    items: "500",
    minted: "45%",
    status: { type: "live", endsAt: "06d 12h 30m" },
  },
];

export const liveProjects: NFTProject[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800",
    name: "OX999",
    price: "0.00017 BTC",
    items: "999",
    minted: "72%",
    status: { type: "live", endsAt: "05d 00h 59m" },
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800",
    name: "Trump Bitcoin Digital Trading Cards",
    price: "0.00001 BTC",
    items: "50",
    minted: "10%",
    status: { type: "live", endsAt: "Apr 10" },
  },
];

export const pastProjects: NFTProject[] = [
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800",
    name: "Persona by Rupture",
    price: "0.0089 BTC",
    items: "541",
    minted: "95%",
    status: { type: "ended" },
  },
];
