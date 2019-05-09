import React, {Component, Fragment} from "react"
import JdCartFooter from "../components/carts/jd-cart-footer"
import JdCartHeader from "../components/carts/jd-cart-header"
import JdCartShopList from "../components/carts/jd-cart-shop-list"
import CartApi from "../apis/CartApi"
import {connect} from "react-redux"


class JdCarts extends Component {
    constructor(props) {
        super(props);

        this.selectAll = this.selectAll.bind(this)
        // this.selectSingle = this.selectSingle.bind(this)
        this.addQal = this.addQal.bind(this)
        this.minusQal = this.minusQal.bind(this)

        this.props.init()
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

        return (
            <Fragment>
               <JdCartHeader/>
               <JdCartShopList add={this.addQal} minus={this.minusQal} sCheck={this.props.singelCheck} data={this.props.cartInfo}/>
               <JdCartFooter sAll={this.selectAll} data={this.props.cartInfo}/>
            </Fragment>
        );
    }

}


let mapStateToProps = (state)=>{
    return {
        cartInfo:state.cartInfo
    }
}

let mapDispathToProps = (dispatch)=>{
    return {
        init:()=>{
            dispatch({type:"ICART"})
        },
        singelCheck:(sid,pid)=>{
            console.log(sid,pid)
           dispatch({type:"SINGLE",data:{sid:sid,pid:pid}})
        }
    }
}

let JdCartsContainer = connect(mapStateToProps,mapDispathToProps)(JdCarts)


export default JdCartsContainer
