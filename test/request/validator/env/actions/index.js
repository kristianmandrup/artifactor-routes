const valid = {
  name: 'mindbender',
  description: 'unknown',
  author: {
    name: 'Kris'
  },
  location: 'somewhere',
  installations: 2,
  popularWith: {
    components: [
      {name: 'illusion', combinedCount: 1}            
    ]      
  },
  environment: {
    app: {
      vue: {
        version: '^2.0.1' 
      }
    }
  },
  status: 'alpha',
  keywords: [
    'teaching'
  ],
  categories: [
    'ui'
  ],
  avgRating: 3.2,
  ratings: [
    {vote: 2}
  ],
  type: 'component',
  version: '1.0',
  date: '2015-04-12T23:20:50.52Z' // https://tools.ietf.org/html/rfc3339#section-5.8
}

module.exports = {
  create: {
    invalid: (opts = {name: ''}) => {
      return Object.assign({}, valid, opts); 
    },
    valid,
  },
  remove: require('./remove'),
  rate: require('./rate')
}