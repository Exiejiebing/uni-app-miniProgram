<template>
	<view class="other">
		<view class="item">
			<uni-icons type="gear-filled" size="24" color="#E43130"/>
			<view class="center">账号管理</view>
			<uni-icons type="arrowright" size="20"/>
		</view>
		<view class="item">
			<uni-icons type="location-filled" size="24" color="#E43130"/>
			<view class="center">地址管理</view>
			<uni-icons type="arrowright" size="20"/>
		</view>
		<view class="item">
			<uni-icons type="star-filled" size="24" color="#E43130"/>
			<view class="center">我的收藏</view>
			<uni-icons type="arrowright" size="20"/>
		</view>
		<view class="item">
			<uni-icons type="person-filled" size="24" color="#E43130"/>
			<view class="center">关于我们</view>
			<uni-icons type="arrowright" size="20"/>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'other'
	}
</script>

<style scoped lang="scss">
	.other {
		margin-top: 50rpx;
		font-size: 28rpx;
		color: #000000;
		border-bottom: 1px solid #EEEEEE;
		.item {
			height: 100rpx;
			padding: 0 40rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.center {
				flex-grow: 1;
				margin-left: 20rpx;
			}
		}
	}
</style>
