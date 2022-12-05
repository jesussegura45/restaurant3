import { Route, Routes, BrowserRouter } from "react-router-dom"
import React from 'react'
import Search from "../components/pages/Search"
import HomePage from "../components/pages/HomePage"
import { Navbar } from "../components/pages/Navbar"
import New from "../components/pages/New"


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/HomePage" element={<HomePage/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/New" element={<New/>} />
            
        </Routes>
    </BrowserRouter>
  )
}



