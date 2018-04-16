<template lang="pug">
	section.swipe__container
		div.swipe__list
			slot
		div.siwpe__indicators(
			v-if="isShowIndicators"
		)
			span.indicators__item(
				v-for="(slide, $index) in slides"
				:class="{ 'indicator__active': currentIndex === $index }"
			)
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
			default: true,
		},
		// 是否显示导航 点
		isShowIndicators: {
			type: Boolean,
			default: true,
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
			slides: [],
			currentIndex: 0,
			swiperInstance: null,
		}
	},
	mounted () {
		this.initSwiper()
		this.indicators()
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
				changeSlide: this.isShowIndicators ? this.changeSlide : null
			})
		},
		indicators () {
			this.slides = this.swiperInstance.getNumSlides()
			this.currentIndex = this.swiperInstance.getPos()
			console.log('this.slides: ', this.slides)
		},
		changeSlide (index, ele) {
			this.currentIndex = index
			// fixed bug status for 2 slide
			if (this.slides === 2) {
				this.currentIndex = index % 2
			}
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
.siwpe__indicators
	position: absolute
	left: 50%
	bottom: 10px
	transform: translate(-50%, 0)
.indicators__item
	margin: 0 2px
	background-color: #000
	opacity: .2
	display: inline-block
	height: 8px
	width: 8px
	border-radius: 50%
.indicator__active
		background-color: #fff
</style>

