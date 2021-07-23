import axios from 'axios'

// 请求地址域名
const BASE_URL = 'https://api.shop.eduwork.cn';

const services = axios.create({
	crossDomain: true,
	baseURL: BASE_URL,
	timeout: 5000
})
// 请求拦截
services.interceptors.request.use(config => {
	// 统一设置需要认证后才能访问页面
	const token = uni.getStorageSync('token')
	if (token) {
		config.headers.Authorization = 'Bearer ' + token;
	}
	// 小程序中的method不可以是patch，如何一定要使用patch，则添加X-HTTP-Method-Override：patch请求头
	if (config.method == 'patch') {
		config.method = 'POST'
		config.headers = {
			'Authorization': 'Bearer ' + token,
			'X-HTTP-Method-Override': 'PATCH'
		}
	}
	return config;
})
// 响应拦截
services.interceptors.response.use(result => {
	return result.data ? result.data : result
}, error => {
	 return Promise.reject(error)
})
// 自定义适配器
axios.defaults.adapter = function(config) {
	return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				response = {
						data: response.data,
						status: response.statusCode,
						errMsg: response.errMsg,
						header: response.header,
						config: config
				};
				settle(resolve, reject, response);
			}
		})
	})
}
// 导出
export default services
	

