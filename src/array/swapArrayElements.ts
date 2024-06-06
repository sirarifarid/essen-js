/**
 * Returns a new array with swapped elements
 * @param array
 * @param index1 index of 1st element
 * @param index2 index of 2nd element
 */
export const swapArrayElements = <T>(
  array: T[],
  index1: number,
  index2: number
): typeof array => {
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 >= array.length ||
    index2 >= array.length
  ) {
    return array;
  }
  [array[index1], array[index2]] = [array[index2], array[index1]];

  return array;
};
