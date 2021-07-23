import request from './request.js';

// 获取首页数据
export function getData () {
	return request({
		url: '/api/index'
	})
}

// 获取商品数据
export function getGoodsData (type, page = 0) {
	return request({
		url: `/api/index?${type}=1`,
		data: {
			page,
		}
	})
}