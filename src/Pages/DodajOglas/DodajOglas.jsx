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
      emoji: '📢',
      tekst: 'Upečatljiv naslov privlači pažnju. Naslov je prva stvar koju potencijalni kupci vide, zato treba biti kratak, jasan i informativan. Izbegavajte preduge naslove i fokusirajte se na ključne reči koje opisuju vaš proizvod ili uslugu. Na primer, umesto generičkog naslova "Prodajem telefon", napišite "Prodajem iPhone 12 u odličnom stanju, povoljno!"'
    },
    {
      emoji: '📝',
      tekst: "Kada pišete opis, trudite se da uključite sve relevantne informacije o proizvodu ili usluzi. Objasnite specifične karakteristike, stanje, prednosti, i potencijalne koristi za kupca. Takođe, budite iskreni i transparentni - navedite ako postoje neki nedostaci. Detalji poput dimenzija, materijala, ili rokova isporuke mogu napraviti veliku razliku."
    },
    {
      emoji: '📷',
      tekst: "Priložite jasne, visoko kvalitetne fotografije koje prikazuju vaš proizvod iz više uglova. Izbegavajte korišćenje nejasnih ili mutnih slika, jer to može odbiti potencijalne kupce. Ako prodajete uslugu, slike mogu biti ilustrativne ili pokazivati rezultate vašeg rada. Ne zaboravite da koristite dobar osvetljenje i neutralnu pozadinu."
    },
    {
      emoji: '💸',
      tekst: 'Navedite cenu jasno i direktno, bez skrivanja dodatnih troškova. Ako nudite popuste ili specijalne ponude, to bi trebalo da bude istaknuto u opisu. Ukoliko postoji mogućnost pregovora, možete dodati napomenu "Cena po dogovoru," ali budite spremni na eventualne pregovore.'
    },
    {
      emoji: '🚀',
      tekst: 'Na kraju oglasa, uključite jasan poziv na akciju koji će ohrabriti potencijalne kupce da vas kontaktiraju ili posete vašu prodavnicu. Na primer, možete napisati "Kontaktirajte nas odmah za više informacija!" ili "Posetite naš sajt i naručite danas - količine su ograničene!" Ovaj korak može biti ključan u pretvaranju zainteresovanih u stvarne kupce.'
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
                className={`tab ${activeTab === index ? 'active-tab' : ''} ${activeTab === index && theme ? 'tab-color-active':''} ${theme?'tab-color ':''}`}
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







