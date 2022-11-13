import React from 'react';
import './navbar.css';

const NavBar = () => {
  return (
    <nav>
      <div className='logo-container'>
         <a href='/'><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="pokemon logo" /></a>
      </div>
      <ul className='navlist'>
        <li>
          <a href='/'>HOME</a>
        </li>
        <li>
          <a href='/caught'>CAUGHT</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar