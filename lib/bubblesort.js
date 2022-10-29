"use strict";

function bubblesort(list) {
  if (list.length < 2) return list;
  for (let i = 0; i < list.length; i++) {
    if (list[i] > list[i + 1]) {
      const tmp = list[i + 1];
      list[i + 1] = list[i];
      list[i] = tmp;
    }
  }
  const rest = list.splice(0, list.length - 1);
  const last = list[list.length - 1];
  return [].concat(bubblesort(rest), last);
}

module.exports = bubblesort;
