// main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Axios from 'axios';
import md5 from 'md5'; // Asegúrate de haber instalado la biblioteca 'md5'

Vue.config.productionTip = false;

Vue.prototype.$axios = Axios;

// Configura Axios
Axios.defaults.baseURL = 'https://api.example.com';

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
