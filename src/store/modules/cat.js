import * as types from '../mutation-types';


// initial state
const state = {
  catId: 12,
  catName: 12,
};

// getters
const getters = {
  catId: myState => myState.catId,
  catName: myState => myState.catName,
};

// mutations
/*eslint-disable */
const mutations = {
  [types.UPDATE_CAT_ID](myState, id) {
    myState.id = id;
  },
  [types.UPDATE_CAT_NAME](myState, name) {
    myState.name = name;
  },
};
/*eslint-enable */

export default {
  state,
  getters,
  mutations,
};
