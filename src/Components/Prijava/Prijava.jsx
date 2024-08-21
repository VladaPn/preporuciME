import React, { useContext } from 'react'
import lock_img from '../../assets/lock.png'
import { ThemeContext } from '../../Context/ThemeContext';
import './Prijava.css'

const Prijava = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <div className={`izmeni-profil-container prijava nije-log ${theme ? 'theme-dark' : 'theme-light'}`}>
        <img src={lock_img} alt="Lock" />
        <p>Da biste izmenili profil, molimo vas da se prijavite.</p>
      </div>
  )
}

export default Prijava
