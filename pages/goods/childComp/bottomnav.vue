<template>
	<view class="nav">
		<uni-goods-nav :fill="true"
										:options="options" 
										:button-group="buttonGroup"
										@click="onClick"
										@buttonClick="buttonClick"/>
	</view>
</template>

<script>
	export default {
		name: 'bottomnav',
		data() {
			return {
				options: [
					{
						icon: 'headphones',
						text: '客服'
					},  
					{
						icon: 'cart',
						text: '购物车',
						info: this.$store.state.cartCount
					},
					{
						icon: 'shop',
						text: '收藏',
					},
				],
				buttonGroup: [
					{
						text: '加入购物车',
						backgroundColor: '#ffa200',
						color: '#fff',
					},
					{
						text: '立即购买',
						backgroundColor: '#ff0000',
						color: '#fff'
					}
				]
			}
		},
		methods: {
			onClick(e) {
				// 跳转到购物车
				if (e.index == 1) {
					uni.switchTab({
						url: '/pages/cart/cart'
					})
				}
			},
			buttonClick(e) {
				if (e.index == 0){
					this.$emit('addCartOnClick')
				}
			}
		},
		watch: {
			// 监听购物车数量
			'$store.state.cartCount'(newValue) {
				// 修改购物车角标值
				this.options[1].info = newValue
			}
		}
	}
</script>

<style scoped lang="scss">
	.nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
</style>
