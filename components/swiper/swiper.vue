<template>
	<view class="swiper" v-if="list.length">
		<swiper indicator-dots 
						autoplay
						circular
						:interval="3000" 
						:duration="1000"
						indicator-active-color="#E43130">
			<swiper-item v-for="item in list" :key="item.id">
				<image :src="item.img_url" @load="imageLoad"/>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"swiper",
		props: {
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				isLoad: false
			}
		},
		methods: {
			imageLoad() {
				if (!this.isLoad) {
					this.$emit('imageLoad');
					this.isLoad = true;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.swiper image{
		width: 100%;
		height: 100%;
	}
</style>
