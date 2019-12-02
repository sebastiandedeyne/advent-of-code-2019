const { readFile } = require("fs");
const { runProgram } = require("./runProgram");

function changeFirstInstruction(program, noun, verb) {
  program = program.trim().split(",");
  program[1] = String(noun);
  program[2] = String(verb);

  return program.join(",");
}

readFile(`${__dirname}/input.txt`, "utf-8", (_, input) => {
  console.log(
    `First result: ${
      runProgram(changeFirstInstruction(input, 12, 2)).split(",")[0]
    }`
  );

  let noun = 0;
  let verb = 0;

  loop: {
    while (noun < 100) {
      while (verb < 100) {
        const result = parseInt(
          runProgram(changeFirstInstruction(input, noun, verb)).split(",")[0]
        );

        if (result === 19690720) {
          break loop;
        }

        verb++;
      }

      noun++;
      verb = 0;
    }
  }

  console.log(`Second result: ${noun * 100 + verb}`);
});
