<template lang="pug">
	section.home__container
		div.componets__block__title js 组件
		ul.componets__list
			li.componets__item
				router-link(to="/toast") toast
			li.componets__item
				router-link(to="/swipe") swipe
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.componets__block__title
	font-size 20px
	text-align center
	line-height 40px
.componets__item
	font-size: 20px
	border-top: 1px solid #555
	border-bottom: 1px solid #555
	line-height: 40px
.componets__item + .componets__item
	border-top: none
</style>
