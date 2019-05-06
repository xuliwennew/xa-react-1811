import React,{Component} from "react"

export default  class JdCartProduct extends Component {
    constructor(props) {
        super(props);

        this.singleCheck = this.singleCheck.bind(this)
        this.addQal = this.addQal.bind(this)
        this.minusQal = this.minusQal.bind(this)

    }

    addQal(){
        let { sid,pid,add,minus} = this.props;
        add(sid,pid)
    }

    minusQal(){
        let { sid,pid,add,minus} = this.props;
        minus(sid,pid)
    }

    singleCheck(){
        let {sCheck,sid,pid} = this.props;
        sCheck(sid,pid)
    }

    render() {
        let {data} = this.props;
        return (
            <li>
                <div className="shop-info">
                    <input onClick={this.singleCheck} type="checkbox"
                           className={data.checked?"checked":"unchecked"} defaultChecked={data.checked} defaultValue={data.checked}/>
                    <div className="shop-info-img">
                        <a href="#">
                            <img src={data.pic}/>
                        </a>
                    </div>
                    <div className="shop-info-text">
                        <h4>
                            {data.title}
                        </h4>
                        <div className="shop-brief">
                            <span>重量:3.3kg </span>
                            <span>颜色:标配版</span>
                            <span>版本:13.3英寸</span>
                        </div>
                        <div className="shop-price">
                            <div className="shop-pices">
                                ￥<b className="price">{data.price}</b>
                            </div>
                            <div className="shop-arithmetic">
                                <a className="minus" onClick={this.minusQal}>-</a>
                                <span className="num">{data.qal}</span>
                                <a className="plus" onClick={this.addQal}>+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}
