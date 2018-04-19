<template lang="pug">
	transition(name="mask__layer")
		div.mask__container(
			v-if="visible"
			@click="close"
		)
			slot
</template>

<script>

export default {
	props: {
		visible: Boolean,
	},
	methods: {
		close (event) {
			this.$emit('click', event)
		},
	},

}
</script>

<style lang="stylus" scoped>
.mask__container
	position: fixed
	background-color: #000
	top: 0
	left: 0
	width: 100%
	height: 100%
	opacity: .4
	transition: opacity .2s linear
.mask__layer-enter
	opacity: 0
</style>

