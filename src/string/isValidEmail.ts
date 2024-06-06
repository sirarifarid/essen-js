/**
 * Extract all the number from the string
 * @param email
 * @param domains array of domains optional
 */
export function isValidEmail(email: string, domains?: string[]) {
  return domains
    ? new RegExp(
        `^[a-zA-Z0-9._%+-]+@(${domains?.join("|").replace(/\./g, "\\.")})$`,
        "i"
      ).test(email)
    : /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i.test(email);
}
