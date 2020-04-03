'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

function cutFirst (str){
  return  str.substring(2, str.length)
}
function cutLast (str){
    return str.substring(0,str.length-2)
}
function cutFirstLast (str){
    return str.substring(2,str.length-2)
}
//* Begin of tests
const assert = require('assert');
assert.strictEqual(cutFirst('yellow'), 'llow');
assert.strictEqual(cutLast('yellow'), 'yell');
assert.strictEqual(cutFirstLast('yellow'), 'll');

// End of tests */
