/**
 * Returns a hex code of the rgba color
 * @param color
 */

export function rgba2hex(color: string) {
  let a: number | string,
    rgb: any = color
      .replace(/\s/g, "")
      .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
    alpha = ((rgb && rgb[4]) || "").trim(),
    hex = rgb
      ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
        (rgb[2] | (1 << 8)).toString(16).slice(1) +
        (rgb[3] | (1 << 8)).toString(16).slice(1)
      : color;

  if (alpha !== "") {
    a = +alpha;
  } else {
    a = 0o1;
  }

  a = ((a * 255) | (1 << 8)).toString(16).slice(1);
  hex = hex + a;

  return hex;
}
