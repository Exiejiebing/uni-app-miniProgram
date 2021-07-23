<template>
	<view class="index" v-if="showGoodsList.length">
		<!-- 轮播图 -->
		<swiper :list="banners" @imageLoad="imageLoad"/>
		<!-- 推荐 -->
		<recommend :list="recommend" @imageLoad="imageLoad"/>
		<!-- 标签栏 -->
		<tabbar id="tabbar" 
						:class="{tabbar: isFixedTabBar}"
						:list="titles" 
						@tabBarOnClick="tabBarOnClick"/>
		<view style="height: 80rpx; background: #FFFFFF;" v-if="isFixedTabBar"></view>
		<!-- 商品数据 -->
		<goodslist class="list" :list="showGoodsList"/>
		<!-- 加载更多 -->
		<uni-load-more :status="status" :icon-size="16" :contentText="contentText"/>
		<!-- 回到顶部 -->
		<backtop v-if="isShowBackTop"/>
	</view>
</template>

<script>
	import { getData, getGoodsData } from 'services/index.js';
	// components
	import swiper from 'components/swiper/swiper';
	import tabbar from 'components/tabbar/tabbar';
	import goodslist from 'components/goodslist/goodslist';
	import backtop from 'components/backtop/backtop';
	// childComp
	import recommend from './childComp/recommend';
	export default {
		data() {
			return {
				banners: [],
				recommend: [],
				titles: ["热销", "推荐", "新款"],
				currentType: 'sales',
				goods_list: {
					'sales': { page: 0, list: [] },
					'recommend': { page: 0, list: [] },
					'new': { page: 0, list: [] }
				},
				isShowBackTop: false,
				isFixedTabBar: false,
				tabbarScrollTop: 0,
				status: 'more',
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多'
				}
			}
		},
		components: {
			// components
			swiper,
			tabbar,
			goodslist,
			backtop,
			// childComp
			recommend,
		},
		// 计算属性
		computed: {
			showGoodsList() {
				return this.goods_list[this.currentType].list;
			}
		},
		methods: {
			// 初始化网络数据
			init() {
				this._getData();
				this._getGoodsData('sales');
				this._getGoodsData('recommend');
				this._getGoodsData('new');
			},
			// 获取所有数据
			_getData() {
				getData().then(result => {
					this.banners = result.slides;
					this.recommend = result.goods.data;
				})
			},
			// 获取商品数据
			_getGoodsData(type, loadMore = false) {
				if (loadMore) {
					this.status = 'loading';
				}
				const page = this.goods_list[type].page + 1;
				getGoodsData(type, page).then(result => {
					this.goods_list[type].list.push(...result.goods.data);
					this.goods_list[type].page += 1;
					if (loadMore) {
						this.status = 'more';
					}
					if (!result.goods.data.length) {
						this.status = 'noMore'
					}
				})
			},
			// 页面加载获取DOM元素的距离顶部的高度
			_DOMTop() {
				uni.createSelectorQuery()
					.in(this)
					.select('#tabbar')
					.boundingClientRect(result => {
						this.tabbarScrollTop = result && result.top;
					})
					.exec();
			},
			// 标签栏点击事件
			tabBarOnClick(index) {
				const types = ['sales', 'recommend', 'new'];
				this.currentType = types[index];
				// 切换的时候，直接跳到标签栏浮动位置
				uni.pageScrollTo({
					scrollTop: this.tabbarScrollTop,
					duration: 0
				})
			},
			// 图片加载完成
			imageLoad() {
				this.$nextTick(() => {
					this._DOMTop()
				})
			}
		},
		created() {
			this.init();
		},
		mounted() {
			// 可以不做
			this.$nextTick(() => {
				this._DOMTop()
			})
		},
		// 滚动到底部加载更多
		onReachBottom() {
			this._getGoodsData(this.currentType, true)
		},
		// 监听滚动位置
		onPageScroll(options) {
			const scrollTop = options.scrollTop
			// 处理回到顶部
			if (scrollTop >= 1000) {
				this.isShowBackTop = true;
			} else {
				this.isShowBackTop = false;
			}
			// 处理标签栏吸顶
			if (scrollTop >= this.tabbarScrollTop) {
				this.isFixedTabBar = true;
			} else {
				this.isFixedTabBar = false;
			}
		}
	}
</script>

<style scoped>
	.index {
		font-family: monospace, monospace;
		font-size: 28rpx;
		color: #666666;
	}
	.tabbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
