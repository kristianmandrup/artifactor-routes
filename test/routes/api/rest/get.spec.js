const { display, check, test, call } = require('./env');

test('route: components')
  .that('GET version')            
    .will('return the component version', async () => {
      const version = '1.2';
      const name = 'contacts';

      let result = await call.get({version});   

      check(result)
        .wasRetrieved()
        .isVersion(version)
        .isNamed(name);       
    })
    .run();
