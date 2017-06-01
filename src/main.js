// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

/*eslint-disable */
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import b from 'bootstrap/dist/js/bootstrap.min.js';
/*eslint-enable */

import Loader from '@/components/loader';
import LoginBar from '@/components/loginBar';

import router from './router';
import store from './store';


Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
  // let doc = $(document);

  Vue.component('login-bar', LoginBar, store);
  Vue.component('loader', Loader, store);

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    store,
  });
});
