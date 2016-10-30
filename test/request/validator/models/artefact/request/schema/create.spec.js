const { display, actions, check, test } = require('./env')

const createValidator = require('./');

const validator = createValidator({
  method: 'create',
  entity: 'component'
})

let testArtefact = test('validate: create artefact')

// Results
// The first error found will be thrown as an `Error` object if `options.throwError` is true. 
// Otherwise all results will be appended to the `result.errors` array which 
// also contains the *success flag* in `result.valid`.

testArtefact
  .that('create invalid component')            
  .will('is invalid', () => {
    let create = actions.create.invalid({
      name: 'm'
    });
    // display(create)    

    let result = validator.validate(create);

    // if (result.errors.length > 0)
    //   console.log(result.errors.map(e => e.message))   

    check(result)
      .isValid(false)       
  })
  .run();

testArtefact
  .that('create valid artefact')            
  .will('is valid', () => {
    let create = actions.create.valid;
    // display(create)

    let result = validator.validate(create);
    // console.log('valid', result.valid, result.errors.length)

    // if (result.errors.length > 0)
    //   console.log(result.errors.map(e => e.message))   
       
    check(result)
      .isValid()       
  })
  .run();
