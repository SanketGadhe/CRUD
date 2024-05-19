import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home'
import User from './Components/User'
import Detailed from './Components/Detailed'
import App from './App'

// creating routes for rendering of different component to app
const route=createBrowserRouter(
  createRoutesFromElements([
    <Route path='/' element={<App/>}>
<Route path='' element={<Home/>}/>
<Route path='Home' element={<Home/>}/>
<Route path='Users' element={<User/>}/>
<Route path='Detailed' element={<Detailed/>}/>
    </Route>
  ])
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>
    
  </RouterProvider>
)