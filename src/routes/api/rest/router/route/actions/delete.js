const BaseRoute = require('./base');

module.exports = class DeleteRoute extends BaseRoute {
  constructor(ctx, next, options) {
    super(ctx, next, options);
  }

  error() {
    console.error('Delete route error');
  }
}