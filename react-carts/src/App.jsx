import React, {Component, Fragment} from "react"
import JdCarts from "./pages/jd-carts"

export default  class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Fragment>
               <JdCarts/>
            </Fragment>
        );
    }

}
