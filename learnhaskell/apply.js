"use strict";

function apply(fn, one, ...args) {
  if (args.length === 0) {
    return fn(one).apply();
  }
  return apply(fn(one), ...args);
}

module.exports = apply;
