import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import './Hero.css'
import hero_main from '../../assets/hero_main.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
 const {theme} = useContext(ThemeContext);
  return (
    <div className={`hero ${theme?'theme-dark theme-normal-shadow':'theme-shadow'}`}>
      <div className="left-hero">
        <div className={`box-rounded ${theme?'box-dark':''}`}></div>
        <h2>Dobrodošli <br className='novi' /> na <br className='novi' /> PreporučiME</h2>
        <p> platformu koja vas povezuje sa najboljim pružaocima usluga i omogućava vam da zaradite dok preporučujete druge! Bilo da nudite uslugu ili tražite pouzdane stručnjake, ovde je mesto gde vaša reputacija raste. Objavite svoj oglas, pružite vrhunske usluge, i dozvolite vašim zadovoljnim korisnicima da vas preporuče. Svaka preporuka donosi zaradu – kako vama, tako i onima koji vas preporučuju. <br /><span>Pridružite se zajednici gde se kvalitet prepoznaje i nagrađuje!</span></p>
        <button className='prijava-login'><Link to='/login' >Login</Link></button> <button className='prijava'><Link to='/register'>Registrujte se</Link></button>
      </div>
      <div className="right-hero">
        <img src={hero_main} alt="" />
      </div>
    </div>
  )
}

export default Hero
