import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';
import theme_sun from '../../assets/theme_sun.png';
import user from '../../assets/user.png';
import theme_moon from '../../assets/theme_moon.png';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`navbar ${theme ? 'theme-dark theme-normal-shadow' : 'theme-shadow'}`}>
      <div className="no-toggle-menu" id={`${menuOpen ? 'no-toggle' : ''}`}>
        <div className={`slika-logo ${theme ? 'slika-logo-tekst' : ''}`}>
          <Link to='/'><img src={`${theme ? logo_light : logo_dark}`} alt="" /></Link> 
          <Link to='/'><p>preporučiME</p></Link>
        </div>
        <ul className={`nav-menu ${theme ? 'nav-menu-dark' : ''}`}>
          <li><Link to='/' onClick={handleCloseMenu}>Home</Link></li>
          <li><Link to='/pretraga' onClick={handleCloseMenu}>Pretraga</Link></li>
          <li><Link to='/profil' onClick={handleCloseMenu}>Profil</Link></li>
          <li><Link to='/premium' onClick={handleCloseMenu}>Premium</Link></li>
        </ul>
        <Link to='/login' onClick={handleCloseMenu}><button className='login'>Login</button></Link>
        <a href="" className="korisnik"><img src={user} alt="" /></a>
        <button 
          onClick={() => setTheme(prevCheck => !prevCheck)}
          className={`theme ${theme ? 'button-dark' : ''}`}
        >
          <img src={`${theme ? theme_moon : theme_sun}`} alt="" />
        </button>
        <button 
          className={`menu-toggle ${theme ? 'menu-toggle-dark' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
      
      {/* Overlay for closing the menu */}
      {menuOpen && <div className="overlay" onClick={handleCloseMenu}></div>}
      
      {/* Sidebar menu */}
      <div className={`side-menu ${menuOpen ? '' : 'menu-closed'}`}>
        <ul className='side-nav-menu'>
          <li><Link to='/' onClick={handleCloseMenu}>Home</Link></li>
          <li><Link to='/pretraga' onClick={handleCloseMenu}>Pretraga</Link></li>
          <li><Link to='/profil' onClick={handleCloseMenu}>Profil</Link></li>
          <li><Link to='/premium' onClick={handleCloseMenu}>Premium</Link></li>
          <a href="" className="korisnik"><img src={user} alt="" /></a>
          <button onClick={handleCloseMenu}><Link to='/login' onClick={handleCloseMenu}>Login</Link></button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
