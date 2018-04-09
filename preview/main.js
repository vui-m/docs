import Vue from 'vue'
import Router from 'vue-router'
import Vui from 'src/index.js'

import App from './App'
import RouterConfig from './router'

Vue.use(Router)
Vue.use(Vui)

Vue.config.productionTip = false

var vm = new Vue({
	el: '#app',
	router: RouterConfig,
	components: { App },
	template: '<App/>'
})
