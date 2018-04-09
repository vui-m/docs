import Header from './components/header'


const components = {
	Header,
}

const vui = {
	...components,
}

const install = function (Vue, opt = {}) {
	if (install.installed) return

	Object.keys(vui).forEach(key => {
		Vue.component(key, vui[key])
	})
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install)
}

export const cpts = {
	...components,
}

export default install
