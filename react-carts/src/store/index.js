import {createStore,applyMiddleware} from "redux"


//初始化的状态对象
let initalState= {
    cartInfo:{}
}

//数据获取的中间件
let serviceMiddleWare = store=>next=>action=>{
    console.log("serviceMiddleWare")
    let newAction = {}
    switch(action.type){
        case "ICART":
            console.log("ICART")
            fetch("http://localhost:3000/api/carts")
                .then(response=>{
                    response.json().then(data=>{
                        newAction.type="INITCART"
                        newAction.data = data
                        next(newAction)
                    })
                })
            break;
        default:
            newAction.type="ICART"
            break;
    }


}


//针对状态管理的规则方法 mutations :只有修改状态
let reducers = (state,action)=>{
    switch(action.type){
        case "INITCART":
            console.log(action)
            return { cartInfo:action.data }
            break;
        case "SINGLE":
            //distpath({type:"SINGLE",data:{sid,pid})
            let {sid,pid} = action.data
            let old = state.cartInfo
            old.shops[sid].products[pid].checked =  ! old.shops[sid].products[pid].checked
            let isTrue = old.shops[sid].products[pid].checked

            //当有一个商品是非选中状态的时候，全选和店铺的全选都是非选中状态
            //Array true some every
            let isShopSelect = old.shops[sid].products.every((item,key,array)=>{
                return item.checked == true
            })

            //当有一个店铺中的一个商品为false ,全选状态就是false
            let isAll = old.shops.every((shop,sid,array)=>{
                let isTrue = shop.products.every((product,pid,arr)=>{
                    return product.checked == true
                })
                return isTrue
            })

            old.shops[sid].checked = isShopSelect
            old.checked = isAll

            return { cartInfo:old}

        default:
            return state
            break;
    }
}

let store = createStore(reducers,initalState,applyMiddleware(serviceMiddleWare))

export default store
