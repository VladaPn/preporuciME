import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProfilData from '../Profil/ProfilData';
import './OglasiDetalj.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const OglasDetalj = () => {
  const { id } = useParams();
  const oglas = ProfilData.oglasi.find((oglas) => oglas.id === parseInt(id));
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [showMessageForm, setShowMessageForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSendMessageClick = () => {
    setShowMessageForm(!showMessageForm);
    setMessageSent(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setMessageText('');
    setShowMessageForm(false);
  };

  const handleDeleteClick = () => {
    if (window.confirm('Da li ste sigurni da želite da obrišete ovaj oglas?')) {
      const oglasIndex = ProfilData.oglasi.findIndex((oglas) => oglas.id === parseInt(id));
      if (oglasIndex !== -1) {
        ProfilData.oglasi.splice(oglasIndex, 1);
      }
      navigate('/profil');
    }
  };

  return (
    <div className={`oglasi-detalj ${theme ? 'theme-dark' : 'theme-light'}`}>
      {oglas ? (
        <div className='oglas-container'>
          <div className="oglas-detalji">
            <div className="oglas-detalj-slika">
              <img src={oglas.glavnaSlika} alt="Glavna slika oglasa" />
            </div>
            <h1>{oglas.naslov}</h1>
            <p>{oglas.tekst}</p>

            <button onClick={handleSendMessageClick} className="send-message-button">
              {showMessageForm ? 'Zatvori formu' : 'Pošalji poruku'}
            </button>

            {showMessageForm && (
              <form className="message-form" onSubmit={handleFormSubmit}>
                <textarea 
                  placeholder="Napišite svoju poruku ovde..." 
                  rows="4" 
                  value={messageText} 
                  onChange={(e) => setMessageText(e.target.value)} 
                />
                <button type="submit">Pošalji poruku</button>
              </form>
            )}

            {messageSent && <p className="success-message">Poruka je poslata!</p>}

            <button onClick={handleDeleteClick} className="delete-button">
              Obriši oglas
            </button>
          </div>
          <div className="oglas-gallery">
            <Carousel>
              {oglas.galerijaSlike.map((slika, index) => (
                <div key={index}>
                  <img src={slika} alt={`Slika ${index + 1}`} />
                </div>
              ))}
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






