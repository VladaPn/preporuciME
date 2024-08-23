import React, { useState, useContext, useEffect } from 'react';
import './IzmeniProfil.css';
import { ThemeContext } from '../../Context/ThemeContext';
import edit_icon from '../../assets/edit_icon.png';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import lock_img from '../../assets/lock.png';
import Prijava from '../../Components/Prijava/Prijava';
import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

const IzmeniProfil = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [staraLozinka, setStaraLozinka] = useState('');
  const [novaLozinka, setNovaLozinka] = useState('');
  const [profilnaSlika, setProfilnaSlika] = useState(localStorage.getItem('img') || '');
  const [poruka, setPoruka] = useState('');
  const [porukaTip, setPorukaTip] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Pratimo da li je korisnik ulogovan

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setEmail(user.email);
        setIme(localStorage.getItem('ime') || '');
        setPrezime(localStorage.getItem('prezime') || '');
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Otkaži pretplatu na promene kada komponenta bude demontirana
  }, []);

  const validateEmail = (email) => {
    const atIndex = email.indexOf('@');
    return atIndex > 2 && email.length > 3 && atIndex !== email.length - 1;
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= 5 && hasUpperCase && hasNumber;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilnaSlika(reader.result);
      localStorage.setItem('img', reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setPoruka('Unesite ispravan email koji ima bar 3 karaktera pre @ znaka.');
      setPorukaTip('greska');
      return;
    }

    if (novaLozinka && !validatePassword(novaLozinka)) {
      setPoruka('Lozinka mora imati bar 5 karaktera, jedno veliko slovo i jedan broj.');
      setPorukaTip('greska');
      return;
    }

    if (novaLozinka) {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(user.email, staraLozinka);

      reauthenticateWithCredential(user, credential)
        .then(() => {
          // Stara lozinka je tačna, sada ažuriraj lozinku
          user.updatePassword(novaLozinka).then(() => {
            localStorage.setItem('lozinka', novaLozinka);
            setPoruka('Izmene su sačuvane.');
            setPorukaTip('uspesno');
          }).catch((error) => {
            console.error('Greška pri ažuriranju lozinke:', error);
            setPoruka('Došlo je do greške pri ažuriranju lozinke.');
            setPorukaTip('greska');
          });
        })
        .catch((error) => {
          console.error('Stara lozinka nije tačna:', error);
          setPoruka('Stara lozinka nije tačna!');
          setPorukaTip('greska');
        });
    } else {
      // Ažuriranje ostalih podataka bez promene lozinke
      localStorage.setItem('ime', ime);
      localStorage.setItem('prezime', prezime);
      localStorage.setItem('email', email);

      setPoruka('Izmene su sačuvane.');
      setPorukaTip('uspesno');
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Da li ste sigurni da želite da obrišete svoj nalog?')) {
      localStorage.clear();
      navigate('/');
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setIsLoggedIn(false);
      navigate('/prijava'); // Preusmeri korisnika na početnu stranicu nakon odjave
    }).catch((error) => {
      console.error("Greška pri odjavi:", error);
    });
  };

  if (!isLoggedIn) {
    return (
      <Prijava/>
    );
  }

  return (
    <div className={`izmeni-profil-container ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="izmeni-profil-title">
        <img src={edit_icon} alt="Edit" />
        <h2>Izmeni Profil</h2>
      </div>
      <form onSubmit={handleSubmit} className="izmeni-profil-form">
        <div className="forma-top">
          <label>
            Ime: <br />
            <input
              type="text"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
              placeholder="Ime"
            />
          </label>
          <label>
            Prezime: <br />
            <input
              type="text"
              value={prezime}
              onChange={(e) => setPrezime(e.target.value)}
              placeholder="Prezime"
            />
          </label>
          <label>
            Email: <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </label>
          <label>
            Stara Lozinka: <br />
            <input
              type="password"
              value={staraLozinka}
              onChange={(e) => setStaraLozinka(e.target.value)}
              placeholder="Stara lozinka"
            />
          </label>
          <label>
            Nova Lozinka: <br />
            <input
              type="password"
              value={novaLozinka}
              onChange={(e) => setNovaLozinka(e.target.value)}
              placeholder="Nova lozinka"
            />
          </label>
        </div>
        <div className="upload-slike">
          <label className="postoji">
            Profilna slika: <br />
            <input
              id="slika-change"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              placeholder="Izaberi sliku"
            />
          </label>
          {profilnaSlika && (
            <div className={`profilna-slika-preview ${theme ? 'profilna-slika-dark' : ''}`}>
              <img src={profilnaSlika} alt="Profilna slika" />
            </div>
          )}
        </div>
        <div className="buttons-container">
          <button type="submit">Sačuvaj izmene</button>
          <button
            type="button"
            onClick={handleDeleteAccount}
            className="delete-button"
          >
            Obriši nalog
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="logout-button"
          >
            Odjavi se
          </button>
        </div>
        {poruka && <p className={`poruka ${porukaTip}`}>{poruka}</p>}
      </form>
    </div>
  );
};

export default IzmeniProfil;












