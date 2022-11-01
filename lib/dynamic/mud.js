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
  // const result = recurse(matrix, 0, 0);
  const xMax = matrix[0].length - 1;
  const yMax = matrix.length - 1;

  for (let y = 0; y <= yMax; y++) {
    workMatrix.push([buildNode(matrix[y][0], {path: [], result: 0}, 0, y)]);
  }

  for (let x = 1; x <= xMax; x++) {
    for (let y = 0; y <= yMax; y++) {
      const fromUpRight = y < 1 ? Number.MAX_VALUE : matrix[ y - 1][x - 1];
      const fromRight = matrix[ y][x - 1];
      const fromDownRight = y + 1 > yMax ? Number.MAX_VALUE : matrix[ y + 1][x - 1];

      if (fromUpRight < fromRight && fromUpRight < fromRight) {
        workMatrix[y][x] = buildNode(matrix[y][x], workMatrix[ y - 1][x - 1], x, y);
      } else if (fromDownRight < fromRight && fromDownRight < fromUpRight) {
        workMatrix[y][x] = buildNode(matrix[y][x], workMatrix[ y + 1][x - 1], x, y);
      } else {
        workMatrix[y][x] = buildNode(matrix[y][x], workMatrix[y][x - 1], x, y);
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
