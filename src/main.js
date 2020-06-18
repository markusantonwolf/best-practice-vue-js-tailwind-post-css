import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import '@/assets/styles/tailwind.css'
import router from '@/router'
import store from '@/store'
import { i18n } from '@/plugins/i18n'
import { meta } from '@/plugins/meta'
import { clipboard } from '@/plugins/clipboard'
import VueClipboard from 'vue-clipboard2'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(VueClipboard, clipboard)
Vue.use(VueMeta, meta)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
