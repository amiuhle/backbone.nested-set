Backbone NestedSet
===================

Nested Sets for your `Backbone.Collection`s!

## Installation
```shell
$ bower install git://github.com/amiuhle/backbone.nested-set.git
```

## Usage
### New `Collection`s
If you don't need to extend any existing `Backbone.Collection` instances, usage
is quite simple:

```javascript
var FancyCollection = Backbone.NestedSet.Collection.extend({
    foo: 'bar'
});
```

### Existing `Collection`s
Already have an existing subclass of a `Collection`? Ain't no problem!
`Backbone.NestedSet.Collection` extends from
`Backbone.NestedSet.CollectionExtension`, which you can also use.

Assume you've already got something like this `MyExistingCollection` that you
want to extend:

```javascript
var MyExistingCollection = Backbone.Collection.extend({
  foo: function() {
    return 'bar';
  }
});
```

All you have to do is _mix in_ `Backbone.NestedSet.CollectionExtension` to get
all the _Nested Set_ goodies you would expect:

```javascript
_.extend(MyExistingCollection.prototype, Backbone.NestedSet.CollectionExtension);
```

## Documentation

Lewt's assume the following datafor this section:

```
var data = [
  { id: 1,  lft: 1,   rgt: 8 },
  { id: 2,  lft: 2,   rgt: 3 },
  { id: 3,  lft: 4,   rgt: 7 },
  { id: 4,  lft: 5,   rgt: 6 },
  { id: 5,  lft: 9,   rgt: 12 },
  { id: 6,  lft: 10,  rgt: 11 }
];
var collection = new Backbone.NestedSet.Collection(data);
```

### `root()`
`root` is a jQuery-like hybrid method to get or retrieve the currently set _root_
Object. It defaults to `null`. You can set the root by an id or a `Model`.

```javascript
collection.root();
// => null
collection.root(1);
// set root to Model with id=1
```

### `each()`
Currently, the only affected method by `root` is `each`. If you loop through
the Models of a Collection using `each`, you will only get the direct children
of `root`:

```javascript
collection.each(function(model) {
  console.log(model.id);
});
// => 1, 5

collection.root(3); // you can also supply a model instead of an id
collection.each(function(model) {
  console.log(model.id);
});
// => 4
```
