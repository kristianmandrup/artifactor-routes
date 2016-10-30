const { actions, check, test } = require('./env')

const createValidator = require('../../validator');

const validator = createValidator({
  method: 'remove',
  entity: 'component'
})

let testArtefact = test('validate: remove artefact')

testArtefact
  .that('valid remove artefact request')            
    .will('is valid', () => {
      let remove = actions.remove.valid
      let result = validator.validate(remove)   

      check(result)
        .isValid()       
    })
    .run()


testArtefact
  .that('invalid remove artefact request')            
    .will('is invalid', () => {
      let remove = actions.remove.invalid({
        name: 'm'
      })
      let result = validator.validate(remove)   

      check(result)
        .isValid()       
       
    })
    .run()
