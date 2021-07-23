<template>
	<view class="cart">
		<!-- 购物车列表 -->
		<block v-if="isLogin && list.length">
			<cartitem :list="list" 
								@isCheckedOnClick="isCheckedOnClick"
								@changeNumEvent="changeNumEvent"
								@delOnClickEvent="delOnClickEvent"/>
			<!-- 底部结算栏 -->
			<bottom :isAllSelect="isAllSelect"
							:totalCount="totalCount"
							:totalPrice="totalPrice"
							@allCheckedOnClick="allCheckedOnClick" />
		</block>
		<!-- 未登录/空数据状态 -->
		<empty v-else/>
	</view>
</template>

<script>
	import { getCartList, changeCheckedStatus, modifyNumber, deleteCart } from 'services/cart.js'
	// childComp
	import empty from './childComp/empty'
	import cartitem from './childComp/cartitem'
	import bottom from './childComp/bottom'
	
	export default {
		name: 'cart',
		data() {
			return {
				list: [],
				cartList: [],
			}
		},
		computed: {
			isLogin() {
				return this.$store.state.isLogin
			},
			isAllSelect() {
				return this.cartList && this.list && this.cartList.length == this.list.length ? true : false
			},
			totalCount() {
				return this.cartList && this.cartList.length || 0
			},
			totalPrice() {
				if (this.list) {
					return this.list.filter(item => this.cartList.includes(item.id)).reduce((total, item) => {
						return total + parseInt(item.num) * parseFloat(item.goods.price)
					}, 0)
				} else {
					return 0
				}
			}
		},
		components: {
			// childComp
			empty,
			cartitem,
			bottom
		},
		methods: {
			// 初始化
			__init() {
				this._getCartList()
			},
			// 获取购物车列表
			_getCartList() {
				getCartList().then(result => {
					this.list = result.data
					this.cartList = this.list.filter(item => item.is_checked).map(item => item.id)
				})
			},
			// 修改购物车勾选状态
			_changeCheckedStatus(values) {
				uni.showLoading({
					title: '提交中',
					mask: true
				})
				changeCheckedStatus(values).then(result => {
					uni.hideLoading()
					// 数据修改成功重新渲染页面
					this.__init()
				})
			},
			_modifyNumber(cart_id, num = 1) {
				uni.showLoading({
					title: '',
					mask: true
				})
				modifyNumber(cart_id, num).then(result => {
					uni.hideLoading()
					// 数据修改成功重新渲染页面
					this.__init()
				})
			},
			// 删除购物车商品
			_deleteCart(cart_id) {
				uni.showLoading({
					title: '',
					mask: true
				})
				deleteCart(cart_id).then(result => {
					uni.hideLoading()
					// 数据修改成功重新渲染页面
					this.__init()
				})
			},
			// 购物车勾选状态
			isCheckedOnClick(data) {
				// 判断此前的状态
				if (data.is_checked) {
					this.cartList = this.cartList.filter(item => item != data.id)
				} else {
					this.cartList.push(data.id)
				}
				// 网络请求更新数据
				this._changeCheckedStatus(this.cartList)
			},
			// 全选
			allCheckedOnClick() {
				if (this.isAllSelect) {
					this.cartList = []
				} else {
					this.cartList = this.list.map(item => item.id)
				}
				// 网络请求更新数据
				this._changeCheckedStatus(this.cartList)
			},
			// 修改购物车数量
			changeNumEvent(data) {
				this._modifyNumber(data.id, data.num)
			},
			// 删除购物车商品
			delOnClickEvent(id) {
				this._deleteCart(id)
			}
		},
		watch: {
			// 监听登录状态
			isLogin(newValue) {
				if (newValue == true) {
					this.__init()
				}
			},
			// 监听购物车商品数量是否变化
			'$store.state.cartCount'(newValue) {
				this.__init()
			},
			// 监听购物车商品数量是否变化
			'$store.state.cartTotalCount'(newValue) {
				this.__init()
			}
		},
		created() {
			if (this.isLogin) {
				this.__init()
			}
		}
	}
</script>

<style scoped lang="scss">
	.cart {
		margin-bottom: 102rpx;
	}
</style>
