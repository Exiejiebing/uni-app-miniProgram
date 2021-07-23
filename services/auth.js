import request from "./request";

const APP_ID = '	wx0b1b56f2e6c5c57d';
const APP_SECRET = 'c5c0a510e2d4d7e81fc24a919b0013aa';

// 获取openid
export function getOpenId (code) {
	return request({
		url: '/api/auth/wx/code',
		method: 'POST',
		data: {
			appid: APP_ID,
			secret: APP_SECRET,
			js_code: code
		}
	})
}

// 解绑/绑定微信
export function bindOpenid (type, openid) {
	return request({
		url: '/api/auth/wx/bind',
		method: 'POST',
		data: {
			type,
			openid
		}
	})
}
// 注册
export function register (data) {
	return request({
		url: '/api/auth/register',
		method: 'POST',
		data
	})
}