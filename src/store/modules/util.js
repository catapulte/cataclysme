import * as types from '../mutation-types';

// initial state
const state = {
  waitingBox: false,
};

// getters
const getters = {
  waitingBox: myState => myState.waitingBox,
};


// mutations
/*eslint-disable */
const mutations = {
  [types.DISPLAY_WAITINGBOX](state) {
    state.waitingBox = true
  },

  [types.HIDE_WAITINGBOX](state) {
    state.waitingBox = false
  }
}
/*eslint-enable */

export default {
  state,
  getters,
  mutations,
};
