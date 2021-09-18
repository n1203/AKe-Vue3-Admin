const Custom = {
  // 主要是这个方法
  install: function (Vue) {
    Object.entries(import.meta.globEager('./*.vue')).forEach(([key, module]) => {
      Vue.component(`ake-${key.replace('./', '').replace('.vue', '')}`, module.default)
    })
  }
}

export default Custom