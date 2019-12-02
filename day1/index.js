const { createReadStream } = require("fs");
const { createInterface } = require("readline");
const {
  calculateRequiredFuel,
  calculateRequiredFuelRecursive
} = require("./calculateRequiredFuel");

let requiredFuel = 0;
let requiredFuelRecursive = 0;

createInterface({
  input: createReadStream(`${__dirname}/input.txt`)
})
  .on("line", line => {
    requiredFuel += calculateRequiredFuel(line);
    requiredFuelRecursive += calculateRequiredFuelRecursive(line);
  })
  .on("close", () => {
    console.log(`Required fuel: ${requiredFuel}`);
    console.log(`Required fuel recursive: ${requiredFuelRecursive}`);
  });
