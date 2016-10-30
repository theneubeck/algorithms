"use strict";

function quicksort(list) {
  if (list.length === 0) return list;
  const head = list.shift();
  const more = list.filter((i) => i > head);
  const less = list.filter((i) => i <= head);
  return [].concat(quicksort(less), head, quicksort(more));
}

module.exports = quicksort;
