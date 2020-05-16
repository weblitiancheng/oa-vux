import axios from 'axios'
import qs from 'qs'
import app from '../main.js'
import { getToken } from './auth'

/* ***** 创建axios实例 ***** */
const service = axios.create({
  baseURL: process.env.BASE_URL,  // api的base_url
  timeout: 5000  // 请求超时时间
})

/* ***** request拦截器==>对请求参数做处理 ***** */
service.interceptors.request.use(config => {
  app.$vux.loading.show({
    text: '数据加载中……'
  })

  config.method === 'post'
    ? config.data = qs.stringify({...config.data})
    : config.params = {...config.params}
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  if (getToken()) {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  }

  return config
  // 请求错误处理
}, error => {
  app.$vux.toast.show({
    type: 'warn',
    text: error
  })
  Promise.reject(error)
})

/* ***** respone拦截器==>对响应做处理 ***** */
service.interceptors.response.use(
  // 成功请求到数据
  response => {
    app.$vux.loading.hide()

    if (response.data.result === 'TRUE') {
      return response.data
    } else {
      // 常规错误处理
      app.$vux.toast.show({
        type: 'warn',
        text: response.data.data.msg
      })
    }
  },
  // 响应错误处理
  error => {
    console.log('error')
    console.log(error)
    console.log(JSON.stringify(error))

    let text = JSON.parse(JSON.stringify(error)).response.status === 404
      ? '404'
      : '网络异常，请重试'
    app.$vux.toast.show({
      type: 'warn',
      text: text
    })

    return Promise.reject(error)
  }
)
export default service
