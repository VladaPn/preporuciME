import './Profil.css';
import React, { useContext, useState, useEffect } from 'react';
import ProfilData from './ProfilData';
import { ThemeContext } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';
import profile_icon from '../../assets/profile_icon.png';
import premium_icon from '../../assets/premium_icon.png';

const Profil = () => {
  const { theme } = useContext(ThemeContext);

  // Učitavanje podataka iz localStorage ili default vrednosti
  const [ime, setIme] = useState(localStorage.getItem('ime') || ProfilData.ime);
  const [prezime, setPrezime] = useState(localStorage.getItem('prezime') || ProfilData.prezime);
  const [email, setEmail] = useState(localStorage.getItem('email') || ProfilData.email);
  const [profilnaSlika, setProfilnaSlika] = useState(localStorage.getItem('img') || ProfilData.img);

  useEffect(() => {
    // Ažuriranje slike ako je promenjena
    const novaSlika = localStorage.getItem('img');
    if (novaSlika) {
      setProfilnaSlika(novaSlika);
    }
  }, []);

  return (
    <div className={`profil ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="profil-title">
        <img src={profile_icon} alt="Profil Ikona" />
        <h2>Profil</h2>
      </div>
      <div className="profil-container">
        <div className="profil-basic-info">
          <img src={profilnaSlika} alt="Profilna Slika" />
          <div className="profil-inputi">
            <form>
              <input
                type="text"
                className="profile-name"
                value={ime}
                onChange={(e) => setIme(e.target.value)}
                disabled
              />
              <input
                type="text"
                className="profile-surname"
                value={prezime}
                onChange={(e) => setPrezime(e.target.value)}
                disabled
              />
              <input
                type="text"
                className="profile-username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
              <button id="izmeni-prof" type="button">
                <Link to="/izmeniprofil">Izmeni profil</Link>
              </button>
            </form>
          </div>
          {ProfilData.premium && (
            <div className="premium-img">
              <img src={premium_icon} alt="Premium Ikona" />Premium nalog
            </div>
          )}
          {ProfilData.premium && (
            <div className="premium-tekst">Premium nalog je aktivan još {ProfilData.trajanje} dana</div>
          )}
          <div className="profile-additional-bottom">
            <button>Logout</button>
            <button>Izbriši profil</button>
          </div>
        </div>

        <div className="profile-additional">
          <div className="profile-additional-top">
            <div className="najnovije-preporuke">
              <div className={`box-rounded ${theme ? 'box-dark' : ''}`}></div>
              <h2>Preporuke</h2>
              {ProfilData.preporuke.length > 0 ? (
                <ul>
                  {ProfilData.preporuke.map((preporuka) => (
                    <li key={preporuka.id}>
                      <Link to={`/preporuka/${preporuka.id}`}>
                        <h3>{preporuka.naslov}</h3>
                        <p>{preporuka.tekst}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Nemate preporuke.</p>
              )}
              <p className={`preostale-preporuke ${theme ? 'dark-preostale' : ''}`}>
                Preostalo besplatnih preporuka ovog meseca: {ProfilData.preporuke_remain}
              </p>
              <button className="kupi">Kupite nove preporuke</button>
            </div>

            <div className="najnoviji-oglasi">
              <div className={`box-rounded ${theme ? 'box-dark' : ''}`}></div>
              <h2>Oglasi</h2>
              {ProfilData.oglasi.length > 0 ? (
                <ul>
                  {ProfilData.oglasi.map((oglas) => (
                    <li key={oglas.id}>
                      <Link to={`/oglasi/${oglas.id}`}>
                        <h3>{oglas.naslov}</h3>
                        <p>{oglas.tekst}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Nemate oglase.</p>
              )}
              <p className={`preostali-oglasi ${theme ? 'dark-preostale' : ''}`}>
                Preostalo besplatnih oglasa ovog meseca: {ProfilData.oglasi_remain}
              </p>
              <button className="kupi">Kupite nove oglase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;





