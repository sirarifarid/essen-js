export function replaceString(
  str: string,
  replace: string,
  replaceWith: string
) {
  return str.replace(new RegExp(replace, "g"), replaceWith);
}
