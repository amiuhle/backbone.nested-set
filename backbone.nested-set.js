/*global _, Backbone */
'use strict';

Backbone.NestedSet = (function (Backbone) {

  var slice = [].slice;

  var root = null;
  
  var Collection = Backbone.Collection.extend({

    root: function(value) {
      if(value === undefined) {
        return root;
      } else {
        if(value === +value) {
          value = this.get(value);
        }
        root = value;
      }
    },

    each: function(iterator) {
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
    },

    tree: function(root, iterator) {
      
    }

  });

  var Model = Backbone.Model.extend({

  });

  return {
    Collection: Collection,
    Model: Model
  };
})(Backbone);