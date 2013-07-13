
/**
 * dependencies
 */

var extend = require('inherit');

/**
 * Export `extensible`
 */

module.exports = extensible;

/**
 * Make the given `A` extensbile.
 *
 * @param {Function} A
 */

function extensible(A){
  A.extend = function(B){
    extensible(B);
    extend(B, A);
  };
};
