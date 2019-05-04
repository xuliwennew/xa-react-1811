import React from "react"
import Swiper from "swiper"
import "./index.css"


export default class ReactSwiper extends React.Component {

         render() {
           return (
             //let sc = {}
             <div className="swiper-container" ref="sc">
                <div className="swiper-wrapper">
                  <div className="swiper-slide box1">Slide 1</div>
                  <div className="swiper-slide box2">Slide 2</div>
                  <div className="swiper-slide box3">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
             </div>
           )
         }


         componentDidMount() {
            //ready onload refs
            //refs vnode document.queyrSelector
           let swiper = new Swiper(this.refs.sc,{
              // effect:"cube"
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
           })
            console.log(this.refs.sc) // document.querySelector("#sc")
            
         }
         
       }
