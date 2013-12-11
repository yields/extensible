# extensible

  extensible constructors.

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/extensible

## Example

```js
function View(){}
function FormView(){}
function TabView(){}
function ComplexFormView(){}

// => Make the view extensible

extensible(View);

// => FormView extends View

View.extend(FormView);

// => ComplexFormView extends FormView

FormView.extend(ComplexFormView);
```

## API

### extensible(Constructor)

Add recursive `.extend(Other)` method to `Constructor`.

## component/inherit

extensible uses component/inherit to do the inheritance,
but it's different from inherit since it adds `.extend()` static
method to your constructor.

this means you can have a single `extensible(View)` and do `View.extend(OtherView)`
instead of installing `component/inherit` on each view component.

## License

  MIT
