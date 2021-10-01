import Home from './views/Home.vue'
import service from './service'

const routeValues = service.sidebar.map(route => {
  route.component = Home
  if (route.children) {
    route.children = route.children.map(v => {
      v.component = Home
      return v
    })
  }
  return route
})

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = routeValues