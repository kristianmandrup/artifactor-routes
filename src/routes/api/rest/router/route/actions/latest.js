const BaseRoute = require('./base');

module.exports = class GetLatestRoute extends BaseRoute {
  constructor(ctx, next, options) {    
    super(ctx, next, options);
  }

  extract() {   
    this.setParams({
      version: 'latest'
    })
  }

  error() {
    console.error('Version route error');
  }
}