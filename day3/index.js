const { readFile } = require("fs");
const {
  closestToCentralPort,
  intersectionWithShortestDistance
} = require("./manhatten");

readFile(`${__dirname}/input.txt`, "utf-8", (_, input) => {
  console.log(
    `Intersection closest to central port: ${closestToCentralPort(
      ...input.trim().split("\n")
    )}`
  );

  console.log(
    `Intersection with shortest distance: ${intersectionWithShortestDistance(
      ...input.trim().split("\n")
    )}`
  );
});
