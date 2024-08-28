import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilData from '../Profil/ProfilData';
import './DodajOglas.css';
import { ThemeContext } from '../../Context/ThemeContext';
import megi from '../../assets/megafon.png';

const DodajOglas = () => {
  const [naslov, setNaslov] = useState('');
  const [tekst, setTekst] = useState('');
  const [cena, setCena] = useState('');
  const [glavnaSlika, setGlavnaSlika] = useState('');
  const [galerijaSlike, setGalerijaSlike] = useState([]);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setGlavnaSlika(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const readers = files.map(file => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(readers).then(results => {
      setGalerijaSlike(results);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noviOglas = {
      id: ProfilData.oglasi.length + 1, // Generate a new ID
      naslov: naslov,
      tekst: tekst,
      cena: cena,
      glavnaSlika: glavnaSlika,
      galerijaSlike: galerijaSlike,
    };

    ProfilData.oglasi.push(noviOglas); // Add the new ad to ProfilData
    navigate('/profil'); // Redirect to profile page after submission
  };

  return (
    <div className={`dodaj-oglas ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="oglas-container oglas-container-2">
        <div className="oglas-form">
        <h2>Dodaj Novi Oglas</h2>
          <img src={megi} alt="Megafon" className="megafon-image" />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Naslov oglasa:</label>
              <input
                id="title"
                type="text"
                value={naslov}
                onChange={(e) => setNaslov(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Tekst oglasa:</label>
              <textarea
                id="description"
                value={tekst}
                onChange={(e) => setTekst(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="price">Cena (u dinarima):</label>
              <input
                id="price"
                type="number"
                value={cena}
                onChange={(e) => setCena(e.target.value)}
                required
              />
            </div>
            <div className='upload-section'>
              <label htmlFor="main-image-upload">Izaberite glavnu sliku: <br /></label>
              <input
                id="main-image-upload"
                type="file"
                accept="image/*"
                onChange={handleMainImageUpload}
              />
              {glavnaSlika && <img src={glavnaSlika} alt="Pregled glavne slike" className="pregled-slike" />}
            </div>
            <div className='upload-section'>
              <label htmlFor="gallery-images-upload">Izaberite slike za galeriju (do 3 slike): <br /> </label>
              <input
                id="gallery-images-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleGalleryImageUpload}
              />
              {galerijaSlike.length > 0 && (
                <div className="pregled-galerije">
                  {galerijaSlike.map((img, index) => (
                    <img key={index} src={img} alt={`Pregled slike ${index + 1}`} className="pregled-slike" />
                  ))}
                </div>
              )}
            </div>
            <button type="submit">Dodaj Oglas</button>
          </form>
        </div>

        <div className="oglas-tips">
          <h3>Saveti za Pisanje Oglasa:</h3>
          <ul>
            <li>Naslov oglasa treba da bude jasan i privlačan.</li>
            <li>Opišite proizvod ili uslugu detaljno i iskreno.</li>
            <li>Istaknite glavne prednosti koje nudite.</li>
            <li>Dodajte kvalitetne slike kako biste privukli pažnju.</li>
            <li>Odredite fer cenu koja odgovara vrednosti proizvoda/usluge.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DodajOglas;





