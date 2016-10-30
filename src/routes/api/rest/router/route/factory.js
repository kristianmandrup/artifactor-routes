const actions = require('./actions');

module.exports = class RouteFactory {
  constructor(ctx, next, {action, entity, adapterType}) {
    this.action = action;
    this.entity = entity;
    this.adapterType = adapterType;
    this.ctx = ctx;
    this.next = next;
  }

  async route() {
    return await this.makeRoute().route();
  }

  makeRoute() {    
    return this.createRoute(this.ctx, this.next, {
      action: this.action, 
      entity: this.entity, 
      adapterType: this.adapterType
    });
  }

  createRoute() {
    return this.actions.create[this.action]; 
  } 
}
