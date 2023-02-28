import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import RoutesFile from './components/routing/RoutesFile'
import store from "./store";
import {Provider} from 'react-redux'
import { loadUser } from './action/index';
import {setAuthToken} from './Utils/setAuthToken';
import React from 'react'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
 
  
 React.useEffect(() => {
    //store.dispatch(loadUser());
  }, []);

  return (
   <>
   <Provider store={store}>
    <>
   <BrowserRouter>
          <Routes>
            
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
           <Route path="*" element={<RoutesFile/>} /> 
            
          </Routes>
   </BrowserRouter>
   </>
   </Provider>
   </>
  )
}

export default App
