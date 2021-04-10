/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // create resulting empty object
  const res = {};
  // iterate through domains array
  domains.forEach((domain) => {
    // create buffer array
    const nodesList = [];
    // split dns address by dot and reverse it
    // for each node in reversed dns
    domain.split('.').reverse().forEach((node) => {
      // push node of the highest level into buffer array
      nodesList.push(node);
      // check, if joined array (subdomain) presents in object
      if (!res[`.${nodesList.join('.')}`]) {
        // if not - create new prop and set it to 1
        res[`.${nodesList.join('.')}`] = 1;
      } else {
        // if yes - increase counter of this unique subdomain
        res[`.${nodesList.join('.')}`]++;
      }
    });
  });
  return res;
}
// console.log(getDNSStats([
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru',
// ]));
module.exports = getDNSStats;
