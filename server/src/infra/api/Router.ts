import HttpServer from 'infra/api/http/HttpServer';

export default class Router {
  constructor(readonly httpServer: HttpServer) { }

  async init() {
    this.httpServer.on('get', '/', () => {
      return 'Hello NLW';
    });
  }
}
