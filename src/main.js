import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

import axios from "axios";
import store from './store';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(axios);

axios.defaults.baseURL='http://localhost:8000';

store.dispatch("getUsuario");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
