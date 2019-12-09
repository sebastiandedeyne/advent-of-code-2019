const { rangeBetween } = require("./range");

function closestToCentralPort(pathA, pathB) {
  return getCrossings(getCoordinates(pathA), getCoordinates(pathB)).reduce(
    (minDistance, { coordinates }) => {
      const [x, y] = coordinates;
      const distance = Math.abs(x) + Math.abs(y);

      return Math.min(minDistance, distance);
    },
    Infinity
  );
}

function leastAmountOfSteps(pathA, pathB) {
  return getCrossings(getCoordinates(pathA), getCoordinates(pathB)).reduce(
    (minSteps, { steps }) => {
      return Math.min(minSteps, steps);
    },
    Infinity
  );
}

function getCoordinates(path) {
  return path.split(",").reduce((coordinates, instruction) => {
    const [x, y] = coordinates.length
      ? coordinates[coordinates.length - 1]
      : [0, 0];

    const direction = instruction[0];
    const amount = parseInt(instruction.substr(1));

    switch (direction) {
      case "L":
        return coordinates.concat(
          rangeBetween(x, x - amount - 1).map(x => [x, y])
        );
      case "R":
        return coordinates.concat(
          rangeBetween(x, x + amount + 1).map(x => [x, y])
        );
      case "U":
        return coordinates.concat(
          rangeBetween(y, y + amount + 1).map(y => [x, y])
        );
      case "D":
        return coordinates.concat(
          rangeBetween(y, y - amount - 1).map(y => [x, y])
        );
      default:
        throw new Error("Unknown direction");
    }
  }, []);
}

function getCrossings(coordinatesA, coordinatesB) {
  const mapA = createCoordinatesLookupMap(coordinatesA);
  const mapB = createCoordinatesLookupMap(coordinatesB);

  return coordinatesA
    .filter(([x, y]) => {
      return mapB.has(x) ? mapB.get(x).has(y) : false;
    })
    .map(([x, y]) => {
      return {
        coordinates: [x, y],
        steps: mapA.get(x).get(y).steps + mapB.get(x).get(y).steps
      };
    });
}

function createCoordinatesLookupMap(coordinates) {
  return coordinates.reduce((map, [x, y], index) => {
    if (!map.has(x)) {
      map.set(x, new Map());
    }

    map.get(x).set(y, { coordinates: [x, y], steps: index + 1 });

    return map;
  }, new Map());
}

module.exports.closestToCentralPort = closestToCentralPort;
module.exports.leastAmountOfSteps = leastAmountOfSteps;
