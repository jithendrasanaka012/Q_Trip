import React from "react";
import Cards2 from "../Components/Bangllore/Cards2";
import Nav1 from "../Components/Bangllore/Nav1";
import Nav from "../Components/Home/Nav";
import Footer from "../Components/Home/Footer";
import { Link } from "react-router-dom";



class Bapp extends React.Component{
    constructor(){
        super()
            this.state={
                api:[],
                keys:[]
            }
        
        // console.log(this.state.api);
        
    }
    componentDidMount(){
             let api = fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=bengaluru")
             api.then(x=>x.json()).then(x=>{
               this.setState({api:x})
                    })
                     .catch(err => {
                     console.error("Error", err);
                    })
             }

    render(){
        // console.log(this.state.api);
        // console.log(this.state.keys);
        
        return(
            <>
            
                <Nav/>
                <Nav1/>
                
                <div id="cmd" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between", padding:"110px 105px", gap:"20px"}}>

                    
                    {
                        this.state.api.map(x=>{
                            return(
                                <div key={x.id}>
                                 <Link to={x.id}>
                                <Cards2 img={x.image} p={x.category} h5={x.name} p2={x.costPerHead} p3={x.duration} />
                                </Link>
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
export default Bapp;