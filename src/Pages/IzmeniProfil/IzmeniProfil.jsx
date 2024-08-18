import React, { useState, useContext } from 'react';
import './IzmeniProfil.css';
import { ThemeContext } from '../../Context/ThemeContext';
import edit_icon from '../../assets/edit_icon.png';

const IzmeniProfil = () => {
  const { theme } = useContext(ThemeContext);

  // Preuzimanje podataka iz localStorage ili korišćenje podrazumevanih vrednosti
  const [ime, setIme] = useState(localStorage.getItem('ime') || '');
  const [prezime, setPrezime] = useState(localStorage.getItem('prezime') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [staraLozinka, setStaraLozinka] = useState('');
  const [novaLozinka, setNovaLozinka] = useState('');
  const [profilnaSlika, setProfilnaSlika] = useState(localStorage.getItem('img') || '');
  const [poruka, setPoruka] = useState('');

  // Funkcija za rukovanje učitavanjem slike
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilnaSlika(reader.result);
      localStorage.setItem('img', reader.result);  // Čuvanje slike pod ključem 'img'
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Funkcija za ažuriranje podataka i čuvanje u localStorage
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('ime', ime);
    localStorage.setItem('prezime', prezime);
    localStorage.setItem('email', email);

    // Provera stare lozinke samo ako je nova lozinka uneta
    if (novaLozinka) {
      if (staraLozinka === localStorage.getItem('lozinka')) {
        localStorage.setItem('lozinka', novaLozinka);
      } else {
        setPoruka('Stara lozinka nije tačna!');
        return;
      }
    }

    // Prikazivanje poruke o uspešnom čuvanju
    setPoruka('Izmene su sačuvane.');
  };

  // Funkcija za brisanje naloga
  const handleDeleteAccount = () => {
    if (window.confirm('Da li ste sigurni da želite da obrišete svoj nalog?')) {
      localStorage.clear(); // Briše sve podatke iz localStorage-a
      // Preusmeravanje na početnu stranicu nakon brisanja
      navigate('/');
    }
  };

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
            />
          </label>
          <label>
            Prezime: <br />
            <input
              type="text"
              value={prezime}
              onChange={(e) => setPrezime(e.target.value)}
            />
          </label>
          <label>
            Email: <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Stara Lozinka: <br />
            <input
              type="password"
              value={staraLozinka}
              onChange={(e) => setStaraLozinka(e.target.value)}
              disabled={!novaLozinka} // Polje za staru lozinku je onemogućeno ako nova lozinka nije uneta
            />
          </label>
          <label>
            Nova Lozinka: <br />
            <input
              type="password"
              value={novaLozinka}
              onChange={(e) => setNovaLozinka(e.target.value)}
            />
          </label>
          <label className='postoji'>
            Profilna slika: <br />
            <input id='slika-change' type="file" accept="image/*" onChange={handleFileChange} placeholder='Izaberi sliku' />
          </label>
          {profilnaSlika && (
            <div className="profilna-slika-preview">
              <img src={profilnaSlika} alt="Profilna slika" />
            </div>
          )}
        </div>
        <div className="buttons-container">
          <button type="submit">Sačuvaj izmene</button>
          <button type="button" onClick={handleDeleteAccount} className="delete-button">
            Obriši nalog
          </button>
        </div>
        {poruka && <p className="poruka">{poruka}</p>}
      </form>
    </div>
  );
};

export default IzmeniProfil;





