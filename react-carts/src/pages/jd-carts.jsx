import React, {Component, Fragment} from "react"
import JdCartFooter from "../components/carts/jd-cart-footer"
import JdCartHeader from "../components/carts/jd-cart-header"
import JdCartShopList from "../components/carts/jd-cart-shop-list"
import CartApi from "../apis/CartApi"
import {connect} from "react-redux"
import store from "../store"

export default class JdCarts extends Component {
    constructor(props) {
        super(props);

        this.selectAll = this.selectAll.bind(this)
        this.selectSingle = this.selectSingle.bind(this)
        this.addQal = this.addQal.bind(this)
        this.minusQal = this.minusQal.bind(this)

        this.state = {
            cartInfo:{}
        }

        //初始化store
        // this.props.init()
        store.dispatch({type:"ICART"})

        // console.log(this.props.cartInfo)
        //
        // // //获取数据结构
        // CartApi.getCartInfoByUserId(data=>{
        //     console.log(data)
        //     this.setState({
        //         cartInfo:data
        //     })
        // })
    }

    componentDidUpdate(){
        console.log(this.props)
       // this.setState({
       //      cartInfo:this.props.cartInfo
       // })
    }

    componentDidMount(){
        store.subscribe(()=>{
            console.log(store.getState())
            this.setState({
                cartInfo:store.getState().cartInfo
            })
        })
    }

    componentWillMount(){
        console.log(this.props)
    }

    componentWillUpdate(){
        console.log(this.props)
    }

    //props
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
        console.log(this.props)
    }




    /**
     * 单选
     * @param sid 店铺id
     * @param pid 商品id
     */
    selectSingle(sid,pid){
        console.log(sid,pid)
       let old = this.state.cartInfo
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

       this.setState({
          cartInfo:old
       })

    }

    /**
     * 全选和返选
     */
    selectAll(){
        let old = this.state.cartInfo;
        old.checked = !old.checked
        let isTrue =  old.checked
        //foreach
        old.shops.forEach((shop,key)=>{
            shop.checked = isTrue
            shop.products.forEach((product,pid)=>{
                product.checked =isTrue
            })
        })

        this.setState({
            cartInfo:old
        })



    }

    /**
     * 根据sid&pid增加数量
     * @param sid
     * @param pid
     */
    addQal(sid,pid){

        let old = this.state.cartInfo
        old.shops[sid].products[pid].qal = ++old.shops[sid].products[pid].qal

        this.setState({
            cartInfo:old
        })


    }

    /**
     * 根据sid&pid减少数量
     * @param sid
     * @param pid
     */
    minusQal(sid,pid){

        let old = this.state.cartInfo
        let qal = --old.shops[sid].products[pid].qal;
        if(qal <=1){
            old.shops[sid].products[pid].qal =1;
        }else {
            old.shops[sid].products[pid].qal =  qal
        }

        this.setState({
            cartInfo:old
        })

    }

    render() {
        console.log(this.props)

        return (
            <Fragment>
               <JdCartHeader/>
               <JdCartShopList add={this.addQal} minus={this.minusQal} sCheck={this.selectSingle} data={this.state.cartInfo}/>
               <JdCartFooter sAll={this.selectAll} data={this.state.cartInfo}/>
            </Fragment>
        );
    }

}

// //update render
// let mapStateToProps = (state)=>{
//     return {
//         cartInfo:state.cartInfo
//     }
// }
//
// let mapDispathToProps = (dispatch)=>{
//     return {
//         init:()=>{
//             dispatch({type:"ICART"})
//         }
//     }
// }
//
// let JdCartsContainer = connect(mapStateToProps,mapDispathToProps)(JdCarts)
//
//
// export default JdCartsContainer
