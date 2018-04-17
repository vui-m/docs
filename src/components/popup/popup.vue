<template lang="pug">
	transition(name="popup__layer")
		div.popup__container(
			v-if="isShowPop"
			@click="close"
		)
			slot
</template>

<script>
import mixPopup from 'src/mixins/popup'

export default {
	name: 'Popup',
	mixins: [mixPopup,],
	props: {
		// closeOnClickMask: {
		// 	type: Boolean,
		// 	default: true,
		// },
	},
	// data () {
	// 	return {
	// 		isShowPop: this.value
	// 	}
	// },
	methods: {
		close () {
			if (this.closeOnClickMask) this.isShowPop = false
		},
	},
	// watch: {
	// 	value (val) {
	// 		this.isShowPop = val
	// 	},
	// 	isShowPop (val) {
	// 		if (!val) this.$emit('input', false)
	// 	},
	// },

}
</script>

<style lang="stylus" scoped>
.popup__container
	position: fixed
	background-color: #000
	top: 0
	left: 0
	width: 100%
	height: 100%
	opacity: .4
	transition: opacity .2s linear
.popup__layer-enter,
// .popup__layer-leave-to
	opacity: 0
</style>

