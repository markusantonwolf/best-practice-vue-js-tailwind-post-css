import Vue from 'vue'
import Vuex from 'vuex'

import * as notifications from '@/store/modules/notifications/index.js'
import * as navigation from '@/store/modules/navigation/index.js'
import * as meta from '@/store/modules/meta/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    notifications,
    navigation,
    meta,
  },
})
