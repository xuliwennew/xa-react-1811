import React, {Component, Fragment} from "react"
import JdCarts from "./pages/jd-carts"
import JdProduct from "./pages/jd-product"
import {BrowserRouter,Route,Link,NavLink,Redirect} from "react-router-dom"
import store from "./store"
import {Provider} from "react-redux"

export default  class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
               <BrowserRouter>
                   <Link to={"/cart"}>cart</Link> || <Link to={"/product/1/apple"}>product</Link>
                   <hr/>
                   <Route path="/cart" component={JdCarts}/>
                   <Route path={"/product/:id"} component={JdProduct}/>
               </BrowserRouter>
        );
    }

}
