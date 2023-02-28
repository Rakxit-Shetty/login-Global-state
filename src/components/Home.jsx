import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../action/index'
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../action/index'

export default function Home() {

  React.useEffect(() => {
    Dispatch(loadUser());
  }, []);

  const auth = useSelector(state => state.auth)
  const navigateTo = useNavigate();
  const Dispatch = useDispatch();
  
  console.log(auth)
 const {user}=auth;
 console.log("name f",user && user.userGroup)
  const logoutt=()=>{
  Dispatch(logout())
  navigateTo('/login')
  }

  return (
    <div>  Welcome Home Name{user && user.fullName}<br></br>
    Email{user && user.email}<br></br>
      <button onClick={logoutt}>Logout</button>
    </div>
  )
}

