import { Injectable } from '@vue-ioc/core';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

@Injectable()
export class HttpService {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = Axios.create({
      baseURL: 'https://api.myip.com',
    });
  }

  private request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.client.request<T>(config).then(res => res.data);
  }

  getIp() {
    return this.request<{
      ip: string;
      country: string;
      cc: string;
    }>({
      method: 'GET',
      url: '/',
    });
  }
}
