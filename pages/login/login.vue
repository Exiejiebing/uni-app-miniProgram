<template>
	<view class="login" v-if="!isLogin">
		<image src="/static/images/cart/cart.png" mode="widthFix"/>
		<view class="text">请完成微信授权以继续使用</view>
		<button type="warn" @click="authUserOnClick">授权微信用户信息</button>
	</view>
</template>

<script>
	import { getOpenId, register, bindOpenid } from 'services/auth.js'
	
	export default {
		name: 'login',
		onLoad() {
			if (!this.$store.state.isLogin) {
				uni.login({
					provider: 'weixin',
					success: (result) => {
						this.$store.commit('setWxcode', result.code)
					}
				})
			}
		},
		computed: {
			isLogin() {
				return this.$store.state.isLogin
			}
		},
		methods: {
			// 登录
			_login() {
				// 通过code绑定openid并获取用户信息
				getOpenId(this.$store.state.wxcode).then(result => {
					if (result.access_token) {
						// 设置登录缓存
						uni.setStorageSync('token', result.access_token)
						uni.setStorageSync('user', result.user)
						this.$store.commit('setIsLogin', true)
						// 成功提示
						uni.showToast({
							title: '登录成功',
							icon: 'success'
						})
						setTimeout(() => {
							// 返回上一页
							uni.navigateBack()
						}, 1000)
					}
				})
			},
			// 注册
			_register(userInfo) {
				// 注册
				const data = {
					name: userInfo.nickName,
					email: 'ice@185.com',
					password: '123456',
					password_confirmation: '123456',
					openid: uni.getStorageSync('openid'),
					avatar: userInfo.avatarUrl
				}
				register(data).then(result => {
					setTimeout(() => {
						// 直接登录
						this._login()
					}, 300)
				})
			},
			// 通过授权获取用户信息
			authUserOnClick() {
				uni.getUserProfile({
					desc: '完善用户信息',
					// 成功授权
					success: (result) =>{
						// 存在用户，直接登录
						if (uni.getStorageSync('user')) {
							// 登录
							this._login()
						} else {
							// 注册
							this._register(result.userInfo)
						}
					},
					fail: (error) => {
						// 拒绝授权
						uni.showModal({
							title: '提示',
							content: '您已拒绝授权，请重新点击并授权！',
							showCancel: false
						})
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.login {
		padding: 80rpx 40rpx 0;
		text-align: center;
		image {
			width: 200rpx;
		}
		.text {
			font-size: 24rpx;
			color: #666666;
			margin: 40rpx 0 20rpx;
		}
	}
</style>
