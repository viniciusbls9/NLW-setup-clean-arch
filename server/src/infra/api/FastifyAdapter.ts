/* eslint-disable @typescript-eslint/ban-types */
import Fastify from 'fastify';
import HttpServer from './HttpServer';

export default class ExpressAdapter implements HttpServer {
  app: any;

  constructor() {
    this.app = Fastify();
  }

  on(method: string, url: string, callback: Function): void {
    this.app[method](url, async function (req, res) {
      const output = await callback(req.params, req.body);
      return output;
    });
  }

  listen(port: number): void {
    this.app.listen({
      port
    });
  }
}
