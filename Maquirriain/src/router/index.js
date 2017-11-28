import Vue from 'vue'
import Router from 'vue-router'
import rmSchedule from '../components/rm-schedule.vue';
import rmQualifying from '../components/rm-qualifying.vue';
import rmResults from '../components/rm-results.vue';
import rmF1Teams from '../components/rm-f1Teams.vue'
import rmPitStop from '../components/rm-pitStop.vue'
import rmCircuits from '../components/rm-circuits.vue'
import rmLapsTimes from '../components/rm-lapsTimes.vue'
import rmDrivers from '../components/rm-drivers.vue';
import rmStandings from '../components/rm-standings.vue';
import rmDetailResult from '../components/rm-detailResult.vue';
import rmIndex from '../components/rm-index.vue';
import rmChat from '../components/rm-chat.vue';
Vue.use(Router)

export default new Router({
  routes: [
       {path: '/schedule', component: rmSchedule},
    {path: '/qualifying', component: rmQualifying},
    {path: '/standings', component: rmStandings},
    {path: '/f1Teams', component: rmF1Teams},
    {path: '/circuits', component: rmCircuits},
    {path: '/lapsTimes', component: rmLapsTimes},
    {path: '/pitStop', component: rmPitStop},
    {path: '/', component: rmIndex},
    {path: '/chat', component: rmChat},
    {path: '/results', component: rmResults},
    {path: '/drivers', component: rmDrivers},
    {path: '/results/:season/:stage/:position', component: rmDetailResult},
  ]
})
