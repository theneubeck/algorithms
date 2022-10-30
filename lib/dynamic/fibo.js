"use strict";
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1.

function fibonacci(number, passes) {
  passes.add();
  if (number < 2) return number;
  return fibonacci(number - 1, passes) + fibonacci(number - 2, passes);
}

function fibonacciWithMemory(number, passes) {
  const memory = {0: 0, 1: 1};
  function inner(number, passes) {
    passes.add();
    if (memory[number] == null) {
      memory[number] = inner(number - 1, passes) + inner(number - 2, passes);
    }
    return memory[number];
  }
  return inner(number, passes);
}

function fibfibonacciPreCalc(number, passes) {
  const values = {0: 0, 1: 1};
  passes.add();
  for (let i = 2; i < number + 1; i++) {
    values[i] = values[i - 1] + values[i - 2];
  }

  return values[number];
}

function wrap(fn, input) {
  const passes = passCount();
  const value = fn(input, passes);
  console.debug(`Passes of ${fn.name} with ${input} has ${passes.get()} passes`);
  return value;
}

function passCount() {
  let count = 0;
  return {
    add: () => count++,
    get: () => count
  };
}


module.exports = {
  fibonacci: wrap.bind(null, fibonacci),
  fibonacciWithMemory: wrap.bind(null, fibonacciWithMemory),
  fibonacciPreCalc: wrap.bind(null, fibfibonacciPreCalc)
};
