import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {

    let activeStyle = {
        textDecoration: 'none',
        color: '#ffbc42',
        pointerEvents: 'none'
    }

    let inactiveStyle = {
        textDecoration: 'none',
    }

  return (
    <nav>
      <div className='contact'>Robyn Anderson</div>
      <div>
        <NavLink
            to='/'
            style={({isActive}) => isActive ? activeStyle : inactiveStyle}>
            Profile
            </NavLink>
        <NavLink
            to='projects'
            style={({isActive}) => isActive ? activeStyle : inactiveStyle}>
            Projects
            </NavLink>
        <NavLink
            to='work-history'
            style={({isActive}) => isActive ? activeStyle : inactiveStyle}>
            Work History
            </NavLink>
        <NavLink
            to='interests'
            style={({isActive}) => isActive ? activeStyle : inactiveStyle}>
            Interests
            </NavLink>
      </div>
    </nav>
  )
}

export default Nav