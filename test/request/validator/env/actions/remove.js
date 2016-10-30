const valid = {
  name: 'contacts',  
  version: '1.2.1',
  key: 'sgh384dsddsg8dg7sdg87'
}

module.exports = {
  invalid: (opts = {version: 0}) => {
    return Object.assign(valid, opts); 
  },
  valid,
}