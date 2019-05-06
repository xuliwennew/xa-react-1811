import React,{Component} from "react"
import JdCartProductList from "./jd-cart-product-list"

export default  class JdCartShop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let {data,sCheck,sid,add,minus} = this.props;
        return (
            <div className="shop-group-item">
                <div className="shop-name">
                    <input type="checkbox"
                           className={data.checked?"checked":"unchecked"}  defaultChecked={data.checked} defaultValue={data.checked} />
                    <h4>
                        <a href="#">{data.shopName}</a>
                    </h4>
                    <div className="coupons">
                        <span>领券</span>
                        <em>|</em>
                        <span>编辑</span>
                    </div>
                </div>
                <JdCartProductList add={add} minus={minus} sid={sid} sCheck={sCheck} data={data.products}/>

            </div>
        );
    }

}
