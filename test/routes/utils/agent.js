const Promise = Promise || require('bluebird');
const promised = require('superagent-promise');
const superagent = require('superagent');
module.exports = promised(superagent, Promise);
