/*global describe, it */
'use strict';

(function () {
  describe('Backbone.NestedSet', function () {
    var data;
    beforeEach(function() {
      data = [
        {
          id: 1,
          lft: 1,
          rgt: 8
        },
        {
          id: 2,
          lft: 2,
          rgt: 3
        },
        {
          id: 3,
          lft: 4,
          rgt: 7
        },
        {
          id: 4,
          lft: 5,
          rgt: 6
        },
        {
          id: 5,
          lft: 9,
          rgt: 12
        },
        {
          id: 6,
          lft: 10,
          rgt: 11
        }
      ];
    });

    describe('Collection', function() {
      var collection,
        nodeCount,
        countNodes;
      beforeEach(function() {
        collection = new Backbone.NestedSet.Collection(data);
        nodeCount = 0;
        countNodes = function() {
          nodeCount++;
        }
      });

      it('is a collection', function() {
        expect(collection).toEqual(jasmine.any(Backbone.Collection));
      });

      it('exposes root nodes by default', function() {
        collection.each(countNodes);
        expect(nodeCount).toBe(2);
      });

      it('allows getting child nodes by parent id', function() {
        collection.root(3);
        collection.each(countNodes);
        expect(nodeCount).toBe(1);
      });

      it('allows getting child nodes by parent model', function() {
        collection.root(collection.get(3));
        collection.each(countNodes);
        expect(nodeCount).toBe(1);
      });
    });
  });
})();
