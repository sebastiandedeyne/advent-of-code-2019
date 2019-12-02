const test = require("ava");
const {
  calculateRequiredFuel,
  calculateRequiredFuelRecursive
} = require("./calculateRequiredFuel");

test("12", t => {
  t.is(calculateRequiredFuel(12), 2);
});

test("14", t => {
  t.is(calculateRequiredFuel(14), 2);
});

test("1969", t => {
  t.is(calculateRequiredFuel(1969), 654);
});

test("100756", t => {
  t.is(calculateRequiredFuel(100756), 33583);
});

test("14 recursive", t => {
  t.is(calculateRequiredFuelRecursive(14), 2);
});

test("1969 recursive", t => {
  t.is(calculateRequiredFuelRecursive(1969), 966);
});

test("100756 recursive", t => {
  t.is(calculateRequiredFuelRecursive(100756), 50346);
});
