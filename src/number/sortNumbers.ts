/**
 * Returns sorted array
 * @param arr array of numbers
 * @param sort optional parameter for sorting descending
 * @default ascending
 */

export function sortNumbers(arr: number[], sort?: "desc") {
  return arr.slice().sort((a, b) => (sort === "desc" ? b - a : a - b));
}
