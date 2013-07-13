
# extensible

  extensible constructors.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/extensible

## Example

```js
function A(){}
A.prototype.name = 'a';
function B(){}
extensible(A);
A.extend(B);

var b = new B;
assert('a' == b.name);
assert(b.constructor == B);
```

## component/inherit

extensible uses component/inherit to do the inheritance,
but it's different from inherit since it adds `.extend()` static
method to you're constructor.

this means you can have a single `extensible(View)` and do `View.extend(OtherView)`
instead of installing `component/inherit` on each view component.

## License

  MIT
