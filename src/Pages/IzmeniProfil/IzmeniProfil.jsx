import React, { useState, useContext, useEffect } from 'react';
import './IzmeniProfil.css';
import { ThemeContext } from '../../Context/ThemeContext';
import edit_icon from '../../assets/edit_icon.png';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import lock_img from '../../assets/lock.png'

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

    localStorage.setItem('ime', ime);
    localStorage.setItem('prezime', prezime);
    localStorage.setItem('email', email);

    if (novaLozinka) {
      if (staraLozinka === localStorage.getItem('lozinka')) {
        localStorage.setItem('lozinka', novaLozinka);
      } else {
        setPoruka('Stara lozinka nije tačna!');
        setPorukaTip('greska');
        return;
      }
    }

    setPoruka('Izmene su sačuvane.');
    setPorukaTip('uspesno');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Da li ste sigurni da želite da obrišete svoj nalog?')) {
      localStorage.clear();
      navigate('/');
    }
  };

  if (!isLoggedIn) {
    return <div className={`izmeni-profil-container nije-log ${theme ? 'theme-dark' : 'theme-light'}`}>
      <img src={lock_img} alt="" />
      <p>Da biste izmenili profil, molimo vas da se prijavite.</p></div>;
  }

  return (
    <div className={`izmeni-profil-container ${theme ? 'theme-dark' : 'theme-light'}`}>
      <div className="izmeni-profil-title">
        <img src={edit_icon} alt="" />
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
        </div>
        {poruka && <p className={`poruka ${porukaTip}`}>{poruka}</p>}
      </form>
    </div>
  );
};

export default IzmeniProfil;










