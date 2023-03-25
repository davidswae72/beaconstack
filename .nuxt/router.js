import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3defa334 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _54814b4c = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _e39b1964 = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages/careers" */))
const _7b99fd8e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _3fc37e75 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _79d7f154 = () => interopDefault(import('..\\pages\\faqs.vue' /* webpackChunkName: "pages/faqs" */))
const _183eba00 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _594f8de8 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _f6f7f6a6 = () => interopDefault(import('..\\pages\\admin\\account\\index.vue' /* webpackChunkName: "pages/admin/account/index" */))
const _185405cb = () => interopDefault(import('..\\pages\\admin\\ims\\index.vue' /* webpackChunkName: "pages/admin/ims/index" */))
const _6ad04a8b = () => interopDefault(import('..\\pages\\admin\\loans.vue' /* webpackChunkName: "pages/admin/loans" */))
const _56d4477f = () => interopDefault(import('..\\pages\\admin\\loans.vue\\index.vue' /* webpackChunkName: "pages/admin/loans.vue/index" */))
const _c6c71a52 = () => interopDefault(import('..\\pages\\admin\\settings\\index.vue' /* webpackChunkName: "pages/admin/settings/index" */))
const _4554f212 = () => interopDefault(import('..\\pages\\admin\\transfers\\index.vue' /* webpackChunkName: "pages/admin/transfers/index" */))
const _3a60441c = () => interopDefault(import('..\\pages\\admin\\users\\index.vue' /* webpackChunkName: "pages/admin/users/index" */))
const _85b48da2 = () => interopDefault(import('..\\pages\\admin\\victims\\index.vue' /* webpackChunkName: "pages/admin/victims/index" */))
const _36a74ef2 = () => interopDefault(import('..\\pages\\dashboard\\account\\index.vue' /* webpackChunkName: "pages/dashboard/account/index" */))
const _2dce41e1 = () => interopDefault(import('..\\pages\\dashboard\\deposit\\index.vue' /* webpackChunkName: "pages/dashboard/deposit/index" */))
const _46358876 = () => interopDefault(import('..\\pages\\dashboard\\home\\index.vue' /* webpackChunkName: "pages/dashboard/home/index" */))
const _76849876 = () => interopDefault(import('..\\pages\\dashboard\\loan\\index.vue' /* webpackChunkName: "pages/dashboard/loan/index" */))
const _1c509980 = () => interopDefault(import('..\\pages\\dashboard\\transactions\\index.vue' /* webpackChunkName: "pages/dashboard/transactions/index" */))
const _40dac86a = () => interopDefault(import('..\\pages\\dashboard\\transfer\\index.vue' /* webpackChunkName: "pages/dashboard/transfer/index" */))
const _3405c884 = () => interopDefault(import('..\\pages\\password\\new\\index.vue' /* webpackChunkName: "pages/password/new/index" */))
const _6f1c9af5 = () => interopDefault(import('..\\pages\\password\\reset\\index.vue' /* webpackChunkName: "pages/password/reset/index" */))
const _0757bc78 = () => interopDefault(import('..\\pages\\personal-banking\\credit-card.vue' /* webpackChunkName: "pages/personal-banking/credit-card" */))
const _5a5f77b9 = () => interopDefault(import('..\\pages\\personal-banking\\current-account.vue' /* webpackChunkName: "pages/personal-banking/current-account" */))
const _6d508792 = () => interopDefault(import('..\\pages\\personal-banking\\mortgages.vue' /* webpackChunkName: "pages/personal-banking/mortgages" */))
const _799e5246 = () => interopDefault(import('..\\pages\\personal-banking\\personal-insurance.vue' /* webpackChunkName: "pages/personal-banking/personal-insurance" */))
const _15662386 = () => interopDefault(import('..\\pages\\personal-banking\\personal-loan.vue' /* webpackChunkName: "pages/personal-banking/personal-loan" */))
const _1651b5da = () => interopDefault(import('..\\pages\\private-banking\\banking-services.vue' /* webpackChunkName: "pages/private-banking/banking-services" */))
const _783bab75 = () => interopDefault(import('..\\pages\\private-banking\\insurance.vue' /* webpackChunkName: "pages/private-banking/insurance" */))
const _2c67f19d = () => interopDefault(import('..\\pages\\private-banking\\offshore-migrants.vue' /* webpackChunkName: "pages/private-banking/offshore-migrants" */))
const _5519bc1e = () => interopDefault(import('..\\pages\\savings-isas\\helping-you-save.vue' /* webpackChunkName: "pages/savings-isas/helping-you-save" */))
const _49839602 = () => interopDefault(import('..\\pages\\savings-isas\\savings-account.vue' /* webpackChunkName: "pages/savings-isas/savings-account" */))
const _9476416a = () => interopDefault(import('..\\pages\\savings-isas\\savings-account-explained.vue' /* webpackChunkName: "pages/savings-isas/savings-account-explained" */))
const _00c0092b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3defa334,
    name: "about"
  }, {
    path: "/admin",
    component: _54814b4c,
    name: "admin"
  }, {
    path: "/careers",
    component: _e39b1964,
    name: "careers"
  }, {
    path: "/contact",
    component: _7b99fd8e,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _3fc37e75,
    name: "dashboard"
  }, {
    path: "/faqs",
    component: _79d7f154,
    name: "faqs"
  }, {
    path: "/login",
    component: _183eba00,
    name: "login"
  }, {
    path: "/register",
    component: _594f8de8,
    name: "register"
  }, {
    path: "/admin/account",
    component: _f6f7f6a6,
    name: "admin-account"
  }, {
    path: "/admin/ims",
    component: _185405cb,
    name: "admin-ims"
  }, {
    path: "/admin/loans",
    component: _6ad04a8b,
    name: "admin-loans"
  }, {
    path: "/admin/loans.vue",
    component: _56d4477f,
    name: "admin-loans.vue"
  }, {
    path: "/admin/settings",
    component: _c6c71a52,
    name: "admin-settings"
  }, {
    path: "/admin/transfers",
    component: _4554f212,
    name: "admin-transfers"
  }, {
    path: "/admin/users",
    component: _3a60441c,
    name: "admin-users"
  }, {
    path: "/admin/victims",
    component: _85b48da2,
    name: "admin-victims"
  }, {
    path: "/dashboard/account",
    component: _36a74ef2,
    name: "dashboard-account"
  }, {
    path: "/dashboard/deposit",
    component: _2dce41e1,
    name: "dashboard-deposit"
  }, {
    path: "/dashboard/home",
    component: _46358876,
    name: "dashboard-home"
  }, {
    path: "/dashboard/loan",
    component: _76849876,
    name: "dashboard-loan"
  }, {
    path: "/dashboard/transactions",
    component: _1c509980,
    name: "dashboard-transactions"
  }, {
    path: "/dashboard/transfer",
    component: _40dac86a,
    name: "dashboard-transfer"
  }, {
    path: "/password/new",
    component: _3405c884,
    name: "password-new"
  }, {
    path: "/password/reset",
    component: _6f1c9af5,
    name: "password-reset"
  }, {
    path: "/personal-banking/credit-card",
    component: _0757bc78,
    name: "personal-banking-credit-card"
  }, {
    path: "/personal-banking/current-account",
    component: _5a5f77b9,
    name: "personal-banking-current-account"
  }, {
    path: "/personal-banking/mortgages",
    component: _6d508792,
    name: "personal-banking-mortgages"
  }, {
    path: "/personal-banking/personal-insurance",
    component: _799e5246,
    name: "personal-banking-personal-insurance"
  }, {
    path: "/personal-banking/personal-loan",
    component: _15662386,
    name: "personal-banking-personal-loan"
  }, {
    path: "/private-banking/banking-services",
    component: _1651b5da,
    name: "private-banking-banking-services"
  }, {
    path: "/private-banking/insurance",
    component: _783bab75,
    name: "private-banking-insurance"
  }, {
    path: "/private-banking/offshore-migrants",
    component: _2c67f19d,
    name: "private-banking-offshore-migrants"
  }, {
    path: "/savings-isas/helping-you-save",
    component: _5519bc1e,
    name: "savings-isas-helping-you-save"
  }, {
    path: "/savings-isas/savings-account",
    component: _49839602,
    name: "savings-isas-savings-account"
  }, {
    path: "/savings-isas/savings-account-explained",
    component: _9476416a,
    name: "savings-isas-savings-account-explained"
  }, {
    path: "/",
    component: _00c0092b,
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
