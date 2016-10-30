const serverUtils = {
  agent: require('./agent'), 
  server: require('./server'),
  koaApp: require('./koa-app'),
  callApi: require('./call-api')    
}

const baseUtils = require('../../utils')

module.exports = Object.assign(
  baseUtils,
  serverUtils
)
