import React,{Component} from "react"
import {connect} from "react-redux"


class CounterNew extends Component {


    render() {
        let {num,add} = this.props
        return (
            <div>
                <h1>2:{num}</h1>
                <button onClick={add}>+</button>
            </div>
        );
    }

}

let mapStateToProps =(state)=>{
    return {
        num:state.num
    }
}

let mapDispatchToProps = (dispath)=>{
    return {
        add:()=>{
            dispath({type:"ADD"})
        }
    }
}

let CounterNewContainer = connect(mapStateToProps,mapDispatchToProps)(CounterNew)

export default CounterNewContainer
