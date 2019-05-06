import React,{Component} from "react"
import JdCartProduct from "./jd-cart-product"
import JdCartShop from "./jd-cart-shop";

export default  class JdCartProductList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let { data,sCheck,sid,add,minus} = this.props;
        return (
            <ul>
                {
                    data.map((item,key)=>{
                        return  <JdCartProduct add={add} minus={minus} sid={sid} pid={key} sCheck={sCheck} data={item} key={key}/>
                    })
                }
            </ul>
        );
    }

}
