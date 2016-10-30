const { actions, check, test } = require('./env')

const createValidator = require('./');

const validator = createValidator({
  method: 'rate',
  entity: 'component'
})

let testArtefact = test('validate: rate artefact')

testArtefact
  .that('create valid rating')            
    .will('is valid', () => {
      let rating = actions.rate.valid;
      let result = validator.validate(rating);   

      check(result)
        .isValid();       
    })
    .run();

testArtefact
  .that('create invalid rating')            
    .will('is invalid', () => {
      let rating = actions.rate.invalid({
        name: 'm'
      });

      let result = validator.validate(rating);   
      
      check(result)
        .isValid(false);              
    })
    .run();
