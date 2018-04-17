<template lang="pug">
	section
		Popup(
			v-model="isShow"
		)
		Button.popup__position(@click="isShowFn") 显示 Popup
</template>

<script>
export default {
	name: 'popup',
	data () {
		return {
			isShow: false,
		}
	},
	methods: {
		isShowFn () {
			this.isShow = true
		},
	},

}
</script>

<style lang="stylus" scoped>
.popup__position
	margin-top: 26vh
	width: 70%
	margin-left: 15%
</style>

