import React, {Component, Fragment} from "react"
import JdCarts from "./pages/jd-carts"
import JdProduct from "./pages/jd-product"
import {BrowserRouter,Route,Link,NavLink,Redirect} from "react-router-dom"

export default  class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <BrowserRouter>
                <Link to={"/cart"}>cart</Link> || <Link to={"/product"}>product</Link>
                <hr/>
                <Route path={"/"} exact render={(props)=><Redirect to={"/cart"} />} />
                <Route path="/cart" component={JdCarts}/>
                <Route path={"/product"} component={JdProduct}/>
            </BrowserRouter>
        );
    }

}
