# Responses

These responses can be used for any adapter. Ideally we would like to generate canned responses via Faker.
To simiplify the system architecture, we will operate with a single entity, an Artefact.
No more having different schemas for each type of artefact.

The responses will have a version file for each named artefact of a specific type:

```
/components
  /contacts
    - 3.1.2.json
    ...
    - 1.0.4.json
    ...
    - 0.1.0.json
    ...
    - 0.0.2.json
    - 0.0.1.json
  /users
    ...

/apps
  /contact-app
    - 0.1.0.json
    ...
    - 0.0.2.json
```

Requests will get the best mathing artefact version. If no specific version it asked for, we will return the latest 
version for that artefact (ie. for `contacts` component, return version `contacts@3.2.1`).

The file and DB adapters should be made to have the same API and work the same.



