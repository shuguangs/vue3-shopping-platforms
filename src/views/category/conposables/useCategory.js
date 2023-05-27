import { getCategoryAPI } from '@/apis/category';
import {  onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useCategory () {
const categoryData = ref({})
const route = useRoute()
const getcategoryData = async (id =route.params.id ) =>{
 const res = await getCategoryAPI( id )
 categoryData.value = res.result
 console.log(route);
}

onMounted(() => {
  getcategoryData()
})
//监听路由变化，重新调用数据，方法1
watch(route,()=>{
  getcategoryData()
})

//方法2
/* onBeforeUpdate((to)=>{
  getcategoryData(to.params)
})
 */
return {
  categoryData
}
}