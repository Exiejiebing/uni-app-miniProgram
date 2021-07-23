<template>
	<scroll-view class="goods" 
								:scroll-y="isScroolY"
								:scroll-top="scrollTop"
								:scroll-anchoring="true"
								@scrolltolower="scrolltolower" 
								@scroll="scroll">
		<view style="margin-top: 40rpx;">
			<block v-for="item in list" :key="item.id">
				<view class="content" @click="onClick(item.id)">
					<view class="left">
						<image :src="item.cover_url" mode="widthFix"/>
					</view>
					<view class="right">
						<view class="title">{{item.title}}</view>
						<view class="price">
							<text>￥</text>
							<text>{{item.price}}</text>
						</view>
					</view>
				</view>
			</block>
			<!-- 加载更多 -->
			<uni-load-more v-show="isShowLoadMore" :status="status" :icon-size="14" :contentText="contentText"/>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		name: 'rightgoods',
		data() {
			return {
				scrollTop: 0,
				isScroolY: true,
				isScrolling: true
			}
		},
		props: {
			list: {
				type: Array,
				default: []
			},
			currentId: {
				type: Number,
				default: 0
			},
			isShowLoadMore: {
				type: Boolean,
				default: false
			},
			status: {
				type: String,
				default: 'more'
			},
			contentText: {
				type: Object,
				default: {
					contentdown: '加载更多~',
					contentrefresh: '加载中',
					contentnomore: '我是有底线的~'
				}
			}
		},
		methods: {
			onClick(id) {
				uni.navigateTo({
					url: '/pages/goods/detail?id=' + id
				})
			},
			// 滚动到底部
			scrolltolower() {
				if (this.isScrolling && this.isScroolY) {
					this.$emit('scrolltolower')
					this.isScrolling = false
					this.isScroolY = false
				}
			},
			// 监听滚动
			scroll(e) {
				this.scrollTop = e.detail.scrollTop
			}
		},
		watch: {
			// 监听分类id变化，修改滚动条到顶部
			currentId(newValue) {
				this.$nextTick(() => {
					this.scrollTop = 0
				})
			},
			status(newValue) {
				if (newValue == 'more') {
					this.isScrolling = true
					this.isScroolY = true
				} else if (newValue == 'noMore') {
					this.isScroolY = true
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.goods {
		width: 100%;
		height: 100%;
		font-size: 28rpx;
		color: #000000;
		.content {
			display: flex;
			margin-bottom: 20rpx;
			height: 200rpx;
		}
		.right {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin-right: 20rpx;
			.title {
				line-height: 1.5rem;
				overflow: hidden;
				word-break: break-all;
				text-overflow: ellipsis; /*显示多行*/
				display: -wekit-box; /*对象作为伸缩盒子模型显示*/
				-webkit-box-orient: vertical; /*设置或检索伸缩盒对象的子元素的排列方式*/
				-webkit-line-clamp: 1; /*显示的行数*/
				margin-bottom: 10rpx;
			}
			.price {
				color: #E93B3D;
			}
		}
		image {
			width: 200rpx;
			height: 200rpx;
			border-radius: 20rpx;
		}
	}
</style>
