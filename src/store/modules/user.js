import auth from '@/services/auth';
import router from '@/router';

import * as types from '../mutation-types';


// initial state
const state = {
  user: null,
};

// getters
const getters = {
  user: myState => myState.user,
};

// actions
const actions = {
  signInWithMailPassword({ commit, myState }, login, password) {
    commit(types.DISPLAY_WAITINGBOX);
    commit(types.SIGNIN_IN_PROGRESS);
    auth.loginWithLoginPassword(
      login,
      password,
      (user) => {
        commit(types.SIGNIN_SUCCESS, user);
        commit(types.HIDE_WAITINGBOX);
      },
      (error) => {
        commit(types.SIGNIN_FAILURE, error);
        commit(types.HIDE_WAITINGBOX);
      },
    );
  },
  signUpWithMailPassword({ commit, myState }, login, password) {
    commit(types.DISPLAY_WAITINGBOX);
    commit(types.SIGNUP_IN_PROGRESS);
    auth.signUpWithMailPassword(
      login,
      password,
      (user) => {
        commit(types.SIGNUP_SUCCESS, user);
        commit(types.HIDE_WAITINGBOX);
      },
      (error) => {
        commit(types.SIGNUP_FAILURE, error);
        commit(types.HIDE_WAITINGBOX);
      },
    );
  },
  signInWithProvider({ commit, myState }, provider) {
    commit(types.DISPLAY_WAITINGBOX);
    commit(types.SIGNIN_IN_PROGRESS);
    auth.loginAsProvider(
      provider,
      (user) => {
        commit(types.SIGNIN_SUCCESS, user);
        commit(types.HIDE_WAITINGBOX);
      },
      (error) => {
        commit(types.SIGNIN_FAILURE, error);
        commit(types.HIDE_WAITINGBOX);
      },
    );
  },
  signUpWithProvider({ commit, myState }, provider) {
    commit(types.DISPLAY_WAITINGBOX);
    commit(types.SIGNUP_IN_PROGRESS);
    auth.loginAsProvider(
      provider,
      (user) => {
        commit(types.SIGNUP_SUCCESS, user);
        router.push('updateCat');
        commit(types.HIDE_WAITINGBOX);
      },
      (error) => {
        commit(types.SIGNUP_FAILURE, error);
        commit(types.HIDE_WAITINGBOX);
      },
    );
  },
  signOut({ commit }) {
    commit(types.DISPLAY_WAITINGBOX);
    auth.signOut(
      () => {
        commit(types.SIGNIN_SUCCESS, null);
        router.push('app');
        commit(types.HIDE_WAITINGBOX);
      },
    );
  },
};

// mutations
/*eslint-disable */
const mutations = {
  [types.SIGNIN_IN_PROGRESS](state) {
    console.log("connexion en cours")
  },

  [types.SIGNIN_SUCCESS](state, user) {
    state.user = user
  },

  [types.SIGNIN_FAILURE](state, error) {
    console.log(`echec de la connexion : ${error.code} ${error.message} `)
  },

  [types.SIGNUP_SUCCESS](state, user) {
    state.user = user
  },

  [types.SIGNUP_IN_PROGRESS](state) {
    console.log("inscription en cours")
  },

  [types.SIGNUP_FAILURE](state, error) {
    console.log(`echec de l'inscription' : ${error.code} ${error.message} `)
  },

}
/*eslint-enable */

export default {
  state,
  getters,
  actions,
  mutations,
};
