import request from './request'

// 获取分类
export function getCategoryList () {
	return request({
		url: '/api/goods'
	})
}