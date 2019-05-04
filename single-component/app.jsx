import React,{Component} from "react"
import "swiper/dist/css/swiper.css"
import ReactSwiper from "./components/swiper/ReactSwiper"
import Two from "./pages/Two"


export default class App extends Component {
    
     render(){
         return <div>
              <Two />
         </div>
     }
}