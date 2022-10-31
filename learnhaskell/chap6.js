/* eslint-disable no-console */
"use strict";

function add(one, two) {
  return function () {
    if (typeof one === "function") {
      return add(one(), two).apply(add);
    }
    const twoValue = typeof two === "function" ? two() : two;
    return twoValue + one;
  };
}

function applyTwice(fn, arg) {
  return fn(fn(arg));
}

function inspect(fn) {
  console.log(fn());
}

function curriedAdd(one) {
  return function (two) {
    return one + two;
  };
}

function adder(arg) {
  if (!arg) {
    return 0;
  }
  return 0 + arg;
}

function apply(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// inspect(add.bind(null, 3)(10));
inspect(applyTwice(add.bind(null, 3), 10));
inspect(applyTwice(add.bind(null, " HAHA"), "HEY"));
// inspect(applyTwice(add.bind(null, add("HAHA ", "")), "HEY"));

console.log(applyTwice(curriedAdd(3), 10));
console.log(applyTwice(curriedAdd(" HAHA"), "HEY"));

console.log(apply(adder, 1, 2, 3), 5);


module.exports = applyTwice;
