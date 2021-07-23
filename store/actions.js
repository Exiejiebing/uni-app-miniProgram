import { getCartList } from 'services/cart.js'
export default {
	// 设置购物车数量
	setCartCount({state, commit}) {
		if (state.isLogin) {
			getCartList().then(result => {
				const list = result.data
				// 设置购物车数量
				commit('setCartCount', list.length)
				// 设置购物车总数量
				let total = 0
				list.forEach(item => {
					total += parseInt(item.num)
				})
				console.log(total)
				commit('setCartTotalCount', total)
			})
		}
	}
}