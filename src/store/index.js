import { createStore } from 'vuex'
import layout from './layout'

const store = createStore({
  modules: {
    layout
  },
})

window.store = store

export default store