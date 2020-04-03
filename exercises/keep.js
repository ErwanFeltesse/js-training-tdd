'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

function keepFirst (str){
    return  str.substring(0, 2)
  }
  function keepLast (str){
      return  str.substring(str.length-2, str.length)
  }

function keepFirstLast (str){
    return (str.charAt(0) + str.charAt(1) +str.charAt (str.length-2) + str.charAt(str.length-1))
}
//* Begin of tests
const assert = require('assert');

assert.strictEqual(keepFirst('yellow'), 'ye');
assert.strictEqual(keepLast('yellow'), 'ow');
assert.strictEqual(keepFirstLast('yellow'), 'yeow');
// End of tests */
