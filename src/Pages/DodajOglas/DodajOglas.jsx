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
  const [activeTab, setActiveTab] = useState(0); // State for active tab
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

  const tips = [
    {
      emoji: '🔍',
      tekst: "Navigacija je ključno za korisničko iskustvo. Kada korisnici lako mogu pronaći ono što traže, smanjuje se frustracija i povećava zadovoljstvo. Preporučuje se upotreba jasno označenih kategorija i jednostavnih menija kako bi korisnici mogli brzo da se orijentišu i pristupe željenim sadržajima."
    },
    {
      emoji: '📱',
      tekst: "Responzivni dizajn osigurava da vaš sajt ili aplikacija izgleda dobro i funkcioniše pravilno na svim uređajima. Ovo je važno jer sve više korisnika pristupa internetu putem mobilnih uređaja, pa je bitno da imaju optimalno iskustvo bez obzira na veličinu ekrana."
    },
    {
      emoji: '🔧',
      tekst: "Konzistentnost u dizajnu znači da svaki deo vašeg sajta ili aplikacije treba da prati iste vizuelne i funkcionalne principe. Ovo uključuje upotrebu istih boja, fontova, dugmadi i navigacionih elemenata na svim stranama sajta."
    },
    {
      emoji: '🎯',
      tekst: "Razumevanje ko su vaši korisnici i šta žele postići je ključno za uspeh sajta ili aplikacije. Definišite svoju ciljnu publiku i fokusirajte se na njihove potrebe, interese i probleme."
    },
    {
      emoji: '⚡',
      tekst: "Brzina učitavanja stranica ima veliki uticaj na korisničko iskustvo. Spore stranice mogu odbiti korisnike i negativno uticati na rangiranje vašeg sajta u pretraživačima. Optimizujte slike, smanjite nepotrebne skripte i iskoristite keširanje kako bi stranice bile što brže."
    }
  ];

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
                rows={7}
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
        <div className="side-tips">
          <div className="tabs">
            {tips.map((tip, index) => (
              <button
                key={index}
                className={`tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tip.emoji}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <p>{tips[activeTab].emoji} {tips[activeTab].tekst}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DodajOglas;







