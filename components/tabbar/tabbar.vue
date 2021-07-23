<template>
	<view class="tabbar" v-if="list.length">
		<block v-for="(item, index) in list" :key="index">
			<view class="item" @click="onClick(index)">
				<text class="text" :class="{active: currentIndex == index}">{{item}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name: "tabbar",
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			onClick(index) {
				this.currentIndex = index;
				this.$emit('tabBarOnClick', index);
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabbar {
		display: flex;
		text-align: center;
		background: #FFFFFF;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 28rpx;
		.item {
			flex: 1;
		}
		.text {
			padding: 20rpx;
		}
		.active {
			color: #E43130;
			border-bottom: 8rpx solid #E43130;
		}
	}
</style>
