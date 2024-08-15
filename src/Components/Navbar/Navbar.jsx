import React, { useContext, useState } from 'react'
import './Navbar.css';
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';
import theme_sun from '../../assets/theme_sun.png';
import user from '../../assets/user.png';
import theme_moon from '../../assets/theme_moon.png';
import {Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

const Navbar = () => {
  
  const { theme, setTheme} = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`navbar ${theme?'theme-dark theme-normal-shadow':'theme-shadow'}`}>
      <div className="no-toggle-menu" id={`${menuOpen?'no-toggle':''}`}>
      <div className={`slika-logo ${theme?'slika-logo-tekst':''}`}>
      <Link to='/' ><img src={`${theme?logo_light:logo_dark}`} alt="" /></Link> <Link to='/' ><p>preporučiME</p></Link>
      </div>
      <ul className={`nav-menu ${theme?'nav-menu-dark':''}`}>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/pretraga' >Pretraga</Link></li>
        <li><Link to='/profil' >Profil</Link></li>
        <li><Link to='/premium' >Premium</Link></li>
      </ul>
      <button className='login'>Login</button>
      <a href="" className="korisnik"><img src={user} alt="" /></a>
      <button onClick={()=>{setTheme(prevCheck => !prevCheck)
      }} className={`theme ${theme?'button-dark':''}`}><img src={`${theme?theme_moon:theme_sun}`} alt="" /></button>
      <button className={`menu-toggle ${theme?'menu-toggle-dark':''}`} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      </div>
      <div className={`side-menu ${menuOpen?'':'menu-closed'}`}>
      <ul className='side-nav-menu'>
      <li><Link to='/' >Home</Link></li>
        <li><Link to='/pretraga' >Pretraga</Link></li>
        <li><Link to='/profil' >Profil</Link></li>
        <li><Link to='/premium'>Premium</Link></li>
        <a href="" className="korisnik"><img src={user} alt="" /></a>
        <button>Login</button>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
