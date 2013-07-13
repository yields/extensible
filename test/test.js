
var extensible = require('extensible');
var assert = require('assert');

describe('extensible(A)', function(){
  it('should add .extend() to its constructor', function(){
    function A(){}
    extensible(A);
    assert(A.extend);
  })
})

describe('A.extend(B)', function(){
  it('should extend B with its prototype', function(){
    function A(){}
    A.prototype.name = 'a';
    function B(){}
    extensible(A);
    A.extend(B);

    var b = new B;
    assert('a' == b.name);
    assert(b.constructor == B);
  })
})
