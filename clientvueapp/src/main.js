// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// require('./bootstrap')

import Vue from 'vue'
import router from './router'
import store from './vuex/store'
import axios from 'axios'

Vue.config.productionTip = false
const base = axios.create({
  baseURL: 'http://localhost:8888/api/v1/'
})

Vue.prototype.$http = base

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
