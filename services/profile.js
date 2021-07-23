import request from './request'

// 获取用户信息
export function getUserInfo () {
	return request({
		url: '/api/user',
	})
}

// 退出登录
export function logout() {
	return request({
		url: '/api/auth/logout',
		method: 'POST'
	})
}