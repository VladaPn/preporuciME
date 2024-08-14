import React, { useState } from 'react'
import './Navbar.css';
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';
import theme_sun from '../../assets/theme_sun.png';
import theme_moon from '../../assets/theme_moon.png';
import {Routes, Route} from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`navbar ${theme?'theme-dark':''}`}>
      <div className="no-toggle-menu" id={`${menuOpen?'no-toggle':''}`}>
      <div className="slika-logo">
      <img src={`${theme?logo_light:logo_dark}`} alt="" /> <p>preporučiME</p>
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Pretraga</li>
        <li>Profil</li>
        <li>Premium</li>
      </ul>
      <button className='login'>Login</button>
      <button onClick={()=>{setTheme(prevCheck => !prevCheck)
        console.log(theme);
      }} className={`theme ${theme?'button-dark':''}`}><img src={`${theme?theme_moon:theme_sun}`} alt="" /></button>
      <button className={`menu-toggle ${theme?'menu-toggle-dark':''}`} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      </div>
      <div className={`side-menu ${menuOpen?'':'menu-closed'}`}>
      <ul className='side-nav-menu'>
        <li>Home</li>
        <li>Pretraga</li>
        <li>Profil</li>
        <li>Premium</li>
        <button>Login</button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
