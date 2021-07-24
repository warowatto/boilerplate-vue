import { AxiosRequestConfig } from 'axios';

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $request: <T>(config: AxiosRequestConfig) => Promise<T>;
  }
}
