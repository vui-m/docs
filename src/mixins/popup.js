import Popup from 'src/components/popup'

export default {
	props: {
		value: {
			type: Boolean,
			default: false,
		},
		closeOnClickMask: {
			type: Boolean,
			default: true,
		},
	},
	component: {
		Popup,
	},
	data () {
		return {
			isShowPop: this.value
		}
	},
	watch: {
		value (val) {
			this.isShowPop = val
		},
		isShowPop (val) {
			if (!val) this.$emit('input', false)
		},
	},
}