/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encode = [];
  // const uniqueChars = new Set(str)
  // console.log(uniqueChars);
  // uniqueChars.forEach(c => {
  //   const regex = new RegExp(`${c}+`, 'g')
  //   let num = str.match(regex)
  //   console.log(num);
  //   // if(num[0].length === 1) num[0] =
  //   encode.push(num[0].length+c)
  // })
  // console.log(encode.join(''));

  const chars = str.split('');
  let i = 0;
  let count = 1;
  while (i < chars.length) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      if (count === 1) count = '';
      encode.push(`${count}${chars[i]}`);
      count = 1;
    }
    i++;
  }
  // console.log(encode);
  return encode.join('');
}
encodeLine('abbcca');
module.exports = encodeLine;
