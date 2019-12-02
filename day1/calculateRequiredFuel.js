function calculateRequiredFuel(mass) {
  return Math.max(Math.floor(mass / 3) - 2, 0);
}

function calculateRequiredFuelRecursive(mass) {
  let requiredFuelAmounts = [calculateRequiredFuel(mass)];

  while (requiredFuelAmounts[0]) {
    requiredFuelAmounts = [
      calculateRequiredFuel(requiredFuelAmounts[0]),
      ...requiredFuelAmounts
    ];
  }

  return requiredFuelAmounts.reduce((total, amount) => total + amount, 0);
}

module.exports.calculateRequiredFuel = calculateRequiredFuel;
module.exports.calculateRequiredFuelRecursive = calculateRequiredFuelRecursive;
