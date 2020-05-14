// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Routers from './router'
import Util from './libs/util'
import {AjaxPlugin, WechatPlugin} from 'vux'
import 'es6-promise/auto'

Vue.use(VueRouter)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

// 路由配置
const RouterConfig = {
  routes: Routers
}
const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  /* 生成环境才拦截到登录页 */
  if (to.meta.isLogin && process.env.NODE_ENV === 'production') {
    Util.title(to.meta.title)
    next({path: '/login'})
  } else {
    Util.title(to.meta.title)
    next()
  }
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
