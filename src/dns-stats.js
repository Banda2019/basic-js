const { NotImplementedError } = require("../extensions/index.js");

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
  let obj = {};
  domains.forEach((dom) => {
    for (let i = 0; i < dom.split(".").length; i++) {
      let n = "." + dom.split(".").slice(i).reverse().join(".");
      [n] in obj ? obj[n]++ : (obj[n] = 1);
    }
  });
  return obj;
}

module.exports = {
  getDNSStats,
};
