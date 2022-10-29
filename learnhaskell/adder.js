"use strict";

function adder(arg) {
  return function (two) {
    if (!two) {
      return arg;
    }
    return adder(arg + two);
  };
}

module.exports = adder;
