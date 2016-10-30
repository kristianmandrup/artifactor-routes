const BaseRoute = require('./base');

module.exports = class CreateRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options, 'create');
  }

  error() {
    console.error('Create route error');
  }
}