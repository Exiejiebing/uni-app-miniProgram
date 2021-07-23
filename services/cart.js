import request from './request'
import services from './axios'

// 获取购物车列表
export function getCartList() {
	return request({
		url: '/api/carts',
		data: {
			include: 'goods'
		}
	})
}

// 加入购物车
export function addCart(goods_id, num) {
	return request({
		url: '/api/carts',
		method: 'POST',
		data: {
			goods_id,
			num
		}
	})
}

// 购物车勾选状态
export function changeCheckedStatus(cart_ids) {
	return services({
		url: '/api/carts/checked',
		method: 'PATCH',
		data: {
			cart_ids
		}
	})
}

// 修改购物车数量
export function modifyNumber(cart, num) {
	return request({
		url: `/api/carts/${cart}`,
		method: 'PUT',
		data: {
			num
		}
	})
}

// 删除购物车商品
export function deleteCart(cart) {
	return request({
		url: `/api/carts/${cart}`	,
		method: 'DELETE'
	})
}
