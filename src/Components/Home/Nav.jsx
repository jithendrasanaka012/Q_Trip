import React from "react";
class Nav extends React.Component{
    render(){
        return(
           <div id="mn">
             <p>QTrip</p>
            <div id="mn1">
                        <span id="hm">Home</span>
                        <span>Reservation</span>
                        <span id="lh">Login Here</span>
                        <button>Register</button>
            </div>
           </div>
        )
    }
}
export default Nav;