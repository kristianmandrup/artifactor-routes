const { display, expect } = require('./utils')

class ValidChecker {
  constructor(result) {
    this.result = result;
  }
  
  isValid(expected = true) {
    expect(this.result.valid).to.eql(expected)
  }  
}

module.exports = (result) => {
  return new ValidChecker(result)
}