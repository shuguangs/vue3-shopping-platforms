import httpInstance from "@/utils/http"

export const getHotAPI = () => {
  return  httpInstance(
    {
      url:'home/hot'
    }
    )
}