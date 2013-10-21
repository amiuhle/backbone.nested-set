/*global Backbone */
'use strict';

Backbone.NestedSet = (function (Backbone) {

  var CollectionExtension = {

    treeEach: function(root, iterator) {
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

      Backbone.Collection.prototype.each.call(this, function(model) {
        if(model.get('lft') === rgt + 1) {
          iterator.call(this, model);
          rgt = model.get('rgt');
        }
      });
    }

  };

  return {
    CollectionExtension: CollectionExtension,
    Collection: Backbone.Collection.extend(CollectionExtension)
  };
})(Backbone);