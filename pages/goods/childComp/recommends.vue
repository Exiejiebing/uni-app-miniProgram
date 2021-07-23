<template>
	<view class="recommends">
		<view class="title">看了又看</view>
		<goodslist :list="list"/>
	</view>
</template>

<script>
	import goodslist from 'components/goodslist/goodslist'
	export default {
		name: 'recommends',
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		components: {
			goodslist
		}
	}
</script>

<style scoped lang="scss">
	.recommends {
		background: #E4E7ED;
		padding-top: 30rpx;
		margin-bottom: 100rpx;
		.title {
			font-size: 28rpx;
			color: #E93B3D;
			text-align: center;
			margin-bottom: 10rpx;
		}
	}
</style>
