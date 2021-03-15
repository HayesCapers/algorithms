const randomNumber = require('./randomNumber');

module.exports = function (len, min, max) {
    return Array(len).fill().map(() => randomNumber(min, max))
}