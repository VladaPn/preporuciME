import React, { useContext, useState } from 'react'
import './Navbar.css';
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';
import theme_sun from '../../assets/theme_sun.png';
import theme_moon from '../../assets/theme_moon.png';
import {Routes, Route} from "react-router-dom";
import { Link } from 'react-scroll';
import { ThemeContext } from '../../Context/ThemeContext';

const Navbar = () => {
  
  const { theme, setTheme} = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`navbar ${theme?'theme-dark theme-normal-shadow':'theme-shadow'}`}>
      <div className="no-toggle-menu" id={`${menuOpen?'no-toggle':''}`}>
      <div className="slika-logo">
      <img src={`${theme?logo_light:logo_dark}`} alt="" /> <p><Link to='home' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>preporučiME</Link></p>
      </div>
      <ul className='nav-menu'>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to='/pretraga' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Pretraga</Link></li>
        <li><Link to='/profil' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Profil</Link></li>
        <li><Link to='/premium' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Premium</Link></li>
      </ul>
      <button className='login'>Login</button>
      <button onClick={()=>{setTheme(prevCheck => !prevCheck)
      }} className={`theme ${theme?'button-dark':''}`}><img src={`${theme?theme_moon:theme_sun}`} alt="" /></button>
      <button className={`menu-toggle ${theme?'menu-toggle-dark':''}`} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      </div>
      <div className={`side-menu ${menuOpen?'':'menu-closed'}`}>
      <ul className='side-nav-menu'>
      <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to='/pretraga' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Pretraga</Link></li>
        <li><Link to='/profil' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Profil</Link></li>
        <li><Link to='/premium' smooth={true} offset={0} duration={500} onClick={() => setMenuOpen(false)}>Premium</Link></li>
        <button>Login</button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
