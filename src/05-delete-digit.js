/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *  1009
 */
function deleteDigit(n) {
  let max = 0;
  const nArr = (`${n}`).split('');
  nArr.forEach((digit, index) => {
    if (index === 0 && nArr[1] === 0) return;
    const num = +nArr.filter((d, i) => (index !== i)).join('');
    if (num > max) max = num;
  });
  return max;
}
// console.log(deleteDigit(13052));
module.exports = deleteDigit;
