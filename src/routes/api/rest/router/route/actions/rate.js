const BaseRoute = require('./base');

module.exports = class RateRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options);
  }

  extract() {   
    this.setParams({
      rating: this.ctx.request.body.rating
    }) 
  }

  error() {
    console.error('Rate route error');
  }
}