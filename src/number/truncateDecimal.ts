/**
 * Returns a truncate decimale number
 * @param num
 * @param decimal
 */

export function truncateDecimal(num: number, decimal: number) {
  const multiplier = Math.pow(10, decimal);
  const truncated = Math.trunc(num * multiplier) / multiplier;
  return truncated;
}
