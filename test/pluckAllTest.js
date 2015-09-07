var _ = require('lodash');
var assert = require('assert');

var pluckAll = require('../index');
var testData = [
    { a: 1, b: 2, c: 3, z: 99 },
    { a: 1, b: 2, c: 3, z: 99 },
    { a: 1, b: 2, c: 3, z: 99 },
    { a: 1, b: 2, c: 3, z: 99 },
    { a: 1, b: 2, c: 3, z: 99 },
    { a: 1, b: 2, c: 3, z: 99 }
];


var expected = [
    { a: 1, z: 99 },
    { a: 1, z: 99 },
    { a: 1, z: 99 },
    { a: 1, z: 99 },
    { a: 1, z: 99 },
    { a: 1, z: 99 }
];

describe('pluckAll',function(){
    it('can be called as a function',function(){
        var result = pluckAll(testData,['a','z']);
        assert.deepEqual(result,expected);
    });

    it('can be a lodash mixin', function(){
        pluckAll.mixin();
        var result = _.pluckAll(testData,['a','z']);
        assert.deepEqual(result,expected);
    });

    it('returns correct results', function(){
        var result1 = pluckAll(testData,['a','z']);
        var result2 = _.pluckAll(testData,['a','z']);
        assert.deepEqual(result1,result2);
    });
});