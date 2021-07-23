<template>
	<view class="comments">
		<view class="content">
			<view class="title">宝贝评论</view>
			<block v-for="item in list" :key="item.id">
				<view class="con">
					<view class="con-user">
						<image :src="item.user.avatar_url" mode="widthFix"/>
						<view class="con-user-name">
							<view>{{item.user.name}}</view>
							<view class="time">{{item.created_at}}</view>
						</view>
					</view>
					<view class="con-con">
						<view class="">{{item.content}}</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'comments',
		props: {
			list: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style scoped lang="scss">
	.comments {
		background: #E4E7ED;
		font-size: 28rpx;
		color: #000000;
		padding: 40rpx 20rpx;
		height: 100%;
		.content {
			background: #FFFFFF;
			padding: 20rpx;
			border-radius: 20rpx;
		}
		.title {
			font-weight: 700;
			font-size: 32rpx;
		}
		.con {
			margin: 20rpx 0;
			.con-user {
				display: flex;
				margin-bottom: 20rpx;
				padding: 0 20rpx;
			}
			.con-user image {
				width: 80rpx;
				height: 80rpx;
				border-radius: 50%;
			}
			.con-user-name {
				margin-left: 20rpx;
			}
			.time {
				font-size: 24rpx;
				color: #b5b2b2;
				margin: 20rpx 0;
			}
			.con-con {
				line-height: 1.5;
				margin-bottom: 10rpx;
			}
		}
	}
</style>
