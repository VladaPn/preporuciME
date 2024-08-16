import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../../data/data'; // Uvozimo podatke
import { ThemeContext } from '../../Context/ThemeContext';
import './PreporukaDetalj.css';
import Komentar from '../../Components/Komentar/Komentar';

const PreporukaDetalj = () => {
  const { id } = useParams(); // Dobijamo ID iz URL-a
  const preporuka = sampleData.find(item => item.id === parseInt(id)); // Nalazimo preporuku sa tim ID-om
  const { theme } = useContext(ThemeContext);

  // State za preporuke
  const [preporuke, setPreporuke] = useState(preporuka.recommendations);
  const [preporuceno, setPreporuceno] = useState(false);

  const handlePreporuku = () => {
    if (preporuceno) {
      setPreporuke(preporuke - 1);
    } else {
      setPreporuke(preporuke + 1);
    }
    setPreporuceno(!preporuceno);

    // Update localStorage or your data source
    // Save updated recommendations
    localStorage.setItem('preporukeData', JSON.stringify(sampleData.map(dataItem =>
      dataItem.id === preporuka.id ? { ...dataItem, recommendations: preporuke } : dataItem
    )));
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



