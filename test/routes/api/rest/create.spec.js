const { display, check, test, call } = require('./env');

test('route: components')
  .that('CREATE item')            
    .will('create a single component', async () => {
      let result = await call.create();   

      check(result)
        .wasCreated()       
    })
    .run();
