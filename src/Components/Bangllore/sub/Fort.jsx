import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Nav from "../../Home/Nav";
import Footer from "../../Home/Footer";
class Fort extends React.Component{
    constructor(){
        super()
            this.state={
                api:[],
            }    
        }
        componentDidMount(){
            let api = fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=1773524915")
            api.then(x=>x.json()).then(x=>{
              this.setState({api:x})
                   })
                    .catch(err => {
                    console.error("Error", err);
                   })
            }
    render(){
        
        const images = this.state.api.images || [];
        return(
                <>
                    <Nav/>

                    <div id="sn">
                     <h1>{this.state.api.name}</h1>
                     <p id="pppp">{this.state.api.subtitle}</p>


                 <div id="carousal">
                <Carousel >
                {
                images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={`Slide ${index}`} />
                </div>
                    ))
                }              
                </Carousel>
                </div>
                <hr/>
                <h4>About the Experience</h4>
                <p id="cp">
                    {this.state.api.content}
                </p>
                
                </div>
                <Footer/>
                </>
        )
    }
}
export default Fort;