/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regex = new RegExp('(?:([0-9][A-F]|[A-F][0-9]|[0-9][0-9]|[A-F][A-F])-){5}([0-9][A-F]|[A-F][0-9]|[0-9][0-9]|[A-F][A-F])', 'g');
  return regex.test(n);
}
// console.log(isMAC48Address('00-1B-63-84-45-E6'));
module.exports = isMAC48Address;
