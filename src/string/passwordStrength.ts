/**
 * Extract all the number from the string
 * @param pass
 * @return {Object} An object containing the score (number) and strength (string).
 */
export function passwordStrength(pass: string) {
  const criteriaWeights = {
    length: 2,
    uppercase: 2,
    lowercase: 2,
    digit: 2,
    specialChar: 2,
  };

  const patterns = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    digit: /[0-9]/,
    specialChar: /[^A-Za-z0-9]/,
  };

  let score = 0;

  if (pass.length >= 8) {
    score += criteriaWeights.length;
  }

  if (patterns.uppercase.test(pass)) {
    score += criteriaWeights.uppercase;
  }

  if (patterns.lowercase.test(pass)) {
    score += criteriaWeights.lowercase;
  }

  if (patterns.digit.test(pass)) {
    score += criteriaWeights.digit;
  }

  if (patterns.specialChar.test(pass)) {
    score += criteriaWeights.specialChar;
  }
  let strength = "";
  if (score >= 10) {
    strength = "Strong";
  } else if (score >= 6) {
    strength = "Medium";
  } else {
    strength = "Weak";
  }

  return {
    score,
    strength,
  };
}
