export function replaceWords(
  str: string,
  replace: string | string[],
  replaceWith: string
) {
  return str.replace(
    new RegExp(
      `\\b(${Array.isArray(replace) ? replace.join("|") : replace})\\b`,
      "g"
    ),
    replaceWith
  );
}
