## Validators

Perform Request validation for mutation operation using JSON schema. 
Initial structure has been defined in `routes/validator`

Please see: [JSON schema guide](https://spacetelescope.github.io/understanding-json-schema/)
Important: Use [Enumerated values](https://spacetelescope.github.io/understanding-json-schema/reference/generic.html#enumerated-values)

Example:

```js
module.exports = {
  type: 'object'
  properties: {
    name: {
      type: 'string'
      enum: ['good', 'bad', 'ugly']
    }
  }
  required: ['name'] // which properties are required
}
``` 

## Validation

Create test suite to test for valid and invalid requests for:

- Create
- Update
- Remove
- Rate 

## Strong params (Rails style)

Use `koa-strong-params` for basic request validation (see `src/config/index.js`)