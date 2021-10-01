import { reactive } from "vue"

const store = reactive({
  test: 1
})

window.store = store

export default store