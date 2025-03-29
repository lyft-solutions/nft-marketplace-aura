export const formatCurrency = (value: number, showCrypto: boolean): string => {
  if (showCrypto) {
    return `${value.toFixed(3)} ETH`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value * 2000);
};

export const cn = (
  ...classes: (string | boolean | Record<string, boolean> | undefined)[]
) => {
  return classes
    .flatMap((cls) =>
      typeof cls === "object" && cls !== null
        ? Object.entries(cls)
            .filter(([_, value]) => value)
            .map(([key]) => key)
        : cls
    )
    .filter(Boolean)
    .join(" ");
};
