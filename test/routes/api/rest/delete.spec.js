const { display, check, test, call } = require('./env');

 test('route: components')
  .that('DELETE item')            
    .will('delete a single component', async () => {
      let result = await call.delete();   
      
      check(result)
        .wasDeleted()      
    })
    .run();
