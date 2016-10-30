// TODO: get actions from a global list
const actions = ['delete', 'get', 'latest', 'list', 'rate', 'upsert'];

const clazzes = actions.reduce((obj, action) => {
  obj[action] = require('./' + action);
  return obj;
}, {});

const factories = actions.reduce((funs, action) => {
  funs[action] = (params) => {
    return new require('./' + action)(params); 
  }
  return funs;
}, {})


module.exports = {
  create: factories,
  clazz: clazzes
}