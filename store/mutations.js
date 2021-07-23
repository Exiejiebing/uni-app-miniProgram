export default {
	// 设置wxcode
	setWxcode(state, payload) {
		state.wxcode = payload
	},
	// 设置登录状态
	setIsLogin(state, payload) {
		state.isLogin = payload
	},
	// 设置用户信息--userInfo
	setUserInfo(state, payload) {
		state.userInfo = payload
	},
	// 设置购物车数量
	setCartCount(state, payload) {
		state.cartCount = payload
	},
	// 设置购物车中暑了
	setCartTotalCount(state, payload) {
		state.cartTotalCount = payload
	}
}