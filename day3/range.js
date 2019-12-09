function rangeBetween(a, b) {
  if (a === b) {
    return [];
  }

  if (a > b) {
    return Array.from({ length: a - b - 1 }).map((_, i) => a - i - 1);
  }

  return Array.from({ length: b - a - 1 }).map((_, i) => i + a + 1);
}

module.exports.rangeBetween = rangeBetween;
