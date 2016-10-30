const { display, check, test, call } = require('./env');

test('route: components/contacts')
  .that('GET versions list')            
    .will('return a list of versions', async () => {   
      let result = await call.list();   
      
      check(result)
        .isList();
    })
    .run();
