import React, { useContext } from 'react'
import './Zasto.css'
import { ThemeContext } from '../../Context/ThemeContext'
import earn_double from '../../assets/earn_double.png'
import easy from '../../assets/easy.png'
import quality from '../../assets/quality.png'
import safe from '../../assets/safe.png'

const Zasto = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`zasto ${theme?'theme-dark theme-normal-shadow':'theme-shadow'}`}>
      <div className="zasto-top">
      <h2>Zašto PreporučiME?</h2>
      <p>PreporučiME je više od platforme za pružanje usluga – to je zajednica gde svi pobedjuju!</p>
      </div>
      <div className="zasto-grid">
        <div className={`zasto-item ${theme?'zasto-item-shadow':''}`}>
          <h4>Zaradite Dvostruko</h4>
          <p>Ne samo da zarađujete pružajući svoje usluge, već i kada vas neko preporuči. Svaka preporuka vam donosi dodatni prihod!</p>
          <div className={`zasto-hover-item ${theme?'zasto-hover-item-dark':''}`}>
            <img src={earn_double} alt="" />
          </div>
        </div>
        <div className={`zasto-item ${theme?'zasto-item-shadow':''}`}>
          <h4>Poverenje i Kvalitet</h4>
          <p>Preporuke dolaze od stvarnih korisnika koji su već iskusili vašu uslugu. Vaš kvalitet je vaša najbolja reklama.</p>
          <div className={`zasto-hover-item ${theme?'zasto-hover-item-dark':''}`}>
            <img src={quality} alt="" />
          </div>
        </div>
        <div className={`zasto-item ${theme?'zasto-item-shadow':''}`}>
          <h4>Jednostavna Upotreba</h4>
          <p>Naša platforma je dizajnirana da bude intuitivna i laka za korišćenje. Brzo postavite oglas i počnite da dobijate preporuke.</p>
          <div className={`zasto-hover-item ${theme?'zasto-hover-item-dark':''}`}>
            <img src={easy} alt="" />
          </div>
        </div>
        <div className={`zasto-item ${theme?'zasto-item-shadow':''}`}>
          <h4>Transparentnost i Sigurnost</h4>
          <p>Sve transakcije i preporuke su transparentne, tako da možete biti sigurni da ćete dobiti ono što zaslužujete.</p>
          <div className={`zasto-hover-item ${theme?'zasto-hover-item-dark':''}`}>
            <img src={safe} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zasto
