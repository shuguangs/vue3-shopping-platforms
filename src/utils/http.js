//axios封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user.js'
import router from '@/router'

const httpInstance = axios.create({
  baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout:5000
})

//请求拦截器

httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, e => Promise.reject(e))

// axios响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
  //统一错误提示
  ElMessage({
    type:'warning',
    message:e.response.data.message
  })
  //401处理
  const userStore = useUserStore()
  if(e.response.status === 401){
    //清除数据
    userStore.clearUser()
    //跳转到login页面
    router.push('/login')
  }
  return Promise.reject(e)
})

export default httpInstance