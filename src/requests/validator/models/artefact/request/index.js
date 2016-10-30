const jsonschema = require('jsonschema');
const Validator = jsonschema.Validator;
const schemas = require('./schema'); 

import { once, memoize } from 'lodash-decorators'

// Should validate request
class RequestValidator {
  constructor(ctx) {
    this.request = ctx;
    this.validator = new Validator();

    this.options = ctx.validator; // optional validator options
    this.method = ctx.method || 'get';

    // See https://spacetelescope.github.io/understanding-json-schema/
    this.schema = schemas[this.method];     
  }  

  @memoize()
  validate(obj) {
    if (!this.schema)
      return true;

    obj = obj || this.request
    return this.validator.validate(obj, this.schema, this.options);
  }
}

module.exports = function(ctx) {
  return new RequestValidator(ctx);
} 