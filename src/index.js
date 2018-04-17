// js components
import Test from './components/test'
import Toast from './components/toast'
import Swipe from './components/swipe'
import SwipeItem from './components/swipe-item'
import Popup from './components/popup'
import ActionSheet from './components/action-sheet'

// css components
import Button from './components/button'

const components = {
	// js components
	Test,
	Swipe,
	SwipeItem,
	Popup,
	ActionSheet,
	// css components
	Button,
}

const vui = {
	...components,
}

const install = function (Vue, opt = {}) {
	if (install.installed) return

	Object.keys(vui).forEach(key => {
		Vue.component(vui[key]['name'], vui[key])
	})

	Vue.$toast = Vue.prototype.$toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install)
}

export const cpts = {
	...components,
}

export default install
