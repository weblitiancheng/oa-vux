/*
 * @Author: your name
 * @Date: 2020-05-15 09:15:50
 * @LastEditTime: 2020-05-27 14:41:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \oa-h5f:\Codes\oa-vux\src\router\index.js
 */

const routers = [

  {
    path: '/',
    redirect: '/msg'
  },
  {
    path: '/msg',
    meta: {
      title: '首页',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Message/msg'], resolve)
  },
  {
    path: '/workbench',
    meta: {
      title: '工作台',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Workbench/workbench'], resolve)
  },
  {
    path: '/my',
    meta: {
      title: '个人设置',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/My/my'], resolve)
  },
  {
    path: '/customer',
    meta: {
      title: '通讯录',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Customer/customer'], resolve)
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
  },
  {
    path: '/approve',
    meta: {
      title: '审批消息',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Message/ApprovalMsg/approve'], resolve)
  },
  {
    path: '/appr_view',
    meta: {
      title: '审批查看',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Message/ApprovalMsg/appr_view'], resolve)
  },
  {
    path: '/appr_agree',
    meta: {
      title: '审批同意',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Message/ApprovalMsg/appr_agree'], resolve)
  },
  {
    path: '/appr_refuse',
    meta: {
      title: '审批拒绝',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Message/ApprovalMsg/appr_refuse'], resolve)
  },
  {
    path: '/appr_askforfree',
    meta: {
      title: '请假',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Workbench/Approval/AskForFree/forFree'], resolve)
  },
  {
    path: '/appr_annex',
    meta: {
      title: '上传附件',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Workbench/Approval/AskForFree/annex'], resolve)
  },
  {
    path: '/my_approval',
    meta: {
      title: '我审批的',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/My/Approval/my_approval'], resolve)
  },
  {
    path: '/my_send',
    meta: {
      title: '我发起的',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/My/Approval/my_send_approval'], resolve)
  },
  {
    path: '/my_cc',
    meta: {
      title: '我抄送的',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/My/Approval/my_cc'], resolve)
  },
  {
    path: '/erp_others',
    meta: {
      title: 'EPR其他事务',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Workbench/Approval/ERPOthers/others'], resolve)
  },
  {
    path: '/new_warehouse',
    meta: {
      title: '新建仓库',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/Workbench/Approval/NewWarehouse/newWarehouse'], resolve)
  },
  {
    path: '/new_stroe',
    meta: {
      title: '新建店铺',
      isLogin: true,
      keepAlive: true
    },
    component: (resolve) => require(['@/views/Workbench/Approval/NewStore/newStore'], resolve)
  },
  {
    path: '/appr',
    meta: {
      title: '测试',
      isLogin: true,
      keepAlive: true
    },
    component: (resolve) => require(['@/views/Workbench/appr'], resolve)
  }
]

export default routers
