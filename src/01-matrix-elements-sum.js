/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(m) {
  let counter = m[0].reduce((a, b) => a + b);
  m.forEach((row, rindex) => {
    if (rindex === 0) return;
    row.forEach((col, cindex) => {
      if (m[rindex - 1][cindex] !== 0) counter += col;
    });
  });
  return counter;
}

module.exports = getMatrixElementsSum;
