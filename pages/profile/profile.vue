<template>
	<view>
		<!-- 用户信息 -->
		<userInfo :data="user" :isLogin="isLogin"/>
		<!-- 其他栏目 -->
		<other/>
		<!-- 退出登录 -->
		<logout v-if="isLogin"/>
	</view>
</template>

<script>
	// childComp
	import userInfo from './childComp/userInfo'
	import other from './childComp/other'
	import logout from './childComp/logout'
	
	export default {
		name: 'profile',
		components: {
			// childComp
			userInfo,
			other,
			logout
		},
		data() {
			return {
				user: uni.getStorageSync('user')
			}
		},
		computed: {
			isLogin() {
				return this.$store.state.isLogin
			}
		},
		// 每次进入页面，判断是否为登录状态
		onShow() {
			if (!this.$store.state.isLogin) {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style>
</style>
