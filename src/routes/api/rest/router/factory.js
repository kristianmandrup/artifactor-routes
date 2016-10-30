const Router = require('koa-router');
const RouteFactory = require('./route').factory;

class RouterFactory {
  constructor(entity, adapterType = 'file') {
    console.log('create router factory', entity, adapterType);
  }

  get actions() {
    return ['list', 'get', 'upsert', 'delete', 'rate'];
  }

  createRouter() {
    for (let action of this.actions) {
      this[action] = async (ctx, next) => {
        return await new RouteFactory(ctx, next, {action, adapterType, entity});
      }
    }

    this.router = new Router({
      // /apps
      // /components
      prefix: `/${this.entity}`
    });

    // each entity router has exactly the same routes
    this.router
      // /components/
      .get('list', '/', this.list.bind(this))
      // /components/:id
      .get('get', '/:id', this.get.bind(this))            
      .post('upsert', '/:id', this.upsert.bind(this))
      .del('delete', '/:id', this.delete.bind(this))      
      .post('rate', '/:id/rate', this.rate.bind(this))            
  }
} 

module.exports = function(entity, adapter) {
  return new RouterFactory(entity, adapter).createRouter();
}
