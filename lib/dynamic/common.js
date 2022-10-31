"use strict";

const {wrap} = require("./helpers");

function commonSubstring(word1, word2) {
  let bestSubstring = "";
  for (let i=0;i< word1.length; i++) {
    for (let j=0;j< word2.length; j++) {
      let b = 0;
      let subString = "";
      while (word1[i+b] == word2[j+b] && i+b < word1.length && j+b < word2.length) {
        subString += word1[i+b];
        b++;
      }
      if (subString.length > bestSubstring.length) {
        bestSubstring = subString;
      }
    }

  }

  return bestSubstring;
}

function commonSubstringPreCalc(word1, word2) {
  const matrix = {};
  let bestHit = 0;
  let postition = 0;

  for (let i=0;i< word2.length; i++) {
    const hit = word1[0] == word2[i] ? 1 : 0;
    matrix[[0,i]] = hit;
    if (hit > bestHit) {
      bestHit = 1;
      postition = 1;
    }
  }

  for (let i=0;i< word1.length; i++) {
    const hit = word2[0] == word1[i] ? 1 : 0;
    matrix[[i,0]] = hit;
    if (hit > bestHit) {
      bestHit = 1;
      postition = 1;
    }
  }

  for (let i=1;i< word1.length; i++) {
   for (let j=1;j< word2.length; j++) {
     var hit = word1[i] == word2[j] ? 1: 0;
     const inARow = matrix[[i-1,j-1]] + hit;
     matrix[[i,j]] = inARow;
     if (inARow > bestHit) {
       bestHit = inARow;
       postition = i+1;
      }
    }

  }

  // console.log(postition, bestHit, word1)
  if (bestHit == 0) {
    return "";
  }
  return word1.substring(postition - bestHit, postition);
}


module.exports = {
  commonSubstring,
  commonSubstringPreCalc
}
