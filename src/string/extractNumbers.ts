/**
 * Extract all the number from the string
 * @param str
 */
export function extractNumbers(str: string) {
  const regex = /\b\d+\b/g;
  const matches = str.match(regex);
  return matches ? matches.map(Number) : [];
}
