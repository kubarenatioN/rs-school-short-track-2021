/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function CountNeighboringMines(row, col, m) {
  let minesNumber = 0;
  for (let i = row - 1; i < row + 2; i++) {
    if (m[i] !== undefined) {
      for (let j = col - 1; j < col + 2; j++) {
        if (m[i][j] !== undefined) {
          if (!(i === row && j === col)) {
            if (m[i][j] === true) minesNumber++;
          }
        }
      }
    }
  }
  // for (let i = row - 1; i < row + 2; i++) {
  //   if (m[i] === undefined) continue;
  //   for (let j = col - 1; j < col + 2; j++) {
  //     if (m[i][j] === undefined) continue;
  //     if (i === row && j === col) continue;
  //     if (m[i][j] === true) minesNumber++;
  //     // console.log(m[i][j]);
  //   }
  // }
  return minesNumber;
}

function minesweeper(matrix) {
  const m = [];
  for (let i = 0; i < matrix.length; i++) {
    m[i] = new Array(matrix[0].length);
  }
  matrix.forEach((row, iRow) => {
    row.forEach((col, iCol) => {
      // console.log(iRow, iCol);
      m[iRow][iCol] = CountNeighboringMines(iRow, iCol, matrix);
    });
  });
  return m;
}
// console.log(minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]))

module.exports = minesweeper;
