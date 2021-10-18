import { reactive } from "vue"

const store = reactive({
  userInfo: {},
  test: 1
})

window.store = store

export default store