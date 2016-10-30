# Addons registration

The Addons registry is completely self contained. It may consist a link 
to one or more core repos, such as for sigma-ui framework. 

The main key is `install` which may contain the keys: 
- `bundles`
- `dependencies`

The `bundles` section is merged with `aurelia.json` bundles for bundling the app for distribution/running.
The `dependencies` section is used to configure/install various types of artefacts in the app which the 
addon requires.

```json
"install": {
  "bundles": {
    "vendor-lib.js": {                
    },
    "app.js": {                
    }
  },
  "dependencies": {
    "libs": [
      "jquery"
    ],
    "plugins": [
      "aurelia-validate",
      "aurelia-i18n"
    ],
    "typescript": {
      "typings": [
        "jquery"
      ],
      "dtsSources": [
        "node_modules/jquery/**.*.d.ts"        
      ]
    }
  }
} 
```