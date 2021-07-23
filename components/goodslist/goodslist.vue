<template>
	<view class="list" v-if="list.length">
		<block v-for="(item, index) in list" :key="index">
			<listitem class="item" :data="item"/>
		</block>
	</view>
</template>

<script>
	import listitem from "./listitem";
	export default {
		name:"goodslist",
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		components: {
			listitem
		}
	}
</script>

<style lang="scss">
	.list {
		padding-top: 20rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		background-color: #E4E7ED;
		height: 100%;
	}
	.list .item {
		width: 45%;
		background: #FFFFFF;
		margin-bottom: 20rpx;
		text-align: center;
		border-radius: 20rpx;
	}
</style>
