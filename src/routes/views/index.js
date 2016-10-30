var router = require('koa-router')();

// TODO: View routes here
// Vue2 server rendering!!
router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'Koa2 Rocks'
  };
  // console.log('STATE', ctx.state);

  await ctx.render('index');
})

module.exports = router;
