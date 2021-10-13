import Home from './views/Home.vue'
import Login from './views/login.vue'
import service from './service'

let routeValues = service.sidebar.map(route => {
  route.component = Home
  if (route.children) {
    route.children = route.children.map(v => {
      v.component = Home
      return v
    })
  }
  return route
})


routeValues = routeValues.concat([{
  path: '/login',
  meta: {
    title: '登陆',
    key: 'login',
  },
  component: Login,
  props: { hideLayout: true }
}])

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = routeValues