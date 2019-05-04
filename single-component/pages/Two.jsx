import React from "react"
 
import TwoContext from './TwoContext';



class Zero extends React.Component {

            render(){
               return <TwoContext.Consumer >
                    {
                        value => <h1>Zero component: {value.title}</h1>
                    }
               </TwoContext.Consumer>
            }
       }
       
       class One extends React.Component {

           render(){
              return <div>
               <h1>one component</h1>
               <Zero/>
              </div>
           }
       }


export default class Two extends React.Component {

          
         render(){
              return (
                  <TwoContext.Provider value={{"title":"hello"}}>
                        <div>
                            <h1>two component</h1>
                            <One/>
                        </div>
              </TwoContext.Provider> 
              ) 
                
           }


}
        