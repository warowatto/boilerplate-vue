import Vue from 'vue';
import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const client: AxiosInstance = Axios.create({});

Vue.prototype.$request = function<T>(config: AxiosRequestConfig) {
  return client.request<T>(config).then(res => res.data);
};
