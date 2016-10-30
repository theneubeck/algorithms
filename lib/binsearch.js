"use strict";

// -1 is not found
function bootstrap(needle, haystack) {
  return binsearch(needle, haystack, 0, haystack.length-1);
  // return binsearchRec(needle, haystack);
}
function bootstrapRec(needle, haystack) {
  return binsearchRec(needle, haystack);
}

function binsearch(needle, haystack, start, end) {
  const index = Math.floor((start + end)/2);
  
  if (needle === haystack[index]) {
    return index;
  } else if (needle < haystack[index]) {
    if ((end - start) < 1) {
      return -index;
    }
    return binsearch(needle, haystack, start, index)
  } else if (needle > haystack[index]){
    if ((end - start) < 1) {
      return - (index + 1);
    }
    return binsearch(needle, haystack, index+1, end);
  }

  return -1
}

function binsearchRec(needle, haystack) {
  const index = Math.floor(haystack.length/2);

  if (haystack.length === 1 && haystack[index] !== needle) {
    return needle > haystack[index] ? -1 : 0;
  }

  if (needle === haystack[index]) {
    return index;
  } else if (needle < haystack[index]) {
    return binsearchRec(needle, haystack.slice(0, index));
  } else if (needle > haystack[index]){
    const result = binsearchRec(needle, haystack.slice(index))
    if (result < 1) {
      return result - index;
    }
    return index + result;
  }

  return -1;
}

module.exports = {
  binsearch: bootstrap,
  binsearchRec: bootstrapRec
};
