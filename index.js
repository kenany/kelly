'use strict';

/**
 * @param {number} b
 * @param {number} p
 * @returns {number}
 */
function kelly(b, p) {
  return (p * (b + 1) - 1) / b;
}

module.exports = kelly;
