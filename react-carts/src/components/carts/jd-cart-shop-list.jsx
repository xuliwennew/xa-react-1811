import React,{Component} from "react"
import JdCartShop from "./jd-cart-shop"
import Loading from "../../../../assets/carts/components/carts/Loading";

export default  class JdCartShopList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {sCheck,add,minus} = this.props;
        let shops = ""
        if(!this.props.data.shops){
            shops = <Loading/>
        }else{
           shops = this.props.data.shops.map((item,key)=>{
               return <JdCartShop add={add} minus={minus} sid={key} sCheck={sCheck} data={item} key={key}/>
           });
        }

        return (
            <div className="shopping">
                {
                    shops
                }
            </div>
        );
    }

}
