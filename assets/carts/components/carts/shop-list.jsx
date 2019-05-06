import React,{Component} from "react"
import ShopItem from "./shop-item"
import Loading from "./Loading"

export default class ShopList extends Component {

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps")
    }

    constructor(props) {
        super(props);
        this.pSel = this.pSel.bind(this)
    }

    pSel(sid,pid){
        this.props.pSel(sid,pid)
    }

    render() {
        console.log(this.props.data)
        let lists = <Loading/>
        if(this.props.data){
            lists= this.props.data.map((data,key)=>{
                return  <ShopItem pSel={this.pSel} sid={key} data={data} key={key}/>
            })
        }
        return (
            <div className="shopping">
                {
                    lists
                }
            </div>
        );
    }

}
