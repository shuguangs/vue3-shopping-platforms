
import  httpInstance  from '@/utils/http'
export function getBannerAPI (params = {}){

  //默认为1，商品页为2
  const { distributionSite='1' } = params
  return httpInstance({
    url:'/home/banner',
    params:{
      distributionSite
    }
  })
}