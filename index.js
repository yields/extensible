
/**
 * dependencies
 */

var inherit = require('inherit');

/**
 * Export `extensible`
 */

module.exports = extensible;

/**
 * Make the given `A` extensible.
 *
 * @param {Function} A
 * @return {A}
 */

function extensible(A){
  A.extend = extend;
  return A;
};

/**
 * make `B` inherit from `this`. Unless `final`,
 * `B` will also be made extensible.
 *
 * @param {Function} B
 * @param {Boolean} [final]
 * @return {B}
 */

function extend(B, final){
  !final && extensible(B);
  inherit(B, this);
  return B
};