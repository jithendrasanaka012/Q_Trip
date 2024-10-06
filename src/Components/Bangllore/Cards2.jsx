import React from "react";
import "./Bstyle.css"

class Cards2 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>

               
                <div id="bcd" >
                        <img link={this.props.link} id="" src={this.props.img} alt="i1"></img>                         
                        <p id="bp1">{this.props.p}</p>
                        <h5 id="h51">{this.props.h5}</h5>
                        <p id="p2">₹ {this.props.p2}</p>
                        <h5 id="h5"> Duration{this.props.h4}</h5>
                        <p id="p3">{this.props.p3} hours</p>
                </div>


               
            </>
        )
    }
}
export default Cards2;





