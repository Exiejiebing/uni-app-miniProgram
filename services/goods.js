import request from './request'

// 获取商品详情
export function getGoodsDetail (good) {
	return request({
		url: `/api/goods/${good}`
	})
}

// 获取商品列表
export function getGoodsList (category_id, page) {
	return request({
		url: '/api/goods',
		data: {
			category_id,
			page
		}
	})
}