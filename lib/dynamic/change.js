"use strict";

const {wrap} = require("./helpers");

const coins = [1000, 500, 100, 50, 20, 10, 5, 1];

function change(amount, passes) {
  passes.add();
  if (amount < 1) return 0;
  if (coins.includes(amount)) {
    return 1;
  }

  let minCoins = Number.MAX_VALUE;
  let memory;
  for (let i = 1; i <= amount / 2; i++) {
    memory = change(amount - i, passes) + change(i, passes);
    if (memory < minCoins) {
      minCoins = memory;
    }
  }
  return minCoins;
}

function changeWithMemory(amount, passes) {
  const cache = {};
  function inner(amount, passes) {
    passes.add();
    if (amount < 1) return 0;
    if (coins.includes(amount)) {
      return 1;
    }
    if (cache[amount]) return cache[amount];

    let minCoins = Number.MAX_VALUE;
    let memory;
    for (let i = 1; i <= amount / 2; i++) {
      cache[amount -i] = inner(amount - i, passes);
      cache[i] = inner(i, passes);
      memory =  cache[amount-i] + cache[i];
      if (memory < minCoins) {
        minCoins = memory;
      }
    }
    return minCoins;
  }
  return inner(amount, passes);
}

function changePreCalc(amount, passes) {
  const changes = {};
  if (amount < 1) return 0;

  for (let b = 1; b <= amount; b++) {
    if (coins.includes(b)) {
      changes[b] = 1;
      passes.add();
    } else {
      let minCoins = Number.MAX_VALUE;

      for (let i= 1; i <= b/2; i++) {
        passes.add();
        const n = changes[b-i] + changes[i];
        if (n < minCoins) {
          minCoins = n;
        }
      }
      changes[b] = minCoins;
    }
  }
  return changes[amount];
}


module.exports = {
  change: wrap.bind(null, change),
  changeWithMemory: wrap.bind(null, changeWithMemory),
  changePreCalc: wrap.bind(null, changePreCalc)
};
