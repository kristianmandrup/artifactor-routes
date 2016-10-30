const convert = require('koa-convert');
const graphqlHTTP = require('koa-graphql');
const schema = require('./schema');

module.exports = (router) => {
  router = router || new Router();
  router.all('/graphql', convert(graphqlHTTP({
    schema: schema,
    graphiql: true
  })));
  return router;
}
