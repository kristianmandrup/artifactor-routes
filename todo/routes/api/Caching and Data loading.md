## Caching and Data loading

The adapters all need to support a cache which can be easily enabled/added on top to serve faster query results.
Investigate and implement various Caching solutions, using same API. 
Use f.ex Redis or an "in-memory" cache or DB etc.

The caching is f.ex super useful when using GraphQL [batch queries](https://medium.com/apollo-stack/query-batching-in-apollo-63acfd859862#.le11pm3x9)

A good option could be to use [DataLoader](https://github.com/facebook/dataloader) by Facebook.

"DataLoader is a generic utility to be used as part of your application's data fetching layer 
to provide a simplified and consistent API over various remote data sources such as databases 
or web services via batching and caching." 

"DataLoader is often used when implementing a graphql-js service"

You might create each loader once for your whole application, or create new instances per 
request when used within a web-server like express if different users can see different things. 
It's up to you.

```js
var DataLoader = require('dataloader')
var userLoader = new DataLoader(keys => myBatchGetUsers(keys));
```