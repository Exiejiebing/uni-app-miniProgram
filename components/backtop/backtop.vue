<template>
	<view class="back" @click="onClick">
		<image src="/static/images/other/backtop.png" mode="widthFix"/>
	</view>
</template>

<script>
	export default {
		name:"backtop",
		methods: {
			onClick() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			}
		}
	}
</script>

<style lang="scss">
	.back {
		position: fixed;
		right: 30rpx;
		bottom: 120rpx;
		background: #FFFFFF;
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
	}
	.back image {
		width: 60rpx;
		height: 60rpx;
	}
</style>
