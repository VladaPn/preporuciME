import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../Context/ThemeContext'
import logo_dark from '../../assets/logo_dark.png';
import logo_light from '../../assets/logo_light.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`footer ${theme?'theme-dark theme-normal-shadow':'theme-shadow'}`}>
        <div className="footer-main">
      <div className="slika-logo">
      <img src={`${theme?logo_light:logo_dark}`} alt="" />
      <p>
      Zajednica gde svi pobedjuju </p>
      </div>
      <div className="right-footer">
      <div className='footer-contact'>
        <h3>Kontakt</h3>
        <p>Email: <a href="mailto:kontakt@preporucime.rs?subject=Upit%20za%20uslugu&body=Pozdrav,%20imam%20pitanje%20u%20vezi%20usluge...">
        kontakt@preporucime.rs
</a></p>
        <p>Telefon: <a href="tel:+3811234567">+381 123 4567</a></p>
      </div>
      <div className='follow-us'>
        <h3>Pratite nas</h3>
        <p>
          <a href="https://www.facebook.com/preporucime">Facebook</a> 
          <a href="https://www.instagram.com/preporucime">Instagram</a> 
          <a href="https://www.twitter.com/preporucime">Twitter</a>
          </p>
          </div>
          </div>
          </div>
          <div className="copyright">
          &copy; {new Date().getFullYear()} PreporučiME. Sva prava zadržana.
          </div>
    </div>
  )
}

export default Footer
