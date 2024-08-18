import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../../data/data'; // Uvozimo podatke
import { ThemeContext } from '../../Context/ThemeContext';
import './PreporukaDetalj.css';
import Komentar from '../../Components/Komentar/Komentar';

const PreporukaDetalj = () => {
  const { id } = useParams(); // Dobijamo ID iz URL-a
  const { theme } = useContext(ThemeContext);
  const preporuka = sampleData.find(item => item.id === parseInt(id)); // Nalazimo preporuku sa tim ID-om
  
  // State za preporuke
  const [preporuke, setPreporuke] = useState(preporuka ? preporuka.recommendations : 0);
  const [preporuceno, setPreporuceno] = useState(false);

  // Proveri lokalnu memoriju da vidiš da li je korisnik već preporučio
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('preporukeData')) || [];
    const storedItem = storedData.find(item => item.id === parseInt(id));
    if (storedItem) {
      setPreporuceno(storedItem.recommendations > preporuka.recommendations);
    }
  }, [id, preporuka]);

  // Skrolovanje na vrh stranice pri učitavanju komponente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePreporuku = () => {
    const newPreporuke = preporuceno ? preporuke - 1 : preporuke + 1;
    setPreporuke(newPreporuke);
    setPreporuceno(!preporuceno);

    // Ažuriraj localStorage ili izvor podataka
    const updatedData = sampleData.map(dataItem => 
      dataItem.id === preporuka.id ? { ...dataItem, recommendations: newPreporuke } : dataItem
    );
    localStorage.setItem('preporukeData', JSON.stringify(updatedData));
  };

  if (!preporuka) {
    return <p>Preporuka nije pronađena.</p>;
  }

  return (
    <div className={`preporuka-single ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="preporuka-detail">
        <div className="preporuka-left">
          <h1>{preporuka.title}</h1>
          <img src={preporuka.image} alt={preporuka.title} />
        </div>
        <div className="preporuka-right">
          <p><strong>Autor:</strong> {preporuka.author}</p>
          <p><strong>Cena:</strong> {preporuka.price}</p>
          <p><strong>Broj preporuka:</strong> {preporuke}</p>
          <p className='opis'><strong>Opis:</strong> <br /> {preporuka.desc}</p>
          <div className='preporuci big-preporuci'>
            <button onClick={handlePreporuku}>
              {preporuceno ? 'Otkaži preporuku' : 'Preporuči'}
            </button>
          </div>
        </div>
      </div>
      <Komentar/>
    </div>
  );
};

export default PreporukaDetalj;





