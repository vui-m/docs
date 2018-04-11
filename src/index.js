import Test from './components/test'
import Toast from './components/toast'

const components = {
	Test,
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
