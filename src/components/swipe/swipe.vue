<template lang="pug">
	section.swipe__container
		div.swipe__list
			slot
</template>

<script>
import Swipe from 'root/static/js/swipe'
export default {
	name: 'Swipe',
	props: {
		startSlide: {
			type: Number,
			default: 1,
		},
		speed: {
			type: Number,
			default: 400,
		},
		auto: {
			type: Number,
			default: 3000,
		},
		continuous: {
			type: Boolean,
			default: true,
		},
		disableScroll: {
			type: Boolean,
			default: false,
		},
		stopPropagation: {
			type: Boolean,
			default: false,
		},

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
				callback: function(index, elem) {},
				transitionEnd: function(index, elem) {}
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
	width: 90vw
	height: 300px
	// border: 2px solid red
	box-sizing: border-box
</style>

