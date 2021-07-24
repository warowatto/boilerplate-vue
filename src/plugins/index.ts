import Vue from 'vue';

import './axios';

import { VueIocPlugin } from '@vue-ioc/core';
import VueMoment from 'vue-moment';
import moment from 'moment';
moment.locale('ko');

Vue.use(VueIocPlugin);
Vue.use(VueMoment, { moment });

Vue.filter('amount', (value: number | string) => {
  if (typeof value === 'string') return parseFloat(value).toLocaleString();
  else return value.toLocaleString();
});
