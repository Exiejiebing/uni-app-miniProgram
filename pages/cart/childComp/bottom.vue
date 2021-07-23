<template>
	<view class="bootom">
		<view class="bottom-icon" @click="allCheckedOnClick">
			<view class="con-check" :class="{active: isAllSelect}">
				<uni-icons type="checkmarkempty" size="20" color="#FFFFFF"/>
			</view>
			<view style="margin-left: 10rpx;">全选</view>
		</view>
		<view class="bottom-total">
			<view class="bot-price">
				<text style="margin-right: 10rpx;">合计：</text>
				<text style="color: #E93B3D;">￥ {{totalPrice}}</text>
			</view>
			<button class="selement-btn" type="default" size="mini">结算({{totalCount}})</button>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'bottom',
		props: {
			isAllSelect: {
				type: Boolean,
				default: false
			},
			totalCount: {
				type: Number,
				default: 0
			},
			totalPrice: {
				type: Number,
				default: 0
			}
		},
		methods: {
			// 全选
			allCheckedOnClick() {
				this.$emit('allCheckedOnClick')
			}
		}
	}
</script>

<style scoped lang="scss">
	.bootom {
		height: 100rpx;
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 1px solid #EEEEEE;
		background-color: #FFFFFF;
		.bottom-icon {
			justify-content: flex-start;
			display: flex;
		}
		.con-check {
			width: 40rpx;
			height: 40rpx;
			color: #FFFFFF;
			border: 1px solid #DCDFE6;
			border-radius: 50%;
			background-color: #FFFFFF;
			margin-left: 20rpx;
		}
		.active {
			background-color: #E93B3D;
		}
		.bottom-total {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			margin-right: 20rpx;
		}
		.bot-price {
			margin-right: 20rpx;
			
		}
		.selement-btn {
			background-color: #ff0000;
			color: #FFFFFF;
			border-radius: 50rpx;
		}
	}
</style>
