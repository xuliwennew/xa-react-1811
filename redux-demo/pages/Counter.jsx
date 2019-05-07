import React,{Component} from "react"
import {connect} from "react-redux"


class Counter extends Component{

    render() {
        let {num,add,getCart} = this.props;
        return (
            <div>
                <h1>{num}</h1>
                <button onClick={add}>+</button>
                <button onClick={getCart}>获取购物车信息</button>
            </div>
        );
    }
}

let mapStateToProps = (state)=>{
    return {
        num:state.num

    }
}

let mapDispatchToProps = (dispath)=>{
    return {
        add:()=>{
            dispath({type:"ADD"})
        },
        getCart: ()=>{
            dispath({type:"CART"})
        }
    }
}



const CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter)

export default CounterContainer
// export default class CounterContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             num:store.getState().num
//         }
//     }
//
//     update(){
//         // let {num} = this.state;
//         // this.setState({
//         //     num:++num
//         // })
//         store.dispatch({type:"ADD"})
//     }
//
//     componentDidMount(){
//         store.subscribe(()=>{
//             console.log("store中的状态发生变化了！")
//             this.setState({
//                 num:store.getState().num
//             })
//         })
//     }
//
//
//     render() {
//           return (
//             <Counter num={this.state.num} add={this.update}/>
//         );
//     }
//
// }



