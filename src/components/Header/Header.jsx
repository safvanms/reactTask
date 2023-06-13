import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
     <div className="home-head" >
        <NavLink style={{textDecoration:"none"}} activeClassName='active' to='/home/:id'><h3>Home</h3></NavLink>
        <NavLink style={{textDecoration:"none"}} activeClassName='active' to='/about'><h3>About</h3></NavLink>
        <NavLink style={{textDecoration:"none"}} activeClassName='active' to='/contact'><h3>Contact</h3></NavLink>
      </div>
    </div>
  )
}
