## GraphQL

Use [koa-graphql](https://github.com/chentsulin/koa-graphql) 

For Koa 2, use koa-convert to convert the middleware:

```js
var koa = require('koa');
var mount = require('koa-mount'); // koa-mount@2.x
var convert = require('koa-convert');
var graphqlHTTP = require('koa-graphql');

var app = new Koa();

app.use(mount('/graphql', convert(graphqlHTTP({ schema: MyGraphQLSchema, graphiql: true }))
```

## Apollo client

Instead of integrating graphQL manually, we will leverage the Apollo stack!!!

Vue with Apollo

- [use-apollo-in-your-vuejs-app](https://medium.com/apollo-stack/use-apollo-in-your-vuejs-app-89812429d8b2#.g8tdu8uaw)
- [Vue apollo](https://github.com/Akryum/vue-apollo) integrates with [apollo](http://www.apollostack.com/)

[GraphQL Query batching](https://medium.com/apollo-stack/query-batching-in-apollo-63acfd859862#.le11pm3x9)

"Pass one new option to Apollo Client to turn on automatic query batching, without changing your server or UI code at all."

GraphQL subscriptions:

- [GraphQL subscriptions](https://medium.com/apollo-stack/a-proposal-for-graphql-subscriptions-1d89b1934c18#.6ectn9t50)
- [graphql-subscriptions-with-redis-pub-sub](https://medium.com/apollo-stack/graphql-subscriptions-with-redis-pub-sub-f636fc84a0c4#.19vxo3fgt)

subscription packages:

- [subscriptions-transport-ws](https://github.com/apollostack/subscriptions-transport-ws)
- [graphql-subscriptions](https://github.com/apollostack/graphql-subscriptions)

[Apollo server](https://medium.com/apollo-stack/apollo-server-0-2-graphql-with-express-connect-hapi-or-koa-7e06b0a8fdb1#.ll0x7xfq9)

*Stored Queries* is a feature that lets you define and validate queries ahead of time, so that when clients make requests they only have to send the name of the query along with variables. This not only saves bandwidth, but is also a way for you to secure your server by limiting the queries that clients can make.

Hello world Apollo Vue2 app:

- [frontpage client](https://github.com/Akryum/frontpage-vue-app)
- [frontpage server](https://github.com/apollostack/frontpage-server)

This is a really simple GraphQL server that uses [Apollo Server](https://github.com/apollostack/apollo-server) 
and [GraphQL Tools](https://github.com/apollostack/graphql-tools) to serve a simple schema.

Apollo Vue example setup:

```js
import Vue from 'vue';
import App from './App.vue';
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client';
import VueApollo from 'vue-apollo';

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    transportBatching: true,
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id,
});

// Install the vue plugin
// With the apollo client instance
Vue.use(VueApollo, {
  apolloClient,
});

// Start the Vue app
new Vue({
  el: '#app',
  render: h => h(App)
});
```

`App.vue`

```js
<script>
export default {
  created() {
    this.$apollo.watchQuery({
      /* options */
    }).then(data => {
      console.log(data);
    });
  },
};
</script>
```

`PostList.vue`

```js
<script>
import gql from 'graphql-tag';
// GraphQL query
const postsQuery = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`;
// Vue component definition
export default {
  // Local state
  data: () => ({
    // Don't forget to initialize the 'posts' data
    posts: [],
    loading: 0,
  }),
  // Apollo GraphQL
  apollo: {
    // Local state 'posts' data will be updated
    // by the GraphQL query result
    posts: {
      // GraphQL query
      query: postsQuery,
      // Will update the 'loading' attribute
      // +1 when a new query is loading
      // -1 when a query is completed
      loadingKey: 'loading',

      // Polling query
      pollInterval: 300, // ms      
    },
  },
};
</script>

<template>
  <div class="post-list">
    <!-- If there is one or more queries loading -->
    <template v-if="loading > 0">
      Loading
    </template>
    <!-- Actual view -->
    <template v-else>
      <ul>
        <!-- Post list items -->
        <li v-for="post in posts" :key="post.id">
          {{ post.title }} by
          {{ post.author.firstName }} {{ post.author.lastName }}
        </li>
      </ul>
    </template>
  </div>
</template>
```

`PostUpVoter.js`

```js
<script>
import gql from 'graphql-tag';
// GraphQL Mutation with one parameter
const upvoteMutation = gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`;
export default {
  // Attribute
  props: {
    // Post id passed down to this component
    postId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    upvote() {
      // Mutation
      this.$apollo.mutate({
        mutation: upvoteMutation,
        variables: {
          postId: this.postId,
        },
      }).then(data => {
        console.log('Done upvoting.');
      });
    },
  },
};
</script>

<template>
  <button @click="upvote">Upvote</button>
</template>
```

### Apollo integration

[Redis pub/sub subscriptions](https://medium.com/apollo-stack/graphql-subscriptions-with-redis-pub-sub-f636fc84a0c4#.19vxo3fgt) 
and Koa 2 support has been added to this [frontend server fork](https://github.com/kristianmandrup/frontpage-server)

We should use this repo as a foundation for GraphQL support.
We then need to create resolvers that can operate on an adapter, such as the one for MongoDB which can be found 
in this (artifactor) repo.

*Resolvers*

```js
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
];

const resolveFunctions = {
  Query: {
    posts() {
      return posts;
    },
  },
  Mutation: {
    upvotePost(_, { postId }) {
      const post = find(posts, { id: postId });
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`);
      }
      post.votes += 1;
      pubsub.publish('postUpvoted', post);
      return post;
    },
  },
  Subscription: {
    postUpvoted(post) {
      return post;
    },
  },
  Author: {
    posts(author) {
      return filter(posts, { authorId: author.id });
    },
  },
  Post: {
    author(post) {
      return find(authors, { id: post.authorId });
    },
  },
};
``` 

In the Vue template for `post-upvoter` we call the mutation `upvotePost`:

```js
import gql from 'graphql-tag';

const upvoteMutation = gql`
  mutation upvotePost($postId: Int!) {
    upvotePost(postId: $postId) {
      id
      votes
    }
  }
`;

export default {
  // Attribute
  props: {
    postId: { // passed in from parent list component
      type: Number,
      required: true,
    },
  },

  methods: {
    upvote() {
      // Mutation
      this.$apollo.mutate({
        mutation: upvoteMutation,
        variables: {
          postId: this.postId,
        },
      });
    },
  }
}
``` 

The list component iterates each element and binds `postId` to `post-upvoter` component. 

```js
<template>
  ...
  <li v-for="post in sortedPosts" :key="post.id">
    {{ post.title }} by
    {{ post.author.firstName }} {{ post.author.lastName }}
    <span>({{ post.votes }} votes)</span>

    <post-upvoter :post-id="post.id"></post-upvoter>
  </li>
  ...
</template>
```

The query to get all posts from graphQL server is defined 

```js
<script>
import gql from 'graphql-tag';

import PostUpvoter from './PostUpvoter.vue';

// GraphQL query
const postsQuery = gql`
  query allPosts {
    posts {
      id
      title
      votes
      author {
        id
        firstName
        lastName
      }
    }
  }
`;
```

We define that this component has the child component `PostUpvoter` (above).  
We add the special `apollo` key with info on how to populate the `posts` data (and `loading` indicator).
Finally we define `sortedPosts` as a computer property on `this.posts` loaded from the server...
Awesome!

```js
export default {
  components: {
    PostUpvoter,
  },
  // Local state
  data: () => ({
    posts: [],
    loading: 0,
  }),
  apollo: {
    // Local state 'posts' data
    posts: {
      query: postsQuery,
      loadingKey: 'loading',
    },
  },
  // Computed properties
  computed: {
    sortedPosts() {
      return this.posts.sort((x, y) => y.votes - x.votes);
    }
  },
};
</script>  
```