// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';

import Loader from '@/components/loader';
import LoginBar from '@/components/loginBar';

import '@/services/database';

import router from './router';
import services from './services/auth';

services.init();

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
  // let doc = $(document);

  Vue.component('login-bar', LoginBar);
  Vue.component('loader', Loader);

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
  });
});
