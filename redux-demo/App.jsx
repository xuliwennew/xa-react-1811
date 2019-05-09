import React,{Component} from "react"
import CounterContainer from "./pages/Counter"
import CounterNewContainer from "./pages/CounterNew";
import DaPaidang from "./pages/DaPaidang"
import {Provider} from "react-redux"
import store from "./store/index"

export default class App extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Provider store={store}>
                <div>
                    <CounterContainer/>
                    {/*<hr/>*/}
                    {/*<CounterNewContainer/>*/}
                    {/*<hr/>*/}
                    {/*<DaPaidang/>*/}
                </div>
            </Provider>
        );
    }

}
