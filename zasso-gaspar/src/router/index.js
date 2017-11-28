import Vue from 'vue'
import Router from 'vue-router'
import Liga from '@/components/Liga'
import Equipo from '@/components/Equipo'
import Home from '@/components/Home'
import ChatGame from '@/components/ChatGame'

Vue.use(Router)

export default new Router({
  routes: [
     { path: '/', component: Home },
     { path: '/ligas/:id', name: 'ligas', component: Liga },
     { path: '/equipos/:id', component: Equipo },
     { path: '/chatgame/:id', component: ChatGame },
  ]
})
