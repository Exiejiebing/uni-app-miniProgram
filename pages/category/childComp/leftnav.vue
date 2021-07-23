<template>
	<scroll-view scroll-y class="nav">
		<block v-for="(item, index) in list" :key="item.id">
			<view class="item" :class="{active: currentIndex == index}" @click="onClick(index, item.id)">{{item.name}}</view>
		</block>
	</scroll-view>
</template>

<script>
	export default {
		name: 'leftnav',
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
			onClick(index, id) {
				this.currentIndex = index
				this.$emit('cateOnClick', id)
			}
		}
	}
</script>

<style scoped lang="scss">
	.nav {
		width: 100%;
		background: #EEEFDD;
		font-size: 28rpx;
		text-align: center;
		display: inline-block;
		height: 100vh;
		overflow: hidden;
		.item {
			height: 80rpx;
			line-height: 80rpx;
			color: #666666;
		}
		.active {
			background: #FFFFFF;
			font-weight: 500;
		}
	}
</style>
