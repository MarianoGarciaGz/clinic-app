import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from '../pages/Home'
import Agendar from '../pages/Agendar'

const Navlink = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='agendar' element={<Agendar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Navlink
