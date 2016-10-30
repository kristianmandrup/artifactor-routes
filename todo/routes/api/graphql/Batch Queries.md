## New amazing GraphQL features

- stream
- live
- defer
- ...

[New amazing GraphQL features](https://medium.com/apollo-stack/new-features-in-graphql-batch-defer-stream-live-and-subscribe-7585d0c28b07#.8j92prear)

Essentially, with the defer and stream directives, and a new format for sending result patches, 
we can solve the problem where an entire GraphQL result needs to be generated before any response is sent.

It turns out that if the server can send patches to the result, it can also patch parts of the result 
that have already been sent, resulting in real-time updates to the data on the client.

## Batch queries

When you load your UI on the client, it might fire several queries in a short period of time to put 
together its initial state. One simple strategy to improve this without changing any of the 
UI code is to batch together requests made within a small time interval. 

This way, all of the data can be loaded in one roundtrip, without any extra effort.
