import React,{Component} from "react"


export default class ProductItem extends Component {

    constructor(props) {
        super(props);
        this.pSel = this.pSel.bind(this)
    }

    pSel(){
        this.props.pSel(this.props.sid,this.props.pid)
        console.log(this.props.pid)
    }

    render() {
        return (
            <li>
                <div className="shop-info">
                    <input type="checkbox" onClick={this.pSel} defaultChecked={this.props.data.checked} className={[this.props.data.checked?"checked":"unchecked"]}/>
                    <div className="shop-info-img">
                        <a href="#">
                            <img src={this.props.data.pic}/>
                        </a>
                    </div>
                    <div className="shop-info-text">
                        <h4>{this.props.data.title}</h4>
                        <div className="shop-brief">
                            <span>重量:x</span>
                            <span>颜色:x</span>
                            <span>版本:x</span>
                        </div>
                        <div className="shop-price">
                            <div className="shop-pices">￥<b className="price">{this.props.data.price}</b>
                            </div>
                            <div className="shop-arithmetic">
                                <a className="minus">-</a>
                                <span className="num">{this.props.data.qal}</span>
                                <a className="plus">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}
