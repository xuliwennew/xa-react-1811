import React,{Component} from "react"
import ProductItem from "./product-item"


export default class ProductList extends Component {

    constructor(props) {
        super(props);
        this.pSel = this.pSel.bind(this)
    }

    pSel(sid,pid){
       this.props.pSel(sid,pid)
    }


    render() {
        return (
            <ul>
                {
                    this.props.data.map((item,key)=>{
                        return <ProductItem pSel={this.pSel} sid={this.props.sid} pid={key} data={item} key={key}/>
                    })
                }
            </ul>
        );
    }

}
