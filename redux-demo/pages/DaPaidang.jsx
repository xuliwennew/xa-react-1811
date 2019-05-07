import React,{Component} from "react"
import store from "../store"

export default class DaPaidang extends Component {
    constructor(props) {
        super(props);
        this.state={
            food:store.getState().food
        }
    }

    update(){
       //发起一个请求，让store来做什么 //只是发送的请求，
        store.dispatch({type:"eggRice"})

    }

    //
    componentDidMount(){
        store.subscribe(()=>{

            this.setState({
                food:store.getState().food
            })
        })
    }


    render() {
        console.log(store.getState())
        return (
            <div>
                <h1>做好了：{this.state.food}</h1>
                <button onClick={this.update.bind(this)}>鸡蛋炒饭</button>
            </div>
        );
    }

}
