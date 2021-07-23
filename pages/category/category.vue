<template>
	<view class="category">
		<!-- 左边 -->
		<leftnav class="left" :list="category_list" @cateOnClick="cateOnClick"/>
		<rightgoods class="right" id="right" :list="showGoodsList"
								:currentId="currentId"
								:status="status"
								:isShowLoadMore="isShowLoadMore"
								:contentText="contentText"
								@scrolltolower="scrolltolower"/>
			
	</view>
</template>

<script>
	import { getCategoryList } from 'services/category.js'
	import { getGoodsList } from 'services/goods.js'
	// childComp
	import leftnav from './childComp/leftnav'
	import rightgoods from './childComp/rightgoods'
	
	export default {
		name: 'category',
		data() {
			return {
				category_list: [],
				currentId: 0,
				goods_list: {
					page: 0,
					list: []
				},
				isScrolltolower: false,
				isShowLoadMore: false,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多~',
					contentrefresh: '加载中',
					contentnomore: '我是有底线的~'
				}
			}
		},
		components: {
			// cihldComp
			leftnav,
			rightgoods
		},
		computed: {
			showGoodsList() {
				return this.goods_list.list
			}
		},
		methods: {
			// 获取分类导航
			_getCategoryList() {
				getCategoryList().then(result => {
					const categories = result.categories
					categories.forEach(item => {
						this.category_list.push(...item.children)
					})
					this.currentId = this.category_list[0].id
					// 获取商品列表
					this._getGoodsList(this.currentId)
				})
			},
			// 获取商品列表
			_getGoodsList(category_id, type = '') {
				const page = this.goods_list.page + 1
				getGoodsList(category_id, page).then(result => {
					this.goods_list.list.push(...result.goods.data)
					this.goods_list.page += 1	
					if (type == 'load') {
						this.status = 'more';
					}
					if (!result.goods.data.length) {
						this.status = 'noMore'
						this.isScrolltolower = true
					}
				})
			},
			// 左侧导航点击事件
			cateOnClick(id) {
				this.currentId = id
				this.goods_list.list = [];
				this.goods_list.page = 0;
				this.isScrolltolower = false
				this.isShowLoadMore = false
				this.status = 'more'
				this._getGoodsList(this.currentId)
			},
			// 滚动到底部
			scrolltolower() {
				if (!this.isScrolltolower) {
					this.isShowLoadMore = true
					this.status = 'loading'
					this._getGoodsList(this.currentId, 'load')
				}
			}
		},
		created() {
			this._getCategoryList()
		}
	}
</script>

<style scoped lang="scss">
	.category {
		display: flex;
		flex-direction: row;
		height: 100vh;
		overflow: hidden;
		.left {
			width: 35%;
			height: 100%;
			overflow: hidden;
		}
		.right {
			width: 65%;
			height: 100%;
			overflow: hidden;
		}
	}
</style>
