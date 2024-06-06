export function sortNumbers(arr: number[], sort?: "dec") {
  return arr.slice().sort((a, b) => (sort === "dec" ? b - a : a - b));
}
