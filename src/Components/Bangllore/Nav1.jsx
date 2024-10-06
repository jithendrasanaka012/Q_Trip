import React from "react";

class Nav1 extends React.Component{
    render(){
        return(
           <>
           <div id="bmd">
                    <h1>Explore all adventures</h1>
                    <p>Here's a list of places that you can explore in city</p>
                    
                    <div id="bmd1">
                            <span id="sp1">Filters: | <button>Filter By Duration(Hours)</button> Clear |</span>
                            <span id="sp2"><button>Add Category</button> Clear |</span>
                            <span id="sp3"><input id="spt" type="text" placeholder="Search adventures" /> Clear |</span>
                    </div>
           </div>
           </>
        )
    }
}
export default Nav1;