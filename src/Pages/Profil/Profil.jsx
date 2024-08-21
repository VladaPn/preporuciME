import React, { useContext, useState, useEffect } from 'react';
import './Profil.css';
import ProfilData from './ProfilData';
import { ThemeContext } from '../../Context/ThemeContext';
import { Link, useNavigate } from 'react-router-dom';
import profile_icon from '../../assets/profile_icon.png';
import premium_icon from '../../assets/premium_icon.png';
import { auth } from '../../firebase';

const Profil = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [email, setEmail] = useState('');
  const [profilnaSlika, setProfilnaSlika] = useState(localStorage.getItem('img') || ProfilData.img);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email);
      setIme(localStorage.getItem('ime') || '');
      setPrezime(localStorage.getItem('prezime') || '');
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/login'); // Preusmeravanje na stranicu za prijavu ako korisnik nije ulogovan
    }
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      navigate('/login'); // Preusmeravanje nakon odjave
    }).catch((error) => {
      console.error("Error during logout:", error);
    });
  };

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
                placeholder="Ime"
              />
              <input
                type="text"
                className="profile-surname"
                value={prezime}
                onChange={(e) => setPrezime(e.target.value)}
                placeholder="Prezime"
              />
              <input
                type="text"
                className="profile-username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                disabled
              />
              <button id="izmeni-prof" type="button">
                <Link to="/izmeniprofil">Izmeni profil</Link>
              </button>
            </form>
          </div>
          {isLoggedIn && ProfilData.premium && (
            <>
              <div className="premium-img">
                <img src={premium_icon} alt="Premium Ikona" /> Premium nalog
              </div>
              <div className="premium-tekst">
                Premium nalog je aktivan još {ProfilData.trajanje} dana
              </div>
            </>
          )}
          <div className="profile-additional-bottom">
            {isLoggedIn && (
              <>
                <button onClick={handleLogout}>Logout</button>
                <button>Izbriši profil</button>
              </>
            )}
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














