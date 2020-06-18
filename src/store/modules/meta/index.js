import merge from 'lodash/merge'
import { DEFAULT_LANGUAGE } from '@/constants.js'

export const namespaced = true

export const state = {
  language: DEFAULT_LANGUAGE,
  data: {
    title: '',
    site: '',
    description: '',
    link: '',
    image: {
      src: '',
      width: '',
      height: '',
    },
  },
}

export const mutations = {
  SET_META(state, payload) {
    state.data = payload
  },
  SET_LANGUAGE(state, payload) {
    state.language = payload
  },
}
export const actions = {
  setMeta({ state, commit }, values) {
    commit('SET_META', merge(state.data, values))
  },
  setLanguage({ commit }, language) {
    commit('SET_LANGUAGE', language)
  },
}
