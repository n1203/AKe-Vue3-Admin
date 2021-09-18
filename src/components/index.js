let modules = {}
Object.entries(import.meta.globEager('./*.vue')).forEach(([key, module]) => {
  modules[key.replace('./', '').replace('.vue', '').toUpperCase()] = module.default
})
export default modules