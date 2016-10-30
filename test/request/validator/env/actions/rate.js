const valid = {
  vote: 5,
  comment: 'Awesome stuff',
  user: 'trisha7'
}

function rating({user = 'kris', vote = 3, comment = 'some comment'}) {
  return {
    user,
    vote,
    comment
  }
}

module.exports = {
  invalid: (opts = {version: 0}) => {
    return Object.assign(valid, opts); 
  },
  valid,
  rating
}