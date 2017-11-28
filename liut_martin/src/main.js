import Vue from 'vue'
import App from './App'
import router from './router'
import store from './state'

// Componentes de 3ros
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'; // para mostrar u ocultar elementos del DOM
import axios from 'axios'

// Configuración
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
	el: '#app',
	router,
	store,
	template  : '<App/>',
	components: { App }
})
