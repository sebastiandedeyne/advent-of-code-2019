const { readFile } = require("fs");
const { fuelForMasses, fuelForMassesRecursive } = require("./fuel");

readFile(`${__dirname}/input.txt`, "utf-8", (_err, input) => {
  console.log(`Required fuel: ${fuelForMasses(input.trim().split("\n"))}`);

  console.log(
    `Required fuel recursive: ${fuelForMassesRecursive(
      input.trim().split("\n")
    )}`
  );
});
