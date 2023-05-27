//全局化注册components
import imageView from './imageView/index.vue'
import XtxSku from './XtxSku/index.vue'

export const componentsPlugin = {
  install(app){
    app.component('imageView',imageView)
    app.component('Sku',XtxSku)
  }
}