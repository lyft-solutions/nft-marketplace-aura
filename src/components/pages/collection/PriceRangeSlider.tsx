import  React from "react"
import { useState, useEffect } from "react"
import { useNFTStore } from "@/store/nfsStore"

const PriceRangeSlider = () => {
  const { priceRange, setPriceRange } = useNFTStore()
  const [localValue, setLocalValue] = useState(priceRange)

  useEffect(() => {
    setLocalValue(priceRange)
  }, [priceRange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(Number(e.target.value))
  }

  const handleMouseUp = () => {
    setPriceRange(localValue)
  }

  return (
    <div className="flex items-center gap-2 w-full md:w-48">
      <input
        type="range"
        min="0"
        max="100"
        value={localValue}
        onChange={handleChange}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
    </div>
  )
}

export default PriceRangeSlider

