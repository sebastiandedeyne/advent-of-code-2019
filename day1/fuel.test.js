const test = require("ava");
const { fuelForMasses, fuelForMassesRecursive } = require("./fuel");

test("12", t => {
  t.is(fuelForMasses([12]), 2);
});

test("14", t => {
  t.is(fuelForMasses([14]), 2);
});

test("1969", t => {
  t.is(fuelForMasses([1969]), 654);
});

test("100756", t => {
  t.is(fuelForMasses([100756]), 33583);
});

test("14 recursive", t => {
  t.is(fuelForMassesRecursive([14]), 2);
});

test("1969 recursive", t => {
  t.is(fuelForMassesRecursive([1969]), 966);
});

test("100756 recursive", t => {
  t.is(fuelForMassesRecursive([100756]), 50346);
});
