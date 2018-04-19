<template lang="pug">
	div(v-show="value")
		slot
</template>

<script>
import MaskMix from 'src/mixins/mask'

export default {
	name: 'Masker',
	// props: {
	// 	value: Boolean,
	// },
	mixins: [MaskMix],
}
</script>

