import React, { useContext } from 'react';
import './Komentar.css';
import comment_icon from '../../assets/comment_icon.png';
import comment_icon_main from '../../assets/comment_icon_main.png';
import komentariData from '../../data/komentariData'; // Učitajte komentare
import { ThemeContext } from '../../Context/ThemeContext'

const Komentar = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className='komentari'>
      <div className="komentari-top">
        <img src={`${theme?comment_icon:comment_icon_main}`} alt="" /> <h2>Komentari</h2>
      </div>
      <div className="lista-komentara">
        {komentariData.map(komentar => (
          <div key={komentar.id} className="komentar">
            <div className="komentar-top">
            <img src="https://xsgames.co/randomusers/avatar.php?g=male" />
            <h4>{komentar.autor}</h4>
            </div>
            <div className={`komentar-bottom ${theme?'dark-bottom':''}`}>
            <p>{komentar.tekst}</p>
            <div className="spanovi">
            <span className="lajkovi">Broj lajkova: {komentar.lajkovi}</span>
            <span className="dislajkovi">Broj dislajkova: {komentar.dislajkovi}</span>
            </div>
            
            <button>Like</button> <button>Dislike</button>
            </div>
          </div>
        ))}
      </div>
      <div className="tvoj-komentar">
        <p>Napisi komentar</p>
        <textarea name="tvoj-kom" id="tvoj-kom" placeholder='Tvoj komentar'></textarea>
      </div>
    </div>
  )
}

export default Komentar;

