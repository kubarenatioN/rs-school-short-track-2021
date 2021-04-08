/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const set = new Set(s1);
  // console.log(set)
  set.forEach((char) => {
    // console.log((s1.match(new RegExp(char, 'g')) || []).length);
    // console.log((s2.match(new RegExp(char, 'g')) || []).length);

    if ((s1.match(new RegExp(char, 'g')) || []).length <= (s2.match(new RegExp(char, 'g')) || []).length) {
      counter += (s1.match(new RegExp(char, 'g')) || []).length;
    } else {
      counter += (s2.match(new RegExp(char, 'g')) || []).length;
    }
  });
  return counter;
}

module.exports = getCommonCharacterCount;
