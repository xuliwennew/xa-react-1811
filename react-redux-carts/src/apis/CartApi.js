import {cartUrl} from "../commons/UrlConfig"

export default {

    /**
     * 根据用户编号获取购物车信息
     * @param cb
     */
    getCartInfoByUserId(cb){
       fetch(cartUrl).then(response=>{
           response.json().then(data=>{
               cb(data)
           })
       })
    }
}
