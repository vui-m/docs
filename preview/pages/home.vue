<template lang="pug">
	section.home__container
		div.home__vui-m__logo
			img(
				:src="vuiImg"
			)
		div.componets__block__title js 组件
		ul.componets__list
			li(
				v-for="(item, $index) in components"
				:key="$index"
			).componets__item
				router-link(:to="item.url") {{item.name}}
		
</template>

<script>
const vuiImg = require('../assets/img/vui_m_small.png')

export default {
	data () {
		return {
			vuiImg: vuiImg,
			components: [
				{name: 'toast', url: '/toast'},
				{name: 'swipe', url: '/swipe'},
				{name: 'action-sheet', url: '/action-sheet'},
				{name: 'popup', url: '/popup'},
			],
		}
	}
}
</script>

<style lang="stylus" scoped>
.home__vui-m__logo
	height: 90px
	width: auto
	text-align: center
	img
		height: 100%
.componets__block__title
	font-size 20px
	text-align center
	line-height 40px
	background: #9cc
	color: #369
.componets__item
	font-size: 20px
	border-bottom: 1px solid #555
	line-height: 40px
</style>
