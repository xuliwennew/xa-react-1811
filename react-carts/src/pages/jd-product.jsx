import React, {Component, Fragment} from "react"
import {Redirect} from "react-router-dom"
import Loading from "../components/common/Loading"

export default  class JdProduct extends Component {
    constructor(props) {
        super(props);

        this.goUrl = this.goUrl.bind(this)
        //?id=1
        console.log(this.props.match.params.id)
        //ajax

        this.state = {
            n:0
        }

    }

    goUrl(){
        //this.$router.push
        // 状态的变化，
        this.setState({
            n:1
        })
    }

    render() {

        let content = <Loading/>
        if(this.state.n ==0){
            content = <div>
                <h1>product</h1>
                <button onClick={this.goUrl}>carts</button>
            </div>
        }else {
            content = <Redirect to={"/cart"}/>
        }
        return  content;
    }

}
