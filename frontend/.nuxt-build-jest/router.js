import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'// eslint-disable-line no-unused-vars
import scrollBehavior from './router.scrollBehavior.js'

const _082af897 = () => interopDefault(import('..\\pages\\applied\\index.vue' /* webpackChunkName: "pages/applied/index" */))
const _82c9282a = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _82819690 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _43eccd84 = () => interopDefault(import('..\\pages\\signin.vue' /* webpackChunkName: "pages/signin" */))
const _588323fa = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages/signup" */))
const _37afb640 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,
  /* eslint-disable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  routes: [{
    path: "/applied",
    component: _082af897,
    name: "applied"
  }, {
    path: "/profile",
    component: _82c9282a,
    name: "profile"
  }, {
    path: "/search",
    component: _82819690,
    name: "search"
  }, {
    path: "/signin",
    component: _43eccd84,
    name: "signin"
  }, {
    path: "/signup",
    component: _588323fa,
    name: "signup"
  }, {
    path: "/",
    component: _37afb640,
    name: "index"
  }],
  /* eslint-enable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */

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
