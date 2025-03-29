import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Famous Fox Federation",
    type: "HOT COLLECTION",
    chain: "SOL",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&q=80",
    description:
      "The Famous Fox Federation, an independent organization of the most fabulously famous foxes on the Blockchain.",
  },
  {
    id: 2,
    name: "Sandwatch Premium Seats",
    type: "LAUNCHPAD",
    chain: "SOL",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&q=80",
    description: "Premium seats for the next generation of NFT collectors.",
  },
  {
    id: 3,
    name: "Froganas",
    type: "HOT COLLECTION",
    chain: "SOL",
    image:
      "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=500&q=80",
    description:
      "A unique collection of frog-based NFTs in the Solana ecosystem.",
  },
  {
    id: 5,
    name: "Lifinity Flares",
    type: "HOT COLLECTION",
    chain: "SOL",
    image:
      "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=500&q=80",
    description: "Digital flares that light up the Solana blockchain.",
  },
  {
    id: 4,
    name: "Lifinity Flares",
    type: "HOT COLLECTION",
    chain: "SOL",
    image:
      "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=500&q=80",
    description: "Digital flares that light up the Solana blockchain.",
  },
];

function NextArrow(props: any) {
  const { onClick, currentSlide, slideCount, slidesToShow } = props;

  if (currentSlide >= slideCount - slidesToShow) return null;

  return (
    <button
      onClick={onClick}
      className="absolute right-[60px] top-1/2 -translate-y-1/2 translate-x-full p-2 rounded-full bg-pink-600 hover:bg-gray-800 transition-colors"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick, currentSlide } = props;
  if (currentSlide === 0) return null;
  return (
    <button
      onClick={onClick}
      className="absolute left-[60px] top-1/2 -translate-y-1/2 -translate-x-full p-2 rounded-full bg-pink-600 hover:bg-gray-800 transition-colors z-10"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
}

export default function TrendingCollections() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto">
      <div className="relative collection-slider">
        <Slider {...settings}>
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              whileHover={{ scale: 1.02 }}
              className="px-2"
            >
              <div className="relative  h-[300px] rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white backdrop-blur-sm">
                      {collection.type}
                    </span>
                    <span className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-400 backdrop-blur-sm">
                      {collection.chain}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {collection.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-6 py-2 text-white border-2 border-purple-600 rounded-full text-sm font-medium transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-lg">
                    Explore Collection
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
