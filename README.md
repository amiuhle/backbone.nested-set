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

