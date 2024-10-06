import React from "react";

import Nav from "../Components/Home/Nav";
import Footer from "../Components/Home/Footer";
import Gcard from "../Components/Goa/Gcard";

import Nav1 from "../Components/Bangllore/Nav1";

class Gapp extends React.Component{
    constructor(){
        super()
        this.state={
            api:[]
        }
    }
    componentDidMount(){
        let api = fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa")
        api.then(x=>x.json()).then(x=>{
          this.setState({api:x})
               })
               .catch(err => {console.error("Error", err)})

        }
    render(){
        // console.log(this.state.api);
        
        return(
                <>
                    <Nav/>
                    <Nav1/>
                             
                                 <div  id="cmd" style={{display:"flex",flexWrap:"wrap",justifyContent:"space", padding:"110px 105px", border:"solid 1px", gap:"20px"}}>
                                  {
                                    this.state.api.map(x=>{
                                        return(
                                            <div key={x.id}>
                                                <Gcard img={x.image} p={x.category} h5={x.name} p2={x.costPerHead} p3={x.duration} />
                                            </div>
                                        )
                                    })
                                }

                                    </div>
                                   

                    <Footer/>
                </>
        )
    }
}
export default Gapp;
