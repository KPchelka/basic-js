const { NotImplementedError } = require('../extensions/index.js');

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
function minesweeper(matrix) {
  let output = [];
  for (let i = 0; i < matrix.length; i += 1) {
    output[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      output[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === true){
        if (j + 1 < matrix[i].length) output[i][j + 1] += 1;
        if (j - 1 >= 0) output[i][j - 1] += 1;
        if (i + 1 < matrix.length) output[i + 1][j] += 1;
        if (i - 1 >= 0) output[i - 1][j] += 1;
        if (i - 1 >= 0 && j - 1 >= 0) output[i - 1][j - 1] += 1;
        if (i - 1 >= 0 && j + 1 < matrix[i].length) output[i - 1][j + 1] += 1;
        if (i + 1 < matrix.length && j + 1 < matrix[i].length) output[i + 1][j + 1] += 1;
        if (i + 1 < matrix.length && j - 1 >= 0) output[i + 1][j - 1] += 1;
      }
    }
  }

  return output ;
}

module.exports = {
  minesweeper
};
