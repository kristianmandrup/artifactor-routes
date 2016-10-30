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
      $ref: '#/definitions/version'
    },
    versionRange: {
      from: {
        $ref: '#/definitions/version'      
      },
      to: {
        $ref: '#/definitions/version'      
      }
    }, 
    dateRange: {
      since: {
        $ref: '#/definitions/date'
      },    
      before: {
        $ref: '#/definitions/date'
      }  
    },    
    key: {
      type: 'string',
      minLength: 10,
      maxLength: 30  
    }
  },
  required: ['name', 'key'],
  definitions: {
    version: {
      type: 'string',
      pattern: '^(\d+\.)?(\d+\.)?(\*|\d+)$'      
    },
    date: {
      type: 'string',
      pattern: 'date-time'
    }        
  }
}
