import manage from './manage'

export default {
	props: {
		value: Boolean,
		closeOnClickMask: {
			type: Boolean,
			default: true,
		},
	},
	mounted () {
		if (this.value) this.open()
	},
	watch: {
		value (val) {
			// console.log('mask: ', val, this)
			this[val ? 'open' : 'close']()
		},
	},
	methods: {
		open () {
			manage.open(this, {})
		},
		close () {
			manage.close(this, {})
		},
	},
}