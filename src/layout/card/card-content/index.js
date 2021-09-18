let modules = {}
Object.entries(import.meta.globEager('./*.vue')).forEach(([key, module]) => {
  modules[key.replace('./', '').replace('.vue', '')] = module.default
})
export default modules