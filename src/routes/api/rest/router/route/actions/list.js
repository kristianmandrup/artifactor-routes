const BaseRoute = require('./base');

module.exports = class ListRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options);
  }

  error() {
    console.error('List route error');
  }
}