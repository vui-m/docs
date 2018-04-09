<template lang="pug">
	section
		span header 组件： {{test}}
</template>

<script>
export default {
	name: 'Header',
	props: {
		test: {
			type: String,
			default: '默认值'
		}
	},
}
</script>

<style lang="stylus" scoped>
	span
		color: $test-color
		font-size: 30px
</style>

