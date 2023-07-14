import  { ReactNode } from 'react'
import { Route, Navigate } from 'react-router-dom'

interface Props{
    children?: ReactNode 
}

export const PrivateRoute= ({children ,...rest}:Props) => {
    console.log('Private route works!');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var  authenticated  = false
  return (
    <Route {...rest}>
        {!authenticated ? <Navigate to={"/login"}/> :children}
    </Route>
  )
}

