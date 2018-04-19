<template lang="pug">
	div
		Masker(v-model="visible")
			span 自定义遮罩里面的内容

		Button(@click="visible=true") show
</template>

<script>

export default {
	name: 'masker',
	data () {
		return {
			visible: false,
		}
	},
	methods: {

	},
}
</script>

