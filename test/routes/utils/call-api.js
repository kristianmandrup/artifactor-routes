const agent = require('./agent');
const urlJoin = require('url-join');

module.exports = async function(urlPath, method = 'GET', data) {
  const fullServerPath = urlJoin('localhost:3000', urlPath)
  console.log(method, ' @ ', fullServerPath);
  if (method === 'POST' || method === 'PUT') {
    console.log('send data', data);
  }  

  return agent(method, fullServerPath)
    .send(data)
    .end()
    .then(res => {
      return res; 
    }, (err) => {
      //err.response has the response from the server
      console.error('Agent error', err);
      throw 'Unable to retrieve list of apps'; 
    }); 
}