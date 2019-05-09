import {createStore,applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/rootSaga"

//1 .创建一个公共的仓库 store
// store :1 保存状态 2 修改状态规则
// store state:共享状态 reducer(规则/玩法  actions+mutations+getters)
let initialState = {
    cartInfo:{},
    num:0,
    rice:"rice",
    egg:"egg",
    seafood:"haishen",
    food:""
}

//制定规则的中心，通过用户的动作类型来判断使用哪一种规则
// ajax -> vuex actions ajax
let reducers = (state,action)=>{
    let { num } = state;
    switch (action.type) {
        case "eggRice":
            //返回的是一个新的状态
            console.log("有人要吃 鸡蛋 炒饭,尽快做好端上去...")
            return { food: state.rice + state.egg  }
            break;

        case "haishenRice":
            return { food:state.seafood + state.rice}
            break;
        case "INC":
            console.log("saga put ")
            return {num:++num}
            break;
        case "CART":
            console.log("cart action")
            return {cartInfo: action.data}
            break;
        default:
            return state;
            break
    }
}

//自定义中间件
let logerMiddleWare = store=>next=>action=>{
    console.log("日志中间件")
    console.log(action)
    next(action)
}

let serviceMiddleWare = store=>next=>action=>{
    fetch("http://localhost:3000/api/carts")
        .then(response=>{
            response.json().then(data=>{
                console.log("ajax 获取到了数据")
                next({type:"CART",data:data})
            })
        })

}

//通过createSagaMiddleware生成一个中间伯的实例
let sagaMiddleware = createSagaMiddleware()

let store = createStore(reducers,initialState,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default  store
