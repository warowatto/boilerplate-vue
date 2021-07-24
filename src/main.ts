import Vue from 'vue';

import './plugins';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
