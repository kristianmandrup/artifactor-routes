# Methods

All the methods that can mutate an Artefact (version).

- `create` (create a new artefact if no such named artefact exists. Otherwise adds a version ie `upsert`)
- `rate` adds a rating to the ratings list of an existing artefact. Throws if no such artefact exists
- `remove` removes names artefact version. Throws if no such artefact exists. Special version `all` removes