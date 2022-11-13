import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div className='logo-container'>
         <NavLink to='/'><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo" /></NavLink>
      </div>
      <ul className='navlist'>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/caught'>CAUGHT</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar