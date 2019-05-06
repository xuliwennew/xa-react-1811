import React,{Component} from "react"

export default  class JdCartFooter extends Component {
    constructor(props) {
        super(props);
        this.counter = this.counter.bind(this)
        this.ckSelect = this.ckSelect.bind(this)
    }

    componentWillReceiveProps(){
        console.log("footer componentWillReceiveProps")
    }

    ckSelect(){
        let {sAll} = this.props;
        sAll()
    }

    counter(){
        let total = 0;
        let {data} = this.props;
        if(!data.shops){
            total = 0
        }else {
            data.shops.forEach((shop,sid)=>{
                shop.products.forEach((product,pid)=>{
                    if(product.checked){
                        total +=product.price * product.qal
                    }
                })
            })
        }

        return total;
    }

    render() {
        let {data} = this.props

        return (
            <div className="payment-bar">
                <div className="all-checkbox">
                    <input type="checkbox" onClick={this.ckSelect} defaultValue={data.checked} defaultChecked={data.checked} className={data.checked?"checked":"unchecked"}/>
                    全选
                </div>
                <div className="shop-total">
                    <strong>
                        总价：
                        <i id="AllTotal" className="total">{this.counter()}</i>
                    </strong>
                    <span>减免：100</span>
                </div>
                <a href="#" className="settlement">结算</a>
            </div>
        );
    }

}
