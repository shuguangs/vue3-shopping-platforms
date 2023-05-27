// 封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart',()=>{
  // 定义购物车列表
  const cartList = ref([])
  //添加购物车
  const addCart = (goods) =>{
    //添加购物车操作
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if(item){
    //已添加过数量+1
      item.count++
    }   
    else{
    //没添加过push
      cartList.value.push(goods)
    }
  }
  //删除购物车
  const delCart=(skuId) =>{
    //找到想要删除的项目
    const idx = cartList.value.findIndex((item) => skuId ===item.skuId)
    cartList.value.splice(idx,1)
  }
  const countSum = computed(()=> cartList.value.reduce((a,c) => a+c.count,0))
  const priceSum = computed(()=> cartList.value.reduce((a,c) => a+c.count * c.price,0))
  return {
    cartList,
    countSum,
    priceSum,
    addCart,
    delCart
  }
},{
  persist: true
})