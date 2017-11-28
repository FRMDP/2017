import Vue           from 'vue'
import Router        from 'vue-router'
import mlProjects    from '../components/ml-projects.vue'
import mlUsers       from '../components/ml-users.vue'
import mlUser        from '../components/ml-user.vue'
import mlAbout       from '../components/ml-about.vue'
import mlProjectInfo from '../components/ml-project-info.vue'
import mlNotFound    from '../components/ml-not-found.vue'
import mlComments    from '../components/ml-comments.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',             component: mlProjects,    name: 'mlProjects'    },
    { path: '/projects/:id', component: mlProjectInfo, name: 'mlProjectInfo' },
    { path: '/users',        component: mlUsers,       name: 'mlUsers'       },
    { path: '/user/:id',     component: mlUser,        name: 'mlUser'        },
    { path: '/about',        component: mlAbout,       name: 'mlAbout'       },
    { path: '/comments',     component: mlComments,    name: 'mlComments'    },
    { path: '*',             component: mlNotFound,    name: 'mlNotFound'    }
  ]
})
