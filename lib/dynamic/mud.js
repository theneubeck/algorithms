"use strict";
// spec: F(n) = F(n-1) + F(n-2), F(0) = 0, F(1) = 1.

function mud(matrix, startAt) {
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
    let work = matrix[y][0];
    // eslint-disable-next-line eqeqeq
    if (startAt != null) {
      work = y !== startAt ? Number.MAX_SAFE_INTEGER : work;
    }
    workMatrix.push([buildNode(work, {path: [], result: 0}, 0, y)]);
  }

  for (let x = 1; x <= xMax; x++) {
    for (let y = 0; y <= yMax; y++) {
      let min = Number.MAX_VALUE; // GOTCHA: this must be lower than work above
      for (let b = y - 1; b <= y + 1; b++) {
        // add left&up, left, left&down to current node
        if (b >= 0 && b <= yMax && workMatrix[b][x - 1].result < min) {
          min = workMatrix[b][x - 1].result;
          workMatrix[y][x] = buildNode(matrix[y][x], workMatrix[b][x - 1], x, y);
        }
      }
    }
  }

  let result = workMatrix[0][xMax].result;
  let path = workMatrix[0][xMax].path;
  for (let y = 0; y <= yMax; y++) {
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
