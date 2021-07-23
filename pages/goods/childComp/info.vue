<template>
	<view class="info">
		<view class="content">
			<view class="price">
				<text>￥</text>
				<text class="price-b">{{data.price}}</text>
			</view>
			<view class="title">
				<text class="title-after" v-if="data.is_recommend">推荐</text>
				<text class="title-after" v-else>热门</text>
				<text class="title-b">{{data.title}}</text>
			</view>
			<view class="desc">
				<text>{{data.description}}</text>
			</view>
			<view class="other">
				<view>
					<image src="/static/detail/love.png" mode="widthFix"/>
					<text>推荐</text>
				</view>
				<view>
					<image src="/static/detail/users.png" mode="widthFix"/>
					<text>帮我选</text>
				</view>
				<view>
					<image src="/static/detail/share.png" mode="widthFix"/>
					<text>分享</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'info',
		props: {
			data: {
				type: Object,
				default: {}
			}
		}
	}
</script>

<style scoped lang="scss">
	.info {
		background: #F5EFEF;
		padding: 30rpx;
		.content {
			background-color: #FFFFFF;
			padding: 30rpx;
			line-height: 1.5;
			font-size: 28rpx;
			color: #666666;
			border-radius: 20rpx;
		}
		.price {
			color: #E93B3D;
			margin-bottom: 20rpx;
		}
		.title {
			margin-bottom: 20rpx;
			.title-after {
				background: #E93B3D;
				border-radius: 999px;
				color: #FFFFFF;
				padding: 4rpx 12rpx;
			}
		}
		.price-b, .title-b {
			font-weight: 700;
		}
		.desc {
			font-size: 24rpx;
			margin-bottom: 40rpx;
		}
		.other {
			display: flex;
			justify-content: space-evenly;
			image {
				width: 30rpx;
				height: 30rpx;
				vertical-align: middle;
				margin-right: 10rpx;
			}
		}
	}
</style>
