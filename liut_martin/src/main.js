import Vue            from 'vue'
import VueRouter      from 'vue-router'
import App            from './components/App.vue'
import storageService from './services/storageService'
import router         from './utils/router'

//COMPONENTES DE TERCEROS
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import axios from 'axios'

Vue.prototype.$storageService = storageService;
Vue.prototype.$http = axios;

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.material.registerTheme({
	default: {
		primary: {
			color     : 'light-green',
			hue       : 700,
			background: 'grey'
		},
		accent: 'red'
	}
})

new Vue({
	router,
	el: '#app',
	render: h => h(App)
})

