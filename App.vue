<script>
	import { getOpenId, register, bindOpenid } from 'services/auth.js'
	export default {
		onLaunch: function() {
			// 处于未登录状态时，默认判断openid是否绑定了用户
			if (!this.$store.state.isLogin) {
				uni.login({
					provider: 'weixin',
					success: (result) => {
						getOpenId(result.code).then(result => {
							// 设置登录缓存
							uni.setStorageSync('openid', result.openid)
							if (result.user) {
								uni.setStorageSync('user', result.user)
							}
						})
					}
				})
			}
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
