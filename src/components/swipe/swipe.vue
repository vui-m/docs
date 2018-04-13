<template lang="pug">
	section.swipe__container
		div.swipe__list
			slot
</template>

<script>
import Swipe from './swipe'
export default {
	name: 'Swipe',
	props: {
		// 索引位置 Swipe 开始位置
		startSlide: {
			type: Number,
			default: 0,
		},
		// Swipe 切换速度
		speed: {
			type: Number,
			default: 400,
		},
		// 自动切换时间，0 为暂停自动切换
		auto: {
			type: Number,
			default: 3000,
		},
		// 无限循环
		continuous: {
			type: Boolean,
			default: false,
		},
		// 停止对该容器的任何触摸滚动页面
		disableScroll: {
			type: Boolean,
			default: true,
		},
		// 停止事件传播
		stopPropagation: {
			type: Boolean,
			default: true,
		},
		// 在幻灯片更改时运行
		change: {
			style: Function,
			default: function (index, elem) {},
		},
		// 在结束幻灯片转换时运行
		transitionEnd:{
			type: Function,
			default: function (index, elem) {},
		}

	},
	data () {
		return {
			swiperInstance: null,
		}
	},
	mounted () {
		this.initSwiper ()
	},
	methods: {
		initSwiper () {
			this.swiperInstance = new Swipe(this.$el, {
				startSlide: this.startSlide,
				speed: this.speed,
				auto: this.auto,
				continuous: this.continuous,
				disableScroll: this.disableScroll,
				stopPropagation: this.stopPropagation,
				callback: this.change,
				transitionEnd: this.transitionEnd,
			})
		},
	},
}
</script>

<style lang="stylus" scoped>
.swipe__container
	overflow: hidden
	visibility: hidden
	position: relative
.swipe__list
	overflow: hidden
	position: relative
	box-sizing: border-box
</style>

