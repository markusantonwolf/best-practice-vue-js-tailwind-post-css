const items = [
  {
    route: '/home',
    text: 'navigation.home',
  },
  {
    route: '/audio',
    text: 'navigation.audio',
  },
  {
    route: '/icon',
    text: 'navigation.icon',
  },
  {
    route: '/notification',
    text: 'navigation.notification',
  },
]

export const namespaced = true

export const state = {
  items: items,
  popup: false,
}

export const mutations = {
  SET_POPUP(state, payload) {
    state.popup = payload
  },
}
export const actions = {
  popupToggle({ state, commit }) {
    commit('SET_POPUP', !state.popup)
  },
  popupHide({ commit }) {
    commit('SET_POPUP', false)
  },
}
