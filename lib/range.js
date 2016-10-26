"use strict";

function range(from, to, step=1) {
  if (!to) {
    to = from;
    from = 0;
  }
  if (from >= to) return [];

  return [from].concat(range(from + step, to, step));
}

function rangeNoCopies(from, to, step=1, list=[]) {
  if (!to) {
    to = from;
    from = 0;
  }
  if (from >= to) return list;

  list.push(from);
  return rangeNoCopies(from + step, to, step, list);
}

module.exports = rangeNoCopies;
