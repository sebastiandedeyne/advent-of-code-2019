function runProgram(input) {
  input = input.split(",").map(i => parseInt(i));

  let opCode;
  let cursorPosition = 0;

  while (true) {
    opCode = input[cursorPosition];

    if (![1, 2, 99].includes(opCode)) {
      throw new Error(`Unknown opcode ${opCode}`);
    }

    if (opCode === 99) {
      return input.join(",");
    }

    const [, positionA, positionB, positionResult] = input.slice(
      cursorPosition,
      cursorPosition + 4
    );

    input[positionResult] =
      opCode === 1
        ? input[positionA] + input[positionB]
        : input[positionA] * input[positionB];

    cursorPosition += 4;
  }
}

module.exports.runProgram = runProgram;
