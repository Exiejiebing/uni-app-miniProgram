<template>
	<view class="empty">
		<!-- 未登录状态 -->
		<view class="nologin" v-if="isLogin" @click="loginOnClick">
			<view>登录后可同步你购物车中的商品</view>
			<image src="/static/images/cart/return-right.png" mode="widthFix"/>
		</view>
		<view style="margin-top: 80rpx;">
			<image src="/static/images/cart/cart.png" mode="widthFix"/>
			<view class="content">
				<view class="title">您的购物车还空着呢，快去逛逛吧~</view>
				<button type="warn" size="mini" @click="onClick">去逛逛</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'empty',
		computed: {
			isLogin() {
				return !this.$store.state.isLogin
			}
		},
		methods: {
			// 跳转到首页
			onClick() {
				uni.switchTab({
					url: '/pages/index/index'
				})
			},
			// 跳转到登录
			loginOnClick() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.empty {
		padding: 0 40rpx;
		text-align: center;
		image {
			width: 200rpx;
		}
		.content {
			margin-top: 40rpx;
			.title {
				margin-bottom: 40rpx;
			}
		}
		.nologin {
			background: #FFFBEe8;
			color: #ED6A0C;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 80rpx;
			margin-bottom: 80rpx;
			image {
				width: 40rpx;
			}
		}
	}
</style>
