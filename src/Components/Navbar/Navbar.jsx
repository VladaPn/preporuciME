import React from 'react'
import './Navbar.css';
import logo_dark from '../../assets/logo_dark.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="slika-logo">
      <img src={logo_dark} alt="" /> <p>preporučiME</p>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Pretraga</li>
        <li>Profil</li>
        <li>Premium</li>
        <button>Login</button>
      </ul>
    </div>
  )
}

export default Navbar
