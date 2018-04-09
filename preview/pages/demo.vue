<template lang="pug">
	section
		Test(:txt="value")
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

	},
}
</script>

<style lang="stylus" scoped>
	span
		color: red
		font-size 30px
</style>
