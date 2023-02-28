import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../action/index'
import { useNavigate } from 'react-router-dom';

export default function RouteDriver() {
    const navigateTo = useNavigate();
    const Dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
  
    

    React.useEffect(() => {
        Dispatch(loadUser());
      }, [auth.user]);

      if (auth.user) {
        navigateTo('/Home')
       }
        
  return (
    <>
     <div>
      <h1>RouteDriver</h1>
    </div>
    </>
   
  )

}
