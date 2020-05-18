import Home from '../views/components/HelloFromVux'

const routers = [
  {
    path: '/',
    meta: {
import Home from '../views/components/HelloFromVux'

const routers = [
  {
    path: '/',
    meta: {
      title: 'demo',
      keepAlive: true,
      isLogin: true
    },
    component: Home
  },
  {
    path: '/hello',
    meta: {
      title: 'HelloWorld',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/components/HelloWorld'], resolve)
  },
  {
    path: '/appr',
    meta: {
      title: '审批',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/appr'], resolve)
  },
  {
    path: '/msg',
    meta: {
      title: '首页',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/msg'], resolve)
  }
]
export default routers
