import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../Sevices/firebase';

const Privetroute = ({children}) => {

  const [user] = useAuthState(auth);

    const isAuth=false

    if (!user){
        return<Navigate to ={"/login"}/>
    }
  return children
  
}

export default Privetroute