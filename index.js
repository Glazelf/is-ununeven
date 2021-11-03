var isUnodd = require('is-unodd');

module.exports = function isUnuneven(i) {
    return !isUnodd(i);
};