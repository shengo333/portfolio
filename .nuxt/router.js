import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a2317e0 = () => interopDefault(import('..\\pages\\bekamatrix.vue' /* webpackChunkName: "pages/bekamatrix" */))
const _7d7813ab = () => interopDefault(import('..\\pages\\games.vue' /* webpackChunkName: "pages/games" */))
const _7406739a = () => interopDefault(import('..\\pages\\Header.vue' /* webpackChunkName: "pages/Header" */))
const _64fde547 = () => interopDefault(import('..\\pages\\matrix.vue' /* webpackChunkName: "pages/matrix" */))
const _767a972e = () => interopDefault(import('..\\pages\\pages.vue' /* webpackChunkName: "pages/pages" */))
const _308d3e00 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _8fd0009a = () => interopDefault(import('..\\pages\\resume.vue' /* webpackChunkName: "pages/resume" */))
const _109e993c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bekamatrix",
    component: _1a2317e0,
    name: "bekamatrix"
  }, {
    path: "/games",
    component: _7d7813ab,
    name: "games"
  }, {
    path: "/Header",
    component: _7406739a,
    name: "Header"
  }, {
    path: "/matrix",
    component: _64fde547,
    name: "matrix"
  }, {
    path: "/pages",
    component: _767a972e,
    name: "pages"
  }, {
    path: "/projects",
    component: _308d3e00,
    name: "projects"
  }, {
    path: "/resume",
    component: _8fd0009a,
    name: "resume"
  }, {
    path: "/",
    component: _109e993c,
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
