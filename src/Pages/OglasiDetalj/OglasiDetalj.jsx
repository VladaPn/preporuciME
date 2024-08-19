import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfilData from '../Profil/ProfilData';
import './OglasiDetalj.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Uvoz stilova za carousel

const OglasDetalj = () => {
  const { id } = useParams();
  const oglas = ProfilData.oglasi.find((oglas) => oglas.id === parseInt(id));
  const { theme } = useContext(ThemeContext);

  const [showMessageForm, setShowMessageForm] = useState(false);

  const handleSendMessageClick = () => {
    setShowMessageForm(!showMessageForm);
  };

  return (
    <div className={`oglasi-detalj ${theme ? 'theme-dark' : 'theme-light'}`}>
      {oglas ? (
        <div className='oglas-container'>
            <div className="oglas-detalji">
          <div className="oglas-detalj-slika">
            <img src={oglas.img} alt="" />
          </div>
          <h1>{oglas.naslov}</h1>
          <p>{oglas.tekst}</p>

          <button onClick={handleSendMessageClick} className="send-message-button">
            {showMessageForm ? 'Zatvori formu' : 'Pošalji poruku'}
          </button>

          {showMessageForm && (
            <form className="message-form">
              <textarea placeholder="Napišite svoju poruku ovde..." rows="4" />
              <button type="submit">Pošalji</button>
            </form>
          )}
</div>
          <div className="oglas-gallery">
            <Carousel>
              <div>
                <img
                  src="https://via.placeholder.com/600x400?text=Slika+1"
                  alt="Prva slika"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/600x400?text=Slika+2"
                  alt="Druga slika"
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/600x400?text=Slika+3"
                  alt="Treća slika"
                />
              </div>
            </Carousel>
          </div>
        </div>
      ) : (
        <p>Oglas nije pronađen.</p>
      )}
    </div>
  );
};

export default OglasDetalj;


