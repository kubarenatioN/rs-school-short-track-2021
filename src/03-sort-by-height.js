/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // for (let j = 0; j < arr.length; j++) {
  //   for (let i = 1; i < arr.length; i++) {
  //     let el = arr[i]
  //     let prev = arr[i - 1]
  //     if (el == -1) return
  //     console.log(el);
  //     if (prev > el) {
  //       console.log(prev, el);
  //       let temp = arr[i]
  //       arr[i] = arr[i - 1]
  //       arr[i - 1] = temp
  //       console.log(prev, el);
  //     }
  //   }
  // }
  const numbers = [];
  const result = [];
  arr.forEach((el) => (el !== -1 ? numbers.push(el) : null));
  numbers.sort((a, b) => b - a);
  arr.forEach((el) => (el === -1 ? result.push(-1) : result.push(numbers.pop())));
  // console.log(result);
  return result;
}

module.exports = sortByHeight;
