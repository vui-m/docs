<template lang="pug">
	section
		div(id="demo")
			button(@click="showToast") 显示 toast
		//- Test(:txt="value")
</template>

<script>
export default {
	name: 'demo',
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
	span
		color: red
		font-size 30px
</style>
