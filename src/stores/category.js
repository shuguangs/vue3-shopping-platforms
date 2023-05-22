import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layout';

//导航列表数据获取
export const useCategoryStore = defineStore('category', () => {
const categoryList = ref([])
const getCategory = async () => {
const res = await getCategoryApi()
 categoryList.value = res.result
}
return {categoryList,getCategory}
  }
)
