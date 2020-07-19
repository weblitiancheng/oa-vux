/*
 * @Author: your name
 * @Date: 2020-05-15 09:15:50
 * @LastEditTime: 2020-05-27 14:41:34
 * @LastEditors: Please set LastEditors
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
    path: '/approve',
    meta: {
      title: '审批消息',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/approve'], resolve)
  },
  {
    path: '/appr_view',
    meta: {
      title: '审批查看',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/appr_view'], resolve)
  },
  {
    path: '/appr_view',
    meta: {
      title: '审批查看',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/appr_view'], resolve)
  },
  {
    path: '/appr_agree',
    meta: {
      title: '审批同意',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/appr_agree'], resolve)
  },
  {
    path: '/appr_refuse',
    meta: {
      title: '审批拒绝',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/appr_refuse'], resolve)
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
    path: '/login',
    meta: {
      title: '登录',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/login'], resolve)
  },
  {
    path: '/impower',
    meta: {
      title: '授权页面',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/impower'], resolve)
  }
]
export default routers
