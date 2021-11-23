import react, { useState } from 'react';
import "./Navbar.scss";


const Navbar = (props) => {
  return (
    <nav className='nav'>
      <span className='logo'>GIFT2ME</span>
      <span className='span' >Login</span> 
      <span className='span'> Logout</span>
      <span className='span' >Register</span> 
      </nav>
  )
}

export default Navbar;