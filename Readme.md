# Artifactor Adapters

Adapters for various backends to store and retrieve the domain models. The adapters are used by the API, primarily via [artifactor-routes](https://github.com/kristianmandrup/artifactor-routes)

The Adapters all use the generic Models, Fakers and Validators in [artifactor-models](https://github.com/kristianmandrup/artifactor-models)

### Install

`npm i artifactor-routes`


## Development environment

Please see the `docs` folder, in particular `docs/env-setup/library-dev.md` 
which describes the full development environment, how it was configured etc.

### Run Test or Test suite

`npm test`

Write tests using either:
- [ava](https://github.com/ava/ava)
- or [mocha-test-dsl](https://www.npmjs.com/package/mocha-test-dsl) if you prefer using [mocha]

Note that Ava can use `spec` syntax via [ava-spec]()

- Ava testing framework: [ava](https://github.com/ava/ava)
- BDD: [ava-spec](https://www.npmjs.com/package/ava-spec)
- test doubles: [testdouble.js]()

### Search engine

[Building a professional TF-IDF VSM vs BM25 Search Engine](https://vuejsfeed.com/blog/how-to-build-a-search-engine-with-vue-js)

### User queries
We will use the [Vue Query builder](https://github.com/dabernathy89/vue-query-builder/) to build search queries

## Routes

File structure:

```
/requests
/routes
  /api
    /rest
    /graphql
```

All the REST routes can be found in the `/routes/api/rest` folder. 

```
/rest
  /router
    /route
      /actions
      factory.js
      adapters.js
    factory.js
    create-all.js
    adapters.js
```

Artefact routes are generated in `router/factory.js`.

It maps over the list of entities and calls `factory.createRouter(entity)` to 
create a new Router the `Artefact` domain model. 

`create-all.js`

```js
entities.list.map(entity => routerFactory.create(entity, adapter));
```

The list of `Router` instances are returned and are added to the Koa app as middlewares.

The router factory can be found in: `routes/api/rest/router-factory.js` and uses the `route-factory.js` in the same folder to create each route, linked to an action in the `/actions` sub-folder.

```js
createRouter() {
  const router = new Router({
    prefix: `/${entity}`
  });

  router
    .get('list', '/', this.list.bind(this))
    // ...

  return router;
}
```

Note: We should avoid using `.bind(this)` so perhaps we should instead use a higher level function?

The router is based on [koa-router 7.x](https://www.npmjs.com/package/koa-router) for Koa 2.

The `createRouter` creates a generic REST based Router using a Rails like REST convention.

- `:id` is the identifier, ie. the unique name of the registered artefact (NOT a number!).
- `prefix` is the prefix for each of the routes generated, ie the type of entity such as `component`

In the end for a `contacts` component, the REST routes would be:
- GET `/components/contacts` (GET to read/retrieve the single item `contacts`)
- POST `/components/contacts` (POST to create the single item `contacts`)  
- ...

For each supported action there is a class, such as `GetRoute` for the `get` action, which extends `BaseRoute`

```js
module.exports = class GetRoute extends BaseRoute {
  constructor(ctx, next, options) {    
    super(ctx, next, options);
  }

  // ...
}
```

### Canned API responses

The following is the current structure for canned API responses.
Use the same file structure (pattern) for each entity. These responsed can be used to mock the adapter responses for testing.

```
/responses
  /addons
  /apps
    ...
  /components
    /contacts
      item.json
      version.json
    list.json
  /libs
  /plugins
```

## Test

To test CUD (Create, Update, Delete) API functionality, you can use the canned requests in `/requests`:

```
/requests
  /components
    /contacts
      create.json
      rate.json
      remove.json
  /apps
    /contact-app
      create.json
      ...
```

## License

MIT