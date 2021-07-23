<template>
	<view class="detail" v-if="Object.keys(goods).length">
		<!-- 商品图片 -->
		<swiper :list="goods.pics_url" @imageLoad="imageLoad"/>
		<!-- 商品信息 -->
		<info :data="goods"/>
		<!-- 标签栏 -->
		<tabbar ref="tabbar" 
						id="tabbar"
						:class="{tabbar: isFixedTabBar}"
						:list="titles" 
						@tabBarOnClick="tabBarOnClick"/>
		<view v-if="isFixedTabBar" style="height: 80rpx; background: #FFFFFF;"></view>
		<!-- 概述 -->
		<content id="content" :data="goods.details"/>
		<!-- 评论 -->
		<comments id="comments" :list="comments"/>
		<!-- 相关推荐 -->
		<recommends id="recommends" :list="recommends"/>
		<!-- 底部导航栏 -->
		<bottomnav @addCartOnClick="addCartOnClick" />
		<!-- 回到顶部 -->
		<backtop v-if="isShowBackTop"/>
	</view>
</template>

<script>
	import { getGoodsDetail } from 'services/goods'
	import { addCart } from 'services/cart'
	// components
	import swiper from 'components/swiper/swiper'
	import tabbar from 'components/tabbar/tabbar'
	import backtop from 'components/backtop/backtop'
	// childComp
	import info from './childComp/info'
	import content from './childComp/content'
	import recommends from './childComp/recommends'
	import comments from './childComp/comments'
	import bottomnav from './childComp/bottomnav'
	
	export default {
		name: 'detail',
		// 获取页面参数
		onLoad(option) {
			this.goods_id = option.id
		},
		data() {
			return {
				goods_id: '',
				goods: {},
				recommends: [],
				comments: [],
				titles: ["概述", "评论", "相关推荐"],
				isFixedTabBar: false,
				tabbarScrollTop: 0,
				contentScrollTop: 0,
				commentsScrollTop: 0,
				recommendsScrollTop: 0,
				isShowBackTop: false,
			}
		},
		components: {
			// components
			swiper,
			tabbar,
			backtop,
			// childComp
			info,
			content,
			recommends,
			comments,
			bottomnav
		},
		methods: {
			// 请求商品数据
			_geGoodsData(id) {
				getGoodsDetail(id).then(result => {
					this.goods = result.goods
					// 判断商品是否为多图，如果不是则把封面图赋值
					if (!result.goods.pics_url.length) {
						this.goods.pics_url.push({'img_url': result.goods.cover_url});
					}
					this.recommends.push(...result.like_goods)
					this.comments.push(...result.goods.comments)
				})
			},
			_addCart(number = 1) {
				const goods_id = this.goods_id
				addCart(goods_id, number).then(result => {
					uni.showToast({
						title: '加入购物车成功'
					})
					// 设置购物车数量
					this.$store.dispatch('setCartCount')
				})
			},
			// 页面加载获取DOM元素的距离顶部的高度
			_DOMTop () {
				uni.createSelectorQuery()
					.in(this)
					.select('#content')
					.boundingClientRect(result => {
						this.contentScrollTop = result && result.top
					})
					.exec();
				uni.createSelectorQuery()
					.in(this)
					.select('#comments')
					.boundingClientRect(result => {
						this.commentsScrollTop = result && result.top
					})
					.exec();
				uni.createSelectorQuery()
					.in(this)
					.select('#recommends')
					.boundingClientRect(result => {
						this.recommendsScrollTop = result && result.top
					})
					.exec();
				uni.createSelectorQuery()
					.in(this)
					.select('#tabbar')
					.boundingClientRect(result => {
						this.tabbarScrollTop = result && result.top
					})
					.exec();
			},
			// 监听标签栏点击事件
			tabBarOnClick(index) {
				const type = [
					this.contentScrollTop, 
					this.commentsScrollTop, 
					this.recommendsScrollTop
				];
				// 点击滚动到相应位置
				uni.pageScrollTo({
					scrollTop: parseInt(type[index]) - 40,
					duration: 300
				})
			},
			// 图片加载完成
			imageLoad() {
				// 获取页面DOM元素高度
				this.$nextTick(() => {
					this._DOMTop()
				})
			},
			// 加入购物车
			addCartOnClick() {
				this._addCart()
			}
		},
		created() {
			// 获取购物车数量
			this.$store.dispatch('setCartCount')
		},
		mounted() {
			this._geGoodsData(this.goods_id)
			// 获取页面DOM元素高度
			this.$nextTick(() => {
				this._DOMTop()
			})
		},
		// 监听滚动位置
		onPageScroll(options) {
			const scrollTop = options.scrollTop
			// 滚动到固定位置标签栏吸顶
			let content = 0
			let comments = 0
			let recommends = 0
			if (scrollTop >= this.tabbarScrollTop) {
				this.isFixedTabBar = true
				content = this.contentScrollTop - 40
				comments = this.commentsScrollTop - 40
				recommends = this.recommendsScrollTop - 40
			} else {
				this.isFixedTabBar = false
				content = this.contentScrollTop
				comments = this.commentsScrollTop
				recommends = this.recommendsScrollTop
			}
			// 控制滚动位置显示标签栏
			let index = this.$refs.tabbar.currentIndex
			if (scrollTop >= content && scrollTop < comments) {
				index = 0
			} else if (scrollTop >= comments && scrollTop < recommends) {
				index = 1
			} else if (scrollTop >= recommends){
				index = 2
			}
			if (this.$refs.tabbar.currentIndex != index) {
				this.$refs.tabbar.currentIndex = index
			}
			// 处理回到顶部
			if (scrollTop >= 1000) {
				this.isShowBackTop = true;
			} else {
				this.isShowBackTop = false;
			}
		}
	}
</script>

<style scoped lang="scss">
	.tabbar {
		position: fixed;
		top: var(--window-top);
		left: 0;
		right: 0;
	}
</style>
