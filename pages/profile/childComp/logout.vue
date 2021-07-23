<template>
	<view class="logout">
		<button type="warn" @click="onClick">退出登录</button>
	</view>
</template>

<script>
	import { logout } from 'services/profile.js'
	export default {
		name: 'logout',
		methods: {
			onClick() {
				uni.showLoading({
					title: '',
					mask: true
				})
				logout().then(result => {
					uni.removeStorageSync('token')
					this.$store.commit('setIsLogin', false)
					uni.hideLoading()
					setTimeout(() => {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}, 500)
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.logout {
		margin-top: 50rpx;
		padding: 0 40rpx;
		button {
			border-radius: 50rpx;
		}
	}
</style>
