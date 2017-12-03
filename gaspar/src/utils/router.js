import VueRouter from 'vue-router'
import verNoticia from '../componentes/ver-noticia.vue'
import nuevaNoticia from '../componentes/nueva-noticia.vue'
import todasNoticias from '../componentes/todas-noticias.vue'

export default new VueRouter({
  routes: [
	  { path: '/news', component: todasNoticias },
	  { path: '/addnew', component: nuevaNoticia },
	  { path: '/news/:id', component: verNoticia},
    { path: '/category/:cat', component: todasNoticias},
    { path: '/', component: todasNoticias}
	]
});
