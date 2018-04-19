<template lang="pug">
	div.infinite-scroll(
		@scroll="handleScroll"
	)
		slot

		div.infinite-scroll__loading(
			v-show="loading"
		)
			slot(name="loading")
				span.loading-text {{loadingText}}
</template>

<script>
import { throttle } from 'src/utils/tips'

export default {
	name: 'InfiniteScroll',
	model: {
		prop: 'loading',
	},
	props: {
		loading: Boolean,
		finished: Boolean,
		immediateCheck: {
			type: Boolean,
			default: true
		},
		scrollDistance: {
			type: Number,
			default: 20,
		},
		loadingText: {
			type: String,
			default: '加载中...',
		},

	},
	data () {
		return {
			throttleLoad: null,
		}
	},
	mounted () {
		if (this.immediateCheck) {
			this.init()
		}
	},
	watch: {
		loading (val) {
			// console.log('watch: ', val)
			if (!val) this.$nextTick(this.handleScroll)
		},
		finished (val) {
			if (!val) this.$nextTick(this.handleScroll)
		},
	},
	methods: {
		init () {
			this.$nextTick(this.handleScroll)
			this.throttleLoad = throttle(this.checkLoad, 100)
		},
		handleScroll () {
			this.throttleLoad()
		},
		checkLoad () {
			if (this.finished || this.loading) {
				return
			}

			let scroll = this.$el
			let difference = scroll.scrollHeight - scroll.clientHeight - scroll.scrollTop
			if (difference < this.scrollDistance) {
				// console.log('=========loadMore')
				// loading = true 此次加载完毕
				this.$emit('input', true)
				// 加载更多 loadMore
				this.$emit('load')
			}
			// console.log('----', difference)
		},
	},
}
</script>

<style lang="stylus" scoped>
.infinite-scroll
	height: 100vh
	overflow: scroll
	background-color: #efefef
.infinite-scroll__loading
	line-height: 30px
	text-align: center
</style>

