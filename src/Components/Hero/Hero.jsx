import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import './Hero.css'
import hero_main from '../../assets/hero_main.jpg'

const Hero = () => {
 const {theme} = useContext(ThemeContext);
  return (
    <div className={`hero ${theme?'theme-dark':''}`}>
      <div className="left-hero">
        <div className={`box-rounded ${theme?'box-dark':''}`}></div>
        <h2>Dobrodošli na PreporučiME</h2>
        <p> platformu koja vas povezuje sa najboljim pružaocima usluga i omogućava vam da zaradite dok preporučujete druge! Bilo da nudite uslugu ili tražite pouzdane stručnjake, ovde je mesto gde vaša reputacija raste. Objavite svoj oglas, pružite vrhunske usluge, i dozvolite vašim zadovoljnim korisnicima da vas preporuče. Svaka preporuka donosi zaradu – kako vama, tako i onima koji vas preporučuju. <br /><span>Pridružite se zajednici gde se kvalitet prepoznaje i nagrađuje!</span></p>
        <button className='prijava'>Prijavi se</button> <button className='prijava'>Registruj se</button>
      </div>
      <div className="right-hero">
        <img src={hero_main} alt="" />
      </div>
    </div>
  )
}

export default Hero
