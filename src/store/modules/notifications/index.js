export const namespaced = true

export const state = {
  messages: [],
}

let id = 1

export const mutations = {
  PUSH(state, message) {
    state.messages.push(message)
  },
  DELETE(state, message_id) {
    state.messages = state.messages.filter(message => message.id !== message_id)
  },
}
export const actions = {
  add({ commit }, message) {
    commit('PUSH', {
      ...message,
      id: id++,
    })
  },
  remove({ commit }, message_id) {
    commit('DELETE', message_id)
  },
}
