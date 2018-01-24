// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
*/
// window.SERVER_ROOT_URL = 'http://localhost:8080';
 window.SERVER_ROOT_URL = 'https://api.innwowo.com';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
