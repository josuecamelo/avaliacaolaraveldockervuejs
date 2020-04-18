// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// require('./bootstrap')

import Vue from 'vue'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false

store.dispatch('loadCategories')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
