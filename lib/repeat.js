"use strict";

function repeat(token, number) {
  if (!token || !number || number === 0) {
    return [];
  }
  return [].concat(String(token), repeat(token, number - 1));
}


module.exports = repeat;
