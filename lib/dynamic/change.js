"use strict";

const coins = [1000, 500, 100, 50, 20, 10, 5, 1];

function change(amount) {
  if (amount < 1) return 0;
  if (coins.includes(amount)) {
    return 1;
  }

  let minCoins = Number.MAX_VALUE;
  let memory;
  for (let i = 1; i <= amount / 2; i++) {
    memory = change(amount - i) + change(i);
    if (memory < minCoins) {
      minCoins = memory;
    }
  }
  return minCoins;
}

module.exports = {change};
