import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className='bg-[#222831] text-white min-h-[100vh]'>

    <Navbar/>
    {/* Outlet will render different componenet */}
    <Outlet/>
  </div>
    
  )
}

export default App
