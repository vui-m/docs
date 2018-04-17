<template lang="pug">
	section.infinite-scroll(
		@scroll="handleScroll"
	)
		ul.infinite-scroll__list
			li.infinite-scroll__item(v-for="(item, $index) in list") {{item}}
</template>

<script>
export default {
	data () {
		return {
			list: 20,
			distance: 20,
			lock: false,
		}
	},
	mounted () {
		this.init()
	},
	methods: {
		init () {
			let list = document.querySelector('.infinite-scroll__list')
			console.log(this.$el, this.$el.clientHeight, list.clientHeight, document.documentElement.getBoundingClientRect())
		},
		handleScroll () {
			let scroll = document.querySelector('.infinite-scroll')
			let list = document.querySelector('.infinite-scroll__list')

			let result = list.clientHeight - this.$el.clientHeight - scroll.scrollTop
			if (!this.lock && result <= this.distance) {
				console.log('=====================load-more')
				this.lock = true
				this.loadMore()
			}
			console.log('----', result)
		},
		loadMore () {
			setTimeout(() => {
				this.list += 20
				this.lock = false
			}, 1000)
		},
	},
}
</script>

<style lang="stylus" scoped>
.infinite-scroll
	height: 100vh
	overflow: scroll
	background-color: #efefef
.infinite-scroll__list
	
.infinite-scroll__item
	line-height: 40px
	border-bottom: 1px solid #e1e1e1
</style>

