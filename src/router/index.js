/*
 * @Author: your name
 * @Date: 2020-05-15 09:15:50
 * @LastEditTime: 2020-05-27 09:48:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \oa-h5f:\Codes\oa-vux\src\router\index.js
 */
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
  },
  {
    path: '/workbench',
    meta: {
      title: '工作台',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/workbench'], resolve)
  },
  {
    path: '/my',
    meta: {
      title: '个人设置',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/my'], resolve)
  },
  {
    path: '/customer',
    meta: {
      title: '通讯录',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/customer'], resolve)
  },
  {
    path: '/approve',
    meta: {
      title: '审批消息',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/approve'], resolve)
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/login'], resolve)
  }
]
export default routers
