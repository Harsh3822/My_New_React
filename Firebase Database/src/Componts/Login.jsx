import { signInWithPopup, signOut } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../Sevices/firebase'
import GoogleButton from 'react-google-button'

const Login = () => {
     

    const handalclick=()=>{
        signInWithPopup(auth,provider)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }
    const handallogout=()=>{
      signOut(auth).then((res)=>{
       alert("logout")
      })
      .catch((err)=>{
        console.log(err)
       })
    }
  return (
    <div>
        <GoogleButton onClick={handalclick} style={{margin:"30px"}}>LOGIN WITH GOOGLE</GoogleButton>
        <button onClick={handallogout}>log out</button> 
    </div>
  )
}

export default Login