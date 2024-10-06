import React from "react";
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Bapp from "./Pages/Bapp";
import Nav from './Components/Home/Nav';
import Cards from './Components/Home/Cards';
import Baground from './Components/Home/Baground';
import Footer from './Components/Home/Footer';
import Gapp from "./Pages/Gapp";
import Kapp from "./Pages/Kapp";
import Nia from './Components/Bangllore/sub/Nia';
import Fort from './Components/Bangllore/sub/Fort';
import Home from "./Components/Home/Home";
import Error from "./Pages/Error";

function Routing(){
    return(
                <>
                     <BrowserRouter>
                    <Routes>
                            <Route path='/' element={<Home/>}></Route>
                            <Route path='/Nav' element={<Nav/>}></Route>
                            <Route path='/Bag' element={<Baground/>}></Route>
                            <Route path='/Cards' element={<Cards/>}></Route>
                            <Route path='/Footer' element={<Footer/>}></Route>
                            <Route path='/bengaluru' element={<Bapp/>}></Route>
                            <Route path='/goa' element={<Gapp/>}></Route>
                            <Route path='/kolkata' element={<Kapp/>}></Route>
                            <Route path="/bengaluru/2447910730" element={<Nia/>}></Route>
                            <Route path='/bengaluru/1773524915' element={<Fort/>}></Route>
                            <Route path="*" element={<Error/>}/>
                    </Routes>
    </BrowserRouter>
                </>
    )
}
export default Routing