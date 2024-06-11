import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Login from '../Components/Login'
import Products from '../Components/Products'
import Project from '../Components/Project'
import Prote from '../Pages/Prote'

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Project/:id' element={<Project />}></Route>
                <Route path='/Products' element={
                    <Prote>
                        <Products />
                    </Prote>
                }></Route>
                <Route path='/Login' element={<Login />}></Route>
                <Route path='*' element={<h1>Doe's page</h1>} />
            </Routes>
        </div>
    )
}

export default Allroutes