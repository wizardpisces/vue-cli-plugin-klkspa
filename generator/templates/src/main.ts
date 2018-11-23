import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/common/i18n';
import request from '@/common/ajax';
import '@/common/svg';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.prototype.$http = request;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
