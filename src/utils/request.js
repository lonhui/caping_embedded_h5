/*
axios请求封装
使用需求：
1.安装axios
  npm install axios –S
 */

import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,//域名或IP
  timeout: 15000 // 请求超时时间
})

axios.defaults.withCredentials = true

// request拦截器
service.interceptors.request.use(config => {
  // 设置请求头
  //   config.headers['Cookie'] = encryption()
  return config
}, error => {
  console.error(error) 
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if(res.code){
        if (res.code !== 0) {
          // 错误提示
            console.log(res)
        }
    }
    return response.data
  },
  error => {
    // 错误提示
    console.log(error)
  }
)

export default service
