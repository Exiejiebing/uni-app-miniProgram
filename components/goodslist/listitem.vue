<template>
	<view class="item" @click="onClick(data.id)">
		<image :src="data.cover_url" mode="widthFix"/>
		<view class="item-desc">
			<view class="title">
				<text>{{data.title}}</text>
			</view>
			<view class="other">
				<text class="price">￥{{data.price}}</text>
				<image class="other-img" src="/static/images/other/collect.png" mode="widthFix"/>
				<text>{{data.collects_count}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "listitem",
		props: {
			data: {
				type: Object,
				default: {}
			}
		},
		methods: {
			onClick(id) {
				uni.navigateTo({
					url: '/pages/goods/detail?id=' + id
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.item {
		width: 100%;
		padding: 20rpx 0;
		image {
			width: 100%;
		}
		.item-desc {
			font-size: 28rpx;
			.title {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin-bottom: 20rpx;
			}
			.other text {
				margin-right: 30rpx;
			}
			.price {
				color: #E43130;
			}
			.other-img{
				width: 30rpx;
				height: 30rpx;
				margin-right: 8rpx;
				vertical-align: middle;
			}
		}
	}
</style>
