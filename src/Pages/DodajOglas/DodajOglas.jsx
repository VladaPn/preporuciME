import React, { useContext, useState } from 'react';
import './DodajOglas.css';
import { useNavigate } from 'react-router-dom';
import ProfilData from '../Profil/ProfilData';
import { ThemeContext } from '../../Context/ThemeContext';
import megafon from '../../assets/megafon.png';

const DodajOglas = () => {
  const [naslov, setNaslov] = useState('');
  const [tekst, setTekst] = useState('');
  const [cena, setCena] = useState('');
  const [glavnaSlika, setGlavnaSlika] = useState(null);
  const [galerijaSlike, setGalerijaSlike] = useState([]);
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const glavnaSlikaURL = glavnaSlika ? URL.createObjectURL(glavnaSlika) : null;
    const galerijaSlikeURLs = galerijaSlike.map((slika) => URL.createObjectURL(slika));

    const newOglas = {
      id: ProfilData.oglasi.length + 1,
      naslov: naslov,
      tekst: tekst,
      cena: cena,
      glavnaSlika: glavnaSlikaURL,
      galerijaSlike: galerijaSlikeURLs,
    };

    ProfilData.oglasi.push(newOglas);
    navigate('/profil');
  };

  const handleGlavnaSlikaChange = (e) => {
    setGlavnaSlika(e.target.files[0]);
  };

  const handleGalerijaSlikeChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 3) {
      alert('Možete dodati do 3 slike za galeriju.');
    } else {
      setGalerijaSlike(selectedFiles);
    }
  };

  return (
    <div className={`dodaj-oglas-container ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div>
        <div className="dodaj-oglas-top">
          <h2>Dodaj novi oglas</h2>
          <img src={megafon} alt="megafon" />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={naslov}
            onChange={(e) => setNaslov(e.target.value)}
            placeholder="Naslov oglasa"
            required
          />
          <textarea
            value={tekst}
            onChange={(e) => setTekst(e.target.value)}
            placeholder="Tekst oglasa"
            maxLength="700"
            rows={8}
            required
          />
          <input
            type="text"
            value={cena}
            onChange={(e) => setCena(e.target.value)}
            placeholder="Cena"
            required
          />
          <div className="upload-section">
            <label>Glavna slika:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleGlavnaSlikaChange}
              required
            />
          </div>
          <div className="upload-section">
            <label>Galerija slike (do 3):</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalerijaSlikeChange}
            />
          </div>
          <button type="submit">Sačuvaj oglas</button>
        </form>
      </div>
      <div className="saveti-za-oglas">
        <h3>Saveti za pisanje dobrog oglasa:</h3>
        <ul>
          <li>Naslov neka bude kratak i jasan.</li>
          <li>Opis treba da sadrži sve bitne informacije.</li>
          <li>Dodajte slike visoke rezolucije.</li>
          <li>Istaknite prednosti i posebne karakteristike.</li>
          <li>Navedite realnu i konkurentnu cenu.</li>
        </ul>
      </div>
    </div>
  );
};

export default DodajOglas;



