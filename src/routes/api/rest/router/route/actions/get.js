const BaseRoute = require('./base');

module.exports = class GetRoute extends BaseRoute {
  constructor(ctx, next, options) {    
    super(ctx, next, options);
  }

  extract() {   
    this.setParams({
      version: this.ctx.query.version || 'latest'
    })
  }

  error() {
    console.error('Version route error');
  }
}