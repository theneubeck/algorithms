"use strict";

function mergesort(array) {
  if (array.length < 2) return array;
  if (array.length === 2 ) {
    const [a, b] = array;
    return (a < b) ? [a, b] : [b, a];
  }

  const left = mergesort(array.slice(0, array.length / 2));
  const right = mergesort(array.slice(array.length / 2));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left, right);
}

module.exports = mergesort;
