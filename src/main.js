// This is where shit kicks off.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './components/Home.vue'
import Spotlight from './components/Spotlight.vue'
import Project from './components/project.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/spotlight', name: 'Spotlight', component: Spotlight },
  { path: '/spotlight/:project', name: 'Project', component: Project }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Home, Spotlight, Project }
})
