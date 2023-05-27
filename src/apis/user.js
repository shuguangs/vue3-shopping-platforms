//用户相关接口
import httpInstance from "@/utils/http";

export const loginAPI = ({account,password}) =>{
  return httpInstance({
    url:'/login',
    method:'post',
    data:{
      account,
      password
    }
  })
}