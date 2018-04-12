<template lang="pug">
	section
		div
			button(@click="showToast") 显示 toast
</template>

<script>
// README.md

/*  this.$toast('String')
	this.$toast({
		position: 'top | bottom | middle(default)',
		message: 'String',
}) */

export default {
	name: 'Toast',
	data () {
		return {
			value: '父组件动态传值'
		}
	},
	mounted () {
	},
	methods: {
		showToast () {
			this.$toast({
				// position: 'top',
				message: 'toast 轻提示！'
			})
		},
	},
}
</script>

<style lang="stylus" scoped>
	button
		color: blue
		font-size: 20px
		outline: none
</style>
