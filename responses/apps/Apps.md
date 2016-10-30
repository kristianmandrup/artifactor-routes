# Apps registration

The *Apps registry* is somewhat similar to the components registry. An app can be thought of 
as a root level component. It can contain one or more sub-apps and components.  

The main key is `install` which may contain the keys: 
- `bundles`
- `dependencies`

The `bundles` section is merged with `aurelia.json` bundles for bundling the app for distribution/running.
The `dependencies` section is used to configure/install various types of artefacts in the app which the 
app requires.

```json
"install": {
  "bundles": {
    "vendor-lib.js": {                
    }
  },
  "dependencies": {
    "components": {
      "contacts": {
        "version": "^1.0",
        "mountPath": "./my-contacts"
      }
    },
    "libs": [
      "lodash"
    ]
  }
} 
```

## App groups

```json
{
  "name": "social-app",
  "type": [
    "app",
    "group",
  ],
  "apps": [
    "guest",
    {
      "social": {
        "components": [
          "communication",
          "profile"
        ]
      }
    }
    "social-dashboard"
  ]  
}
```
