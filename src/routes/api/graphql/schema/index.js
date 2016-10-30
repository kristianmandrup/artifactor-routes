// TODO: use graffitti
// https://github.com/RisingStack/graffiti-mongoose
// generates GraphQL types and schemas from your existing mongoose models, 
// The generated schema is compatible with Relay

// Use Apollo: https://github.com/Akryum/vue-apollo

// Also see: https://github.com/vuejs/vue-rx

module.exports = new GraphQLObjectType({
  name: 'MyType',
  fields: {
    myField: {
      type: GraphQLString,
      resolve(parentValue, args, ctx) {
        // use `ctx.session` here
      }
    }
  }
});