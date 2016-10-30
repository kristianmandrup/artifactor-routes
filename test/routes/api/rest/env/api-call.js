const { callApi } = require('./utils'); 

class ApiCall {
  constructor(route, requests) {
    this.route = route;
    this.requests = request;

    // define alias methods
    this.delete = this.remove;
  }

  set version({versionId}) {
    if (typeof versionId !== 'string') return;
    this.route = `${this.route}?version=${versionId}`;
    return this; 
  }

  async remove({versionId}) {
    this.version = versionId;
    await callApi(this.route, 'GET');
  }

  async remove({versionId}) {
    this.version = versionId;
    await callApi(this.route, 'DELETE', this.requests.remove);
  }

  async create() {
    await callApi(this.route, 'POST', this.requests.create);
  }

  async rate({rating}) {
    this.version = versionId;
    await callApi(this.route, 'POST', rating || this.requests.rate);
  }
} 

module.exports = function (route, request) {
  return new ApiCall(route, request);
}  