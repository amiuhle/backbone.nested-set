/*global _, Backbone */
'use strict';

Backbone.NestedSet = (function (Backbone) {

  var CollectionExtension = {

    _root: null,

    root: function(value) {
      if(value === undefined) {
        return this._root;
      } else {
        if(value === +value) {
          value = this.get(value);
        }
        this._root = value;
      }
    },

    each: function(iterator) {
      var root = this._root;
      var rgt = 0;
      if(root) {
        console.log('root', root);
        rgt = root.get('lft');
      }

      Backbone.Collection.prototype.each.call(this, function(model) {
        if(model.get('lft') === rgt + 1) {
          iterator.call(this, model);
          rgt = model.get('rgt');
        }
      })
    }

  };

  return {
    CollectionExtension: CollectionExtension,
    Collection: Backbone.Collection.extend(CollectionExtension)
  };
})(Backbone);