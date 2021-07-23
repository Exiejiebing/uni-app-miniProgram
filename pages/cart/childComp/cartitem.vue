<template>
	<view class="cart">
		<uni-list>
			<block v-for="item in list" :key="item.id">
				<uni-swipe-action>
					<uni-swipe-action-item>
						<view class="content">
							<!-- 单选框 -->
							<view class="con-check" 
										:class="{active: item.is_checked}" 
										@click="isCheckedOnClick(item.id, item.is_checked)">
								<uni-icons type="checkmarkempty" size="20" color="#FFFFFF"></uni-icons>
							</view>
							<uni-list-item>
								<template v-slot:header>
									<image :src="item.goods.cover_url" mode="aspectFill"/>
								</template>
								<template v-slot:body>
									<view class="info">
										<view class="title">{{item.goods.title}}</view>
										<view class="other">
											<view class="price">
												<text style="font-size: 24rpx;">￥</text>
												<text>{{item.goods.price}}</text>
											</view>
											<!-- 数量输入框 -->
											<view class="num-box">
												<uni-number-box :value="item.num" 
																				:max="item.goods.stock"
																				:min="1" 
																				step="1"
																				@change="changeNumEvent($event,item.id)"/>
											</view>
										</view>
									</view>
								</template>
							</uni-list-item>
						</view>
						<template v-slot:right>
							<view class="del" @click="delOnClickEvent(item.id)">删除</view>
						</template>
					</uni-swipe-action-item>
				</uni-swipe-action>
			</block>
		</uni-list>
	</view>
</template>

<script>
	export default {
		name: 'cartitem',
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		methods: {
			// 勾选状态
			isCheckedOnClick(id, is_checked) {
				const data = {
					id,
					is_checked,
				}
				this.$emit('isCheckedOnClick', data)
			},
			// 修改数量变量
			changeNumEvent(value, id) { 
				const data = {
					num: value,
					id
				}
				this.$emit('changeNumEvent', data)
			},
			// 删除
			delOnClickEvent(id) {
				this.$emit('delOnClickEvent', id)
			}
		}
	}
</script>

<style scoped lang="scss">
	.cart {
		font-size: 28rpx;
		width: 100vw;
		.content {
			display: flex;
			justify-content: space-between;
			flex-wrap: nowrap;
			align-items: center;
			image {
				width: 200rpx;
				height: 200rpx;
			}
			.info {
				width: calc(100vw - 280rpx);
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				margin-right: 40rpx;
			}
			.title {
				font-weight: 700;
				color: #000000;
			}
			.other {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.price {
					color: #E93B3D;
					justify-content: flex-start;
				}
				.num-box {
					justify-content: flex-end;
					margin-right: 40rpx;
				}
			}
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
		.del {
			width: 120rpx;
			color: #FFFFFF;
			background: #DD524D;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
