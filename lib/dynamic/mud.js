"use strict";
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1.

function mud(matrix) {
  function buildNode(matrixNode, workNode, x, y) {
    const {path, result} = workNode;
    return {
      path: path.concat([[x, y]]),
      result: matrixNode + result
    };
  }

  const workMatrix = [];
  const xMax = matrix[0].length - 1;
  const yMax = matrix.length - 1;

  for (let y = 0; y <= yMax; y++) {
    workMatrix.push([buildNode(matrix[y][0], {path: [], result: 0}, 0, y)]);
  }

  for (let x = 1; x <= xMax; x++) {
    for (let y = 0; y <= yMax; y++) {
      let min = Number.MAX_VALUE;
      for (let b = y - 1; b <= y + 1; b++) {
        // add left&up, left, left&down to current node
        if (b >= 0 && b <= yMax && matrix[b][x - 1] < min) {
          min = matrix[b][x - 1];
          workMatrix[y][x] = buildNode(matrix[y][x], workMatrix[ b][x - 1], x, y);
        }
      }
    }
  }

  let result = workMatrix[0][xMax].result;
  let path = workMatrix[0][xMax].path;
  for (let y = 1; y <= yMax; y++) {
    if (workMatrix[y][xMax].result < result ) {
      result = workMatrix[y][xMax].result;
      path = workMatrix[y][xMax].path;
    }
  }

  return {
    result,
    path
  };
}


module.exports = {
  mud
};
