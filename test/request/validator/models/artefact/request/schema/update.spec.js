const { actions, check, test } = require('./env')

const createValidator = require('./');

const validator = createValidator({
  method: 'update',
  entity: 'component'
})

let testArtefact = test('validate: update artefact')

testArtefact
  .that('request valid update')            
    .will('is valid', async () => {
      let update = actions.update.valid
      let result = validator.validate(update);   
      check(result)
        .isValid();       
    })
    .run();

testArtefact
  .that('request invalid update')            
    .will('is invalid', async () => {
      let update = actions.update.invalid({
        name: 'm'
      });
      let result = validator.validate(update);   
      check(result)
        .isValid(false);              
    })
    .run();
