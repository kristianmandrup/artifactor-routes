const { display, check, test, call, requests, ratingFor } = require('./env');

const rating = {
  kris: ratingFor({user: 'kris', vote: 4}),
  sandy: ratingFor({user: 'sandy', vote: 2})
}  

test('route: components/contacts')
  .that('post rating')            
    .will('add a rating', async () => {   
      let result = await call.rate({
        rating: rating.kris
      });   
      
      check(result)
        .wasRated()
        .ratingAdded()
    })

    .will('NOT add a rating for the same user', async () => {   
      let result = await call.rate({
        rating: rating.kris
      });   
      
      check(result)
        .wasRated(false)
        .ratingAdded(false)        
    })

    .will('add anpother rating for another same user', async () => {   
      let result = await call.rate({
        rating: rating.sandy
      });   
      
      check(result)
        .wasRated()
        .ratedBy('sandy')
        .starsRated(2)
        .ratingAdded()       
    })

    .run();


