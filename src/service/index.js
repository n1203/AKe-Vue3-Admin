/**
 * 本目录为card映射模块组件
 * 如果需要定制新的card，可以按本模块规范开发
 */

 let modules = {}
 Object.entries(import.meta.globEager('./*.js')).filter(([key]) => key.indexOf('index.js') === -1).forEach(([key, module]) => {
   modules[key.replace('./', '').replace('.js', '')] = module.default
 })
 export default modules