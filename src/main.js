// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Localization plugin.
import { VueGettext } from 'vue-i18n-gettext'
import marked from 'marked' // The `marked` module can extend the gettext module so that it can render markdown layouts.
import gettextConfig from '../config/i18n'
Vue.use(VueGettext, gettextConfig, router, marked)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
