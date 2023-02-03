/* eslint-disable @typescript-eslint/ban-types */
import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors'
import HttpServer from 'infra/api/http/HttpServer';

export default class FastifyAdapter implements HttpServer {
  app: FastifyInstance;

  constructor() {
    this.app = Fastify();
    this.app.register(cors)
  }

  on(method: 'get' | 'post' | 'delete' | 'put', url: string, callback: Function): void {
    this.app[method](url, async function () {
      const output = await callback();
      return output;
    });
  }

  listen(port: number): void {
    this.app.listen({
      port
    });
  }
}
