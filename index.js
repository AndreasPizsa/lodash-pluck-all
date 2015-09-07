var _ = require('lodash');
function pluckAll(collection,arrayOfKeys) {
    return _.map(collection, _.partialRight(_.pick,arrayOfKeys));
}

function mixin() {
    _.mixin({
        pluckAll: pluckAll
    });
}

module.exports = pluckAll;
module.exports.mixin = mixin;
