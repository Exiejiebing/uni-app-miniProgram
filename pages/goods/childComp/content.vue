<template>
	<view class="content">
		<block v-html="data"></block>
	</view>
</template>

<script>
	export default {
		name: 'content',
		props: {
			data: {
				type: String,
				default: ""
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		height: auto;
		overflow: hidden;
		padding: 40rpx 0;
		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
