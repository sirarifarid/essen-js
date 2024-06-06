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
