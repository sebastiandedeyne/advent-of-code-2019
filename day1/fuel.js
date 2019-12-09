function fuelForMasses(masses) {
  return masses.reduce((sum, mass) => sum + fuelForMass(mass), 0);
}

function fuelForMassesRecursive(masses) {
  return masses.reduce((sum, mass) => sum + fuelForMassRecursive(mass), 0);
}

function fuelForMass(mass) {
  return Math.max(Math.floor(mass / 3) - 2, 0);
}

function fuelForMassRecursive(mass) {
  let total = fuelForMass(mass);
  let remainingMass = fuelForMass(mass);

  while (remainingMass) {
    remainingMass = fuelForMass(remainingMass);
    total += remainingMass;
  }

  return total;
}

module.exports.fuelForMasses = fuelForMasses;
module.exports.fuelForMassesRecursive = fuelForMassesRecursive;
