import React from "react";
class Gcard extends React.Component{
    render(){
        return(
            <>

               
            <div id="bcd" >
                    <img id="" src={this.props.img} alt="i1"></img> 
                    
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
export default Gcard;