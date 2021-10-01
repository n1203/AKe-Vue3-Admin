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

// routes.push({ path: '/:path(.*)', component: NotFound })

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = routeValues
// routes = [
//   { path: '/', component: Home, meta: { title: 'Home' } },
//   // {
//   //   path: '/about',
//   //   meta: { title: 'About' },
//   //   component: About,
//   //   // example of route level code-splitting
//   //   // this generates a separate chunk (About.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   // component: () => import('./views/About.vue')
//   // },
//   // { path: '/:path(.*)', component: NotFound },
// ]
