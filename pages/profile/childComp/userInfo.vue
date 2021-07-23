<template>
	<!-- 登录状态 -->
	<view class="user" v-if="isLogin">
		<image :src="data.avatar_url" mode="widthFix"/>
		<view class="info">
			<view>{{data.name}}</view>
			<view style="margin-top: 10rpx;">
				<text>邮箱：</text>
				<text>{{data.email}}</text>
			</view>
		</view>
	</view>
	<!-- 未登录 -->
	<view class="user" v-else>
		<image src="/static/images/other/avatar.png" mode="widthFix"/>
		<view class="info">
			<view>未登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'userInfo',
		props: {
			data: {
				type: Object,
				default: {}
			},
			isLogin: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style scoped lang="scss">
	.user {
		background-color: #E43130;
		padding: 40rpx 60rpx;
		border-bottom-left-radius: 30rpx;
		border-bottom-right-radius: 30rpx;
		font-size: 28rpx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
		.info {
			margin-left: 30rpx;
		}
	}
</style>
