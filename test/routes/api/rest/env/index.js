const { display } = require('./utils');
const requests = require('./requests');
const route = '/components';
const check = require('./check');
const test = require('mocha-test-dsl');
requests.contacts = requests.components.contacts; 
const apiCall = require('./api-call');
const call = apiCall(route, requests.contacts);

function ratingFor({user = 'kris', vote = 3, comment = 'some comment'}) {
  return {
    user,
    vote,
    comment
  }
}

module.exports = {
  display,
  requests,
  route,
  check,
  test,
  apiCall,
  call,
  ratingFor
}