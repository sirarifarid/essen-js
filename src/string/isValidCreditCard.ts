export function isValidCreditCard(num: string) {
  const sanitizedNumber = num.replace(/\D/g, "");

  if (!sanitizedNumber || isNaN(+sanitizedNumber)) {
    return false;
  }

  let sum = 0;
  let doubleDigit = false;

  for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitizedNumber.charAt(i), 10);

    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;

    doubleDigit = !doubleDigit;
  }

  return sum % 10 === 0;
}
