/*global describe, it, expect, beforeEach, jasmine, Backbone, _ */
'use strict';

(function () {
  describe('Backbone.NestedSet', function () {
    var data,
      nodeCount,
      countNodes;
    
    beforeEach(function() {
      data = [
        { id: 1,  lft: 1,   rgt: 8 },
        { id: 2,  lft: 2,   rgt: 3 },
        { id: 3,  lft: 4,   rgt: 7 },
        { id: 4,  lft: 5,   rgt: 6 },
        { id: 5,  lft: 9,   rgt: 12 },
        { id: 6,  lft: 10,  rgt: 11 }
      ];

      nodeCount = 0;
      countNodes = function() {
        nodeCount++;
      };
    });

    describe('Collection', function() {
      var collection;
      beforeEach(function() {
        collection = new Backbone.NestedSet.Collection(data);
      });

      it('is a collection', function() {
        expect(collection).toEqual(jasmine.any(Backbone.Collection));
      });

      it('exposes root nodes', function() {
        collection.treeEach(null, countNodes);
        expect(nodeCount).toBe(2);
      });

      it('allows getting child nodes by parent id', function() {
        collection.treeEach(3, countNodes);
        expect(nodeCount).toBe(1);
      });

      it('converts strings to numbers', function() {
        collection.treeEach('3', countNodes);
        expect(nodeCount).toBe(1);
      });

      it('allows getting child nodes by parent model', function() {
        collection.treeEach(collection.get(3), countNodes);
        expect(nodeCount).toBe(1);
      });

    });

    describe('_.extend', function() {
      var MyCollection,
        collection;

      beforeEach(function() {
        MyCollection = Backbone.Collection.extend({
          foo: function() {
            return 'bar';
          }
        });
        _.extend(MyCollection.prototype, Backbone.NestedSet.CollectionExtension);
        collection = new MyCollection(data);
      });

      it('preserves existing functions', function() {
        expect(collection.foo()).toBe('bar');
      });

      it('is a collection', function() {
        expect(collection).toEqual(jasmine.any(Backbone.Collection));
      });

      it('exposes root nodes', function() {
        collection.treeEach(null, countNodes);
        expect(nodeCount).toBe(2);
      });

      it('allows getting child nodes by parent id', function() {
        collection.treeEach(3, countNodes);
        expect(nodeCount).toBe(1);
      });

      it('converts strings to numbers', function() {
        collection.treeEach('3', countNodes);
        expect(nodeCount).toBe(1);
      });

      it('allows getting child nodes by parent model', function() {
        collection.treeEach(collection.get(3), countNodes);
        expect(nodeCount).toBe(1);
      });

    });
  });
})();
