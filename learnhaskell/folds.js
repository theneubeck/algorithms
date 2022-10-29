"use strict";


function foldlForEach(array, folder, startValue) {
  let lastVal = startValue;
  array.forEach((elem) => {
    lastVal = folder(lastVal, elem);
  });
  return lastVal;
}

function foldrForEach(array, folder, startValue) {
  let lastVal = startValue;
  for (let i = array.length - 1; i >= 0; i--) {
    lastVal = folder(array[i], lastVal);
  }
  return lastVal;
}

function foldl(array, folder, startValue) {
  if (!array || array.length === 0) return startValue;
  const head = array.shift();
  return foldl(array, folder, folder(startValue, head));
}

function foldr(array, folder, startValue) {
  if (!array || array.length === 0) return startValue;
  const tail = array.pop();
  return foldr(array, folder, folder(tail, startValue));
}

module.exports = {
  foldl,
  foldlForEach,
  foldr,
  foldrForEach
};
