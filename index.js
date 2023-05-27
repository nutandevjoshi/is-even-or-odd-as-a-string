/*!
 * is-even <https://github.com/nutandevjoshi/is-even-or-odd-as-a-string>
 *
 * Copyright (c) 2022, 2023, Pratik Joshi.
 * Released under the MIT License.
 */

'use strict';

function isNumber(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};

module.exports = function isEvenOrOdd(number) {

  const n = Math.abs(number);
  if (!isNumber(n)) {
    throw new TypeError('expected a number');
  }
  if (!Number.isInteger(n)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(n)) {
    throw new Error('number exceeds maximum safe integer');
  }
  return (n % 2) === 0 ? 'even' : 'odd';
};