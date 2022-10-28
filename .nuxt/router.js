import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _65b3c5e7 = () => interopDefault(import('..\\pages\\games.vue' /* webpackChunkName: "pages/games" */))
const _35914912 = () => interopDefault(import('..\\pages\\Header.vue' /* webpackChunkName: "pages/Header" */))
const _f78f0aea = () => interopDefault(import('..\\pages\\matrix.vue' /* webpackChunkName: "pages/matrix" */))
const _5eb6496a = () => interopDefault(import('..\\pages\\pages.vue' /* webpackChunkName: "pages/pages" */))
const _6b779244 = () => interopDefault(import('..\\pages\\projects.vue' /* webpackChunkName: "pages/projects" */))
const _515ad612 = () => interopDefault(import('..\\pages\\resume.vue' /* webpackChunkName: "pages/resume" */))
const _0e4b6910 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _65b3c5e7,
    name: "games"
  }, {
    path: "/Header",
    component: _35914912,
    name: "Header"
  }, {
    path: "/matrix",
    component: _f78f0aea,
    name: "matrix"
  }, {
    path: "/pages",
    component: _5eb6496a,
    name: "pages"
  }, {
    path: "/projects",
    component: _6b779244,
    name: "projects"
  }, {
    path: "/resume",
    component: _515ad612,
    name: "resume"
  }, {
    path: "/",
    component: _0e4b6910,
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
