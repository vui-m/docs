<template lang="pug">
	section
		Swipe(
			:continuous="continuous"
			:auto="0"
		)
			Swipe-item(
				v-for="(item, $index) in list"
				:key="$index"
			)
				div.swipe__item__content(
					:style="{background: item.color}"
				) {{item.content}}

</template>

<script>
export default {
	name: 'swipe',
	data () {
		return {
			continuous: true,
			list: [
				{content: 'item 001', color: 'green'},
				{content: 'item 002', color: 'yellow'},
				{content: 'item 003', color: 'blue'},
			]
		}
	},
}
</script>

<style lang="stylus" scoped>
.swipe__item__content
	height: 200px
	font-size: 26px
	line-height: 200px
</style>
