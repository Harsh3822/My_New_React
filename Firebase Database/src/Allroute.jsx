import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Componts/Login'
import Dashbord from './Componts/Dashbord'
import Navbar from './Componts/Navbar'
import Privetroute from './Componts/Privetroute'

const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/login'element={<Login/>}></Route>
            <Route path='/dashbord'element={
                <Privetroute>
                <Dashbord/>
                </Privetroute>
                }></Route>
            {/* <Route path='/'element={<Navbar/>}></Route> */}


        </Routes>
    </div>
  )
}

export default Allroute