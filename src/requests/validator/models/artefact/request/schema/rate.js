module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 30  
    },
    type: {
      type: 'string',
      enum: ['component', 'app', 'plugin', 'add-on', 'theme', 'service', 'library']
    },
    version: {
      type: 'string',
      pattern: '^(\d+\.)?(\d+\.)?(\*|\d+)$'
    },
    rating: {
      type: 'object',
      properties: {
        vote: {
          type: 'number',
          minimum: 1,
          maximum: 5
        },
        comment: {
          type: 'string',
          minLength: 2,
          maxLength: 140  
        },
        user: {
          type: 'string',
          minLength: 2,
          maxLength: 30            
        } 
      },
      required: ['vote', 'user']
    }
  },
  required: ['name', 'type', 'version', 'rating']            
}  
