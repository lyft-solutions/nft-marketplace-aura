
const generatePunkTraits = () => {
  const types = ["Male", "Female", "Zombie", "Ape", "Alien"]
  const typeWeights = [0.6, 0.3, 0.05, 0.04, 0.01]

  const accessories: string[] = [
    "Earring",
    "Cigarette",
    "Pipe",
    "Bandana",
    "Beanie",
    "3D Glasses",
    "Cap",
    "Cowboy Hat",
    "Fedora",
    "Knitted Cap",
    "Medical Mask",
    "Pilot Helmet",
    "Police Cap",
    "Tiara",
    "VR",
    "Wild Hair",
    "Mohawk",
    "Frumpy Hair",
    "Crazy Hair",
    "Messy Hair",
    "Clown Hair",
    "Hoodie",
    "Do-rag",
    "Shaved Head",
    "Peak Spike",
  ]

  const backgrounds = ["Blue", "Purple", "Orange", "Green", "Red", "Black"]

  const randomType = () => {
    const rand = Math.random()
    let sum = 0
    for (let i = 0; i < typeWeights.length; i++) {
      sum += typeWeights[i]
      if (rand < sum) return types[i]
    }
    return types[0]
  }

  const numAccessories = Math.floor(Math.random() * 3) + 1
  const selectedAccessories: string[] = [];
  for (let i = 0; i < numAccessories; i++) {
    const accessory = accessories[Math.floor(Math.random() * accessories.length)]
    if (!selectedAccessories.includes(accessory)) {
      selectedAccessories.push(accessory)
    }
  }

  const type = randomType()
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)]

  return {
    type,
    background,
    accessories: selectedAccessories.join(", "),
  }
}

const generatePriceData = () => {
  const basePrice = 38 + (Math.random() * 4 - 2)
  const lastPrice = basePrice * (0.85 + Math.random() * 0.3)

  return {
    price: Number.parseFloat(basePrice.toFixed(2)),
    lastPrice: Number.parseFloat(lastPrice.toFixed(2)),
  }
}

export const punksData: any = Array.from({ length: 100 }).map((_, index) => {
  const tokenId = String(index + 1).padStart(4, "0")
  const traits = generatePunkTraits()
  const prices = generatePriceData()
  const rarityRank = Math.floor(Math.random() * 10000)

  const randomDate = new Date()
  randomDate.setDate(randomDate.getDate() - Math.floor(Math.random() * 30))

  return {
    id: `punk-${tokenId}`,
    tokenId,
    image: `assets/image/fortnite-event-2.jpg`,
    price: prices.price,
    lastPrice: prices.lastPrice,
    rarity: rarityRank.toString(),
    rarityRank,
    traits,
    collection: "CryptoPunks",
    owner: `0x${Math.random().toString(16).substring(2, 14)}`,
    listed: Math.random() > 0.3, // 70% are listed
    lastSale: {
      price: prices.lastPrice,
      date: randomDate.toISOString(),
      from: `0x${Math.random().toString(16).substring(2, 14)}`,
      to: `0x${Math.random().toString(16).substring(2, 14)}`,
    },
  }
})

punksData[0].price = 90.39
punksData[0].rarityRank = 1
punksData[0].traits.type = "Alien"

punksData[1].price = 72.5
punksData[1].rarityRank = 5
punksData[1].traits.type = "Ape"

punksData[2].price = 65.8
punksData[2].rarityRank = 12
punksData[2].traits.type = "Zombie"

