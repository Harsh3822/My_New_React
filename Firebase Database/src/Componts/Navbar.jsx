import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div>
        <Link to={"/login"} style={{padding:"20px",fontSize:"24px"}}>Login</Link>
        <Link to={"/dashbord"}style={{padding:"20px",fontSize:"24px"}}>Dashbord</Link>

 </div>
  )
}

export default Navbar