import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import util from './modules/util';
import cat from './modules/cat';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    util,
    cat,
  },
});
