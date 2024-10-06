import React from "react";
import "../../style.css"
class Cards extends React.Component{
   
    render(){
        return(
            <>
               
                <div id="cd" >
                        <img id="i8" src={this.props.img} alt="i1"></img> 
                        <h1>{this.props.h1}</h1>  <p>{this.props.p}</p>
                </div>
              
               
            </>
        )
    }
}
export default Cards;



