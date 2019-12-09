const test = require("ava");
const { rangeBetween } = require("./range");

test("1..1", t => {
  t.is(JSON.stringify(rangeBetween(1, 1)), "[]");
});

test("1..10", t => {
  t.is(JSON.stringify(rangeBetween(1, 10)), "[2,3,4,5,6,7,8,9]");
});

test("-1..-10", t => {
  t.is(JSON.stringify(rangeBetween(-1, -10)), "[-2,-3,-4,-5,-6,-7,-8,-9]");
});

test("5..-5", t => {
  t.is(JSON.stringify(rangeBetween(5, -5)), "[4,3,2,1,0,-1,-2,-3,-4]");
});
