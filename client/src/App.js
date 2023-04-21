import React from 'react'

import Navbar from "./components/Navbar"
import{Routes,Route} from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import Register from "./components/Register"

const App=()=>{
return (

 // <div><h1>Hello world</h1></div>

<div>
<Navbar/>

<Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      
      </Routes>


     
    </div>


 
)
}


export default App;
