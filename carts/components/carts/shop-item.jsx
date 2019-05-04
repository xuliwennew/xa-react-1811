import React,{Component} from "react"
import ProductList from "./product-list"


export default class ShopItem extends Component {
    constructor(props) {
        super(props);
        this.pSel = this.pSel.bind(this)
    }

    pSel(sid,pid){
        this.props.pSel(sid,pid)
    }
    componentWillReceiveProps(){
        console.log("ShopItem componentWillReceiveProps")
    }

    render() {
        console.log(this.props.data.checked)
        return (

            <div className="shop-group-item">
                <div className="shop-name">
                    <input type="checkbox" defaultChecked={false}  defaultChecked={this.props.data.checked} className={[this.props.data.checked?"checked":"unchecked"]}/>
                    <h4><a href="#">{this.props.data.shopName}</a></h4>
                    <div className="coupons">
                        <span>领券</span><em>|</em><span>编辑</span>
                    </div>
                </div>
                <ProductList pSel={this.pSel} sid={this.props.sid} data={this.props.data.products}/>
                <div className="shopPrice">本店总计：￥<span className="shop-total-amount ShopTotal">0</span>
                </div>
            </div>
        );
    }

}
