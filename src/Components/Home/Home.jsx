import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import Nav from "./Nav";
import Baground from "./Baground";
import Footer from "./Footer";

class Home extends React.Component{

    constructor(){
        super()
        this.state={
            api:[],
            search:""
        }
    }
componentDidMount(){
         let api = fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
         api.then(x=>x.json()).then(x=>{
           this.setState({api:x})
                })
                .catch(err => {console.error("Error", err)})

         }
value =(e)=>{
    this.setState({search:e.target.value})   
}
render()
{    
    return(
        <>
            
            <Nav/>
            <Baground/>
            <input id="bt" type="text" onChange={this.value} placeholder="Search a City" ></input>
            <div id="cmd" style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly", padding:"80px 80px"}}>                
               {
                    this.state.api.filter(x=>x.city.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())).map(x=>{
                        return(
                            <div key={x.id}>
                                <Link key={x.id} to={x.id}> 
                                <Cards img = {x.image} h1={x.city} p = {x.description}  />
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

export default Home;
