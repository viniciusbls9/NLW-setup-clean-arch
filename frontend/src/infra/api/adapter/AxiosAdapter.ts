/* eslint-disable @typescript-eslint/ban-types */
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import HttpServer from 'infra/api/http/HttpServer';

export default class AxiosAdapter implements HttpServer {
  app: AxiosInstance;

  constructor() {
    this.app = axios;
  }

  on(
    method: 'get' | 'post' | 'delete' | 'put',
    url: string,
    callback: Function
  ): void {
    this.app
      .get('http://localhost:3333/summary')
      .then((response) => response.data);
    this.app[method](url, async function (response: AxiosResponse) {
      const output = await callback(response);
      return output;
    });
  }
}
