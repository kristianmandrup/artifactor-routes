# Components registration

The *Components registry* contains meta data for registered components, the main building blocks of an app.
A component can have dependencies to other components which it can mount at specific location relative to itself 
if needed.  

The main key is `install` which may contain the keys: 
- `bundles`
- `dependencies`

The `bundles` section is merged with `aurelia.json` bundles for bundling the app for distribution/running.
The `dependencies` section is used to configure/install various types of artefacts in the app which the 
component requires.

Here the component depends on the `entity` component, which is not mounted. It also depends on `lodash` library.

```json
"install": {
  "bundles": {
    "vendor-lib.js": {                
    }
  },
  "dependencies": {
    "components": {
      "entity": {
        "version": "^1.0"
      }
    },
    "libs": [
      "lodash"
    ]
  }
} 
```

## Component groups

```json
"name": "property-rental",
"type": [
  "component",
  "group",
]
"group": [
  "property",
  "gallery",
  "negotiation",
  "pricing"
]
```
