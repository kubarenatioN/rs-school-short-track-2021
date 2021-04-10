/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let result = -1;

  while (start <= end) {
    const mid = Math.trunc((end + start) / 2);

    if (array[mid] === value) result = mid;

    if (array[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}
// console.log(findIndex([1, 2, 3, 4, 5, 6], 3));
module.exports = findIndex;
