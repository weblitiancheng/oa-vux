import Home from '../views/components/HelloFromVux'

const routers = [
  {
    path: '/',
    meta: {
      title: 'file_management',
      keepAlive: true,
      isLogin: true
    },
    component: Home
  },
  {
    path: '/hello',
    meta: {
      title: 'gantt',
      keepAlive: true,
      isLogin: true
    },
    component: (resolve) => require(['@/views/components/HelloWorld'], resolve)
  }
]
export default routers
