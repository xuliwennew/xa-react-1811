import React,{Component} from "react"


export default class ShopFooter extends Component {

    constructor(props) {
        super(props);

        this.counter = this.counter.bind(this)
        this.checkAll = this.checkAll.bind(this)
    }


    counter(){
        let total = 0;

        if(this.props.data.shops){
            this.props.data.shops.forEach((item,key)=>{
                item.products.forEach((product,key)=>{
                   if(product.checked){
                       total += product.qal * product.price
                   }
                })
            })
        }
        console.log(total)
        return total
    }

    checkAll(e){
        this.props.sAll()
    }

    render() {

        return (
            <div className="payment-bar">
                <div className="all-checkbox">
                    <input type="checkbox" ref="sAll" onClick={this.checkAll} defaultValue={this.props.data.checked} defaultChecked={this.props.data.checked}  className={[this.props.data.checked?"checked":"unchecked"]} />全选
                </div>
                <div className="shop-total">
                    <strong>总价：<i id="AllTotal" className="total">{this.counter()}</i></strong>
                    <span>减免：100</span></div>
                <a href="#" className="settlement">结算</a>
            </div>
        );
    }

}
