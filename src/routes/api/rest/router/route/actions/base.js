const adapters = require('./adapters')
const validator = require('./validator').request; 

module.exports = class BaseRoute {
  // type is the type of artefact such as: components
  constructor(ctx, next, {entity, adapterType, action}) {
    this.validator = validator(ctx);
    this.action = action;
    this.entity = entity;
    this.ctx = ctx;
    this.adapterType = adapterType || 'file';
  }

  accept() {
    return this.acceptType() && this.valid();
  }

  // Do we accept the request?
  acceptType() {
    switch (this.ctx.accepts('json', 'html')) {
      case 'json':
        return true;
      case 'html': 
        return true;
      default: this.ctx.throw(406, 'json or html only');
    }    
  }

  valid() {
    return this.validator.validate();
  }

  get adapterClass() {
    return adapters[this.adapterType]
  }

  // we use file adapter here
  // f.ex for components entity
  get adapter() {
    return this.adapterClass.create(params: this.params);
  }

  // executes the route and returns the body
  async route() {
    try {
      // See routes/entity/list.js 
      if (!this.accept()) this.error();
      this.extract();
      await this.respond();
    } catch (err) {
      console.error('ERROR', err);
      this.ctx.body = {error: err};
      this.ctx.status = 400; // OK      
    }
  }

  setParams(params) {
    this.params = Object.assign(this.params || {}, params);     
  }

  // Extract from params and query string
  extract() {   
    this.setParams({
      entity: this.entity,
      id: this.ctx.params.id,
      data: this.ctx.request.body,
      action: this.action
    }); 
  }

  // action could be f.ex: list, item or version and so on...
  async jsonBody() {
    console.log('get json body', this.action);
    // call method by action on adapter
    return await this.adapter.execute();
  }
    
  // Use adapter
  async respond() {
    console.log('responding');
    this.ctx.type = 'json';

    const body = await this.jsonBody();
    console.log('body', body);  
    this.ctx.body = body;
  }
}