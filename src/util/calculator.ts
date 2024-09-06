export function calculateRevenueTier(value: number) {
  const tierGap = 100000;
  return value / tierGap;
}

export function calculateMarketValueTier(value: number): number {
  const tierGap = 1000000;
  return Math.floor(value / tierGap);
}

export function calculateMarginTier(value: number): number {
  const tierGap = 5;
  return Math.floor(value / tierGap);
}
