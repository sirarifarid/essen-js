/**
 * Returns a hex code of the color
 * @param color
 * @param opacity index of 1st element
 */

export function alpha(color: string, opacity: number) {
  return (
    color +
    Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255).toString(16)
  );
}
