import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../action/index'
import { useNavigate } from 'react-router-dom';

function Login() {
  const auth = useSelector(state => state.auth)
  const Dispatch = useDispatch()
  const navigateTo = useNavigate();
  const [name,setName]=React.useState("");
  const [pass,setPass]=React.useState("");

  const { isAuthenticated }=auth;
 
const seelog=()=>{
  Dispatch(login(name,pass))
}

if (isAuthenticated) {
  console.log(isAuthenticated)
  navigateTo('/route-driver')
}
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="usename" value={name} onChange={(e)=>setName (e.target.value)}></input><br/><br/>
      <input type="text" placeholder="password" value={pass} onChange={(e)=>setPass (e.target.value)}></input><br/><br/>
      <button onClick={seelog}>Login</button>
    </div>
  )
}


export default Login
