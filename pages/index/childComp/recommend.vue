<template>
	<scroll-view scroll-x class="recommend" v-if="list.length">
		<block v-for="item in list" :key="item.id">
			<view class="item" @click="onClick(item.id)">
				<image :src="item.cover_url" mode="widthFix" @load="imageLoad"/>
				<view class="title">
					<text>{{item.title}}{{item.title}}{{item.title}}</text>
				</view>
			</view>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		name: 'recommend',
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				isLoad: false
			}
		},
		methods: {
			// 跳转到详情页
			onClick(id) {
				uni.navigateTo({
					url: '/pages/goods/detail?id=' + id
				})
			},
			// 图片加载事件
			imageLoad() {
				if (!this.isLoad) {
					this.$emit('imageLoad');
					this.isLoad = true;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.recommend {
		white-space: nowrap;
		text-align: center;
		background: #FFFFFF;
		border-bottom: 10rpx solid #E4E7ED;
		width: 100%;
		padding: 20rpx 0;
		.item {
			width: 22%;
			display: inline-block;
			padding: 0 10rpx;
		}
		.item image {
			width: 100%;
			height: 100%;
		}
		.title {
			font-size: 24rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
</style>
