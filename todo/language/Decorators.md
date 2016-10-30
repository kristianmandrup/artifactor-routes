## Syntax update

Currently using a mix of Node and ES2015+ syntax.
With the upcoming Node 7 we will support almost all the new JavaScript syntax natively, except for ES2015 modules.

Get rid of all the module `module.exports` syntax and replace with `export default` or similar. 

Note: We currently compile to `dist` via Babel, which we will likely have to for about a year more... 

### Decorators
We SHOULD use *DECORATORS*

[babel using decorators](https://babeljs.io/docs/plugins/transform-decorators/)

Currently we include the following:
- [core decorators](https://www.npmjs.com/package/core-decorators) 
- [more decorators](https://www.npmjs.com/package/javascript-decorators)
- [lodash decorators](https://www.npmjs.com/package/lodash-decorators)

I particularly like *memoize*.

Currently the `tsconfig.json` makes the syntax work in VS Code IDE/editor

```json
"compilerOptions": {
  "experimentalDecorators": true
}
``` 

I've also added support in Babel compilation in `.babelrc` via plugins:

```
  "transform-decorators-legacy",
  "transform-class-properties"
 ```

### Class properties
We SHOULD use *CLASS PROPERTIES*

Added [class properties](https://babeljs.io/docs/plugins/transform-class-properties/) support :) 

