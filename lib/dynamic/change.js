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

function changeWithMemory(outerAmount, outerPasses) {
  const cache = {};

  function inner(amount, passes) {
    passes.add();
    if (amount < 1) return 0;
    if (coins.includes(amount)) {
      cache[amount] = 1;
    }

    if (cache[amount]) return cache[amount];

    let minCoins = Number.MAX_VALUE;
    for (let i = 1; i <= amount / 2; i++) {
      const memory = inner(amount - i, passes) + inner(i, passes);
      if (memory < minCoins) {
        minCoins = memory;
      }
    }
    cache[amount] = minCoins;
    return minCoins;
  }
  return inner(outerAmount, outerPasses);
}

function changePreCalc(amount, passes) {
  const coinsUsed = {};
  if (amount < 1) return 0;

  for (let b = 1; b <= amount; b++) {
    if (coins.includes(b)) {
      coinsUsed[b] = 1;
      passes.add();
    } else {
      let minCoins = Number.MAX_VALUE;

      for (let i = 1; i <= b / 2; i++) {
        passes.add();
        const n = coinsUsed[b - i] + coinsUsed[i];
        if (n < minCoins) {
          minCoins = n;
        }
      }
      coinsUsed[b] = minCoins;
    }
  }
  return coinsUsed[amount];
}

function changePreCalc2(amount, passes) {
  const coinsUsed = {};
  if (amount < 1) return 0;

  for (let b = 1; b <= amount; b++) {
    if (coins.includes(b)) {
      coinsUsed[b] = 1;
      passes.add();
    } else {
      let minCoins = Number.MAX_VALUE;

      coins.forEach((coin) => {
        passes.add();
        if (b < coin) return;
        /*
          this must be b-1 + 1 (but also b-5 + 5, b-10 + 10)
        */
        const coinCalc = coinsUsed[b - coin] + 1;
        if (coinCalc < minCoins) {
          minCoins = coinCalc;
        }
      });
      coinsUsed[b] = minCoins;
    }
  }
  return coinsUsed[amount];
}


module.exports = {
  change: wrap.bind(null, change),
  changeWithMemory: wrap.bind(null, changeWithMemory),
  changePreCalc: wrap.bind(null, changePreCalc),
  changePreCalc2: wrap.bind(null, changePreCalc2)
};
