// 请求地址域名
const BASE_URL = 'https://api.shop.eduwork.cn';

export default function request (config) {
	return new Promise ((resolve, reject) => {
		uni.request({
			url: BASE_URL + config.url,
			method: config.method || 'GET',
			data: config.data,
			header: {
				Authorization: 'Bearer ' + uni.getStorageSync('token')
			},
			success: (result) => {
				resolve(result.data)
			},
			fail: reject,
		});
		
		// 请求拦截
		// uni.addInterceptor('request', {
		// 	invoke(args) {
		// 		const token = uni.getStorageSync('token')
		// 		if (token) {
		// 			args.header.Authorization = 'Bearer ' + token
		// 		}
		// 	}
		// })
	})
}