import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from '../Dashbord'
import Home from '../Home';
import RouteDriver from '../RouteDriver';
function RoutesFile() {
  return (
    <div>
        
        <Routes>

            <Route path="/dash" element={<Dashbord/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/route-driver" element={<RouteDriver/>}/>

        </Routes>
      
    </div>
  )
}

export default RoutesFile
