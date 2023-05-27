import { defineStore } from "pinia";
import { ref } from "vue";
import {loginAPI} from '@/apis/user.js'

export const useUserStore = defineStore('user',()=>{
  //用户数据
  const userInfo = ref({})
  const getUserInfo = async ({account,password}) =>{
    const res =  await loginAPI({account,password})
    userInfo.value = res.result
  }
  const clearUser = () =>{
    userInfo.value = {}
  }
  return{
    userInfo,
    getUserInfo,
    clearUser
  }
},{
  persist: true
})