"use strict";

function wrap(fn, input) {
  const passes = passCount();
  const value = fn(input, passes);
  console.log(`Passes of ${fn.name} with ${input} has ${passes.get()} passes`);
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
  wrap
};
