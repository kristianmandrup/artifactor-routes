const createRouter = require('./factory');
const artefact = require('../../../../artefact');
const entities = artefact.entities.plural;

// apps, components, plugins, ...
module.exports = function({adapterType = 'file'}) {
  console.log('creating routers using adapter:', adapterType, entities)
  return entities.map(entity => createRouter(entity, adapterType));
}
