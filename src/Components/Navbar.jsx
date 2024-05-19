import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className="fixed w-full">
    <div className='nav flex justify-between bg-[#31363F] px-4 py-2 max-md:block'>
      <div className="left text-xl font-semibold">CR<span className='text-teal-400'>UD</span></div>
      <div className="right">
        <ul className='list-none flex gap-3 '>
            <li><NavLink to={'Home'} className={(e)=>{return e.isActive?'text-teal-400 border-b-2 border-teal-400':'hover:text-teal-400  hover:border-b-2 hover:border-teal-400 transition-all'}}>Home</NavLink></li>
            <li><NavLink to={'Users'} className={(e)=>{return e.isActive?'text-teal-400 border-b-2 border-teal-400':'hover:text-teal-400  hover:border-b-2 hover:border-teal-400 transition-all'}}>Users</NavLink></li>
            <li><NavLink to={'Detailed'} className={(e)=>{return e.isActive?'text-teal-400 border-b-2 border-teal-400':'hover:text-teal-400  hover:border-b-2 hover:border-teal-400 transition-all'}}>Detailed Info</NavLink></li>
        </ul>
      </div></div>
    </div>
  )
}

export default Navbar
