<template lang="pug">
	div.swipe__item
		slot
</template>

<script>
export default {
	name: 'Swipe-item'
}
</script>

<style lang="stylus" scoped>
.swipe__item
	float: left
	width: 100%
	position: relative
</style>

