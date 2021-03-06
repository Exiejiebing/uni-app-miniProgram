import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations';
import actions from './actions';

const state = {
	wxcode: "",
	isLogin: uni.getStorageSync('token') ? true : false,
	userInfo: {},
	cartCount: 0,
	cartTotalCount: 0
}

const store = new Vuex.Store({
	state,
	mutations,
	actions
})
export default store