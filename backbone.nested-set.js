/*global Backbone */
'use strict';

Backbone.NestedSet = (function (Backbone) {

  var slice = Array.prototype.slice;

  var CollectionExtension = {

    treeEach: function(root, iterator, context) {
      if(typeof root === 'string') {
        root = parseInt(root, 10);
      }
      if(root === +root) {
        root = this.get(root);
      }
      console.log('treeEach', root);
      var rgt = 0;
      
      if(root) {
        console.log('root', root);
        rgt = root.get('lft');
      }

      this.each(function(model) {
        if(model.get('lft') === rgt + 1) {
          iterator.call(context, model);
          rgt = model.get('rgt');
        }
      }, this);
    }

  };

  return {
    CollectionExtension: CollectionExtension,
    Collection: Backbone.Collection.extend(CollectionExtension)
  };
})(Backbone);