<template lang="pug">
	section
		div
			button(@click="showToast") 显示 toast
</template>

<script>
export default {
	name: 'Toast',
	data () {
		return {
			value: '父组件动态传值'
		}
	},
	mounted () {
		// console.log('demo.vue')
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
