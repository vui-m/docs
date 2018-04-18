<template lang="pug">
	section
		InfiniteScroll(
			v-model="loading"
			@load="loadMore"
			:finished="finished"
			:scroll-distance="10"
		)
			div.infinite-scroll__swapper
				ul.infinite-scroll__list
					li.infinite-scroll__item(v-for="(item, $index) in list") {{item}}
</template>

<script>
export default {
	data () {
		return {
			list: 5,
			distance: 20,
			finished: false,
			loading: false,
		}
	},
	mounted () {

	},
	methods: {
		loadMore () {
			// this.loading = true
			setTimeout(() => {
				this.list += 5
				this.loading = false
			}, 4500)
			if (this.list > 20) {
				this.finished = true
			}
		},
	},
}
</script>

<style lang="stylus" scoped>
.infinite-scroll__swapper
	border: 1px solid red
.infinite-scroll__list
	
.infinite-scroll__item
	line-height: 40px
	border-bottom: 1px solid #e1e1e1
</style>

