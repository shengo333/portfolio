import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _513a0492 = () => interopDefault(import('..\\pages\\games.vue' /* webpackChunkName: "pages/games" */))
const _ad21c4b2 = () => interopDefault(import('..\\pages\\Header.vue' /* webpackChunkName: "pages/Header" */))
const _48703cbb = () => interopDefault(import('..\\pages\\matrix.vue' /* webpackChunkName: "pages/matrix" */))
const _5f34fd8c = () => interopDefault(import('..\\pages\\pages.vue' /* webpackChunkName: "pages/pages" */))
const _00c78874 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _c8eb51b2 = () => interopDefault(import('..\\pages\\resume.vue' /* webpackChunkName: "pages/resume" */))
const _6a898348 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/games",
    component: _513a0492,
    name: "games"
  }, {
    path: "/Header",
    component: _ad21c4b2,
    name: "Header"
  }, {
    path: "/matrix",
    component: _48703cbb,
    name: "matrix"
  }, {
    path: "/pages",
    component: _5f34fd8c,
    name: "pages"
  }, {
    path: "/projects",
    component: _00c78874,
    name: "projects"
  }, {
    path: "/resume",
    component: _c8eb51b2,
    name: "resume"
  }, {
    path: "/",
    component: _6a898348,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
