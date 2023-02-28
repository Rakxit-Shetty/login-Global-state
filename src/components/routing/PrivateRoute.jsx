import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"



export default function PrivateRoute({...rest}) {

  const auth = useSelector(state => state.auth)
const { isAuthenticated, loading }=auth;
  //const Dispatch = useDispatch()

  return (
    <div>
       <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
    </div>
  )
}
