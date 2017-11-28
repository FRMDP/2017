// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './state'
import VueSocketio from 'vue-socket.io'

Vue.use(VueSocketio,'http://localhost:3000')


import '../src/assets/futbol/html/css/bootstrap.css';
import '../src/assets/futbol/html/js/dl-menu/component.css';
import '../src/assets/futbol/html/css/slick.css';
import '../src/assets/futbol/html/css/slick-theme.css';
import '../src/assets/futbol/html/css/font-awesome.css';
import '../src/assets/futbol/html/css/svg-icons.css';
import '../src/assets/futbol/html/css/prettyPhoto.css';
import '../src/assets/futbol/html/css/typography.css';
import '../src/assets/futbol/html/css/widget.css';
import '../src/assets/futbol/html/css/shortcodes.css';
import '../src/assets/futbol/html/style.css';
import '../src/assets/futbol/html/css/color.css';
import '../src/assets/futbol/html/css/responsive.css';

import '../src/assets/futbol/html/js/jquery.js';
import '../src/assets/futbol/html/js/bootstrap.js';
import '../src/assets/futbol/html/js/slick.min.js';
import '../src/assets/futbol/html/js/downCount.js';
import '../src/assets/futbol/html/js/waypoint.js';
import '../src/assets/futbol/html/js/jprogress.js';
import '../src/assets/futbol/html/js/jquery.prettyPhoto.js';
import '../src/assets/futbol/html/js/custom.js';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
