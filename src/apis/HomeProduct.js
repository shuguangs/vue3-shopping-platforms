import  httpInstance  from '@/utils/http'

export const getProductAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}