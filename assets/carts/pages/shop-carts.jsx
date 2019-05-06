import React, {Component, Fragment} from "react"
import ShopList from "../components/carts/shop-list"
import ShopHeader from "../components/carts/header"
import ShopFooter from "../components/carts/footer"
import carts from "../apis/carts"



export default class ShopCarts extends Component {


    pSel(sid,pid){
        let info = this.state.info
        info.shops[sid].products[pid].checked = !info.shops[sid].products[pid].checked
        // let isTrue= info.shops[sid].products.every(( item, index, array )=>{
        //     return item.checked == true
        // })
        let isTrue1= info.shops.every(( item, index, array )=>{

            let s = item.products.every(( item2, index2, array )=>{
                return item2.checked == true
            })

            return s
        })
        info.shops[sid].checked=isTrue1

        info.checked = isTrue1

        this.setState({
            info:info
        })
        console.log(sid,pid)
    }

    constructor(props) {
        super(props);
        this.counter = this.counter.bind(this)
        this.checkAll = this.checkAll.bind(this)
        this.pSel = this.pSel.bind(this)
        this.state = {
            info:{},
            total:0
        }


        carts.getCarts(data=>{
            console.log(data)
            this.counter(data)
            this.setState({
                info:data
            })
        })
    }

    counter(data){
        let total = 0;
        data.shops.forEach((item,key)=>{
            item.products.forEach((product,key)=>{
               if(product.checked){
                   total += product.qal * product.price
               }
            })
        })
        this.setState({
            total:total
        })
    }

    checkAll(){
        let info = this.state.info
        info.checked = !info.checked

        info.shops.forEach((item,key)=>{
            item.checked = info.checked
            item.products.forEach((product,key)=>{
                product.checked = info.checked
            })
        })

        this.setState({
            info:info
        })


    }


    render() {

        return (
            <Fragment>
                <ShopHeader/>
                <ShopList pSel={this.pSel} data={this.state.info.shops}/>
                <ShopFooter sAll={this.checkAll} data={this.state.info}/>
            </Fragment>
        );
    }

}
