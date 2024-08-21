import React, { useContext, useState, useEffect } from 'react';
import './Login.css';
import { ThemeContext } from '../../Context/ThemeContext';
import forma_gif from '../../assets/forma.gif';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Stanje za greške
  const [showResetPassword, setShowResetPassword] = useState(false); // Stanje za prikazivanje opcije za resetovanje lozinke
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  // Funkcija za prijavu putem emaila i lozinke
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Resetovanje grešaka pre svake prijave
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profil'); // Preusmeravanje na profil nakon prijave
    } catch (error) {
      
      if (error.code === 'auth/user-not-found') {
        setError('Nalog sa ovim email-om ne postoji.'); // Postavljanje greške za nepostojeći nalog
      } else if (error.code === 'auth/wrong-password') {
        setError('Pogrešna lozinka.'); // Greška za pogrešnu lozinku
        setShowResetPassword(true); // Prikazivanje opcije za resetovanje lozinke
      } else if (error.code === 'auth/invalid-email') {
        setError('Nevažeća email adresa.'); // Greška za nevažeću email adresu
      } else if (error.code === 'auth/invalid-credential') {
        setError('Nevažeći kredencijali.'); // Greška za nevažeće kredencijale
      } else {
        setError('Greška pri prijavi. Molimo pokušajte ponovo.'); // Opšta greška
      }
    }
};


  // Funkcija za resetovanje lozinke
  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Email za resetovanje lozinke je poslat.'); // Poruka o uspehu
      setShowResetPassword(false); // Sakrivanje opcije za resetovanje lozinke
    } catch (error) {
      setError('Greška pri slanju email-a za resetovanje lozinke.'); // Greška pri slanju email-a
    }
  };

  // Funkcija za prijavu putem Google naloga
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Prijavljen putem Google-a:', user);
      navigate('/profil'); // Preusmeravanje na profil nakon prijave putem Google-a
    } catch (error) {
      console.error('Greška pri prijavi putem Google-a:', error.message);
    }
  };

  // Provera da li je korisnik već prijavljen
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/profil'); // Preusmeravanje na profil ako je korisnik već prijavljen
      } 
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className={`login-container ${theme ? 'theme-dark' : ''}`}>
      <div className="login-form">
        <h1>Prijavite se</h1>
        {error && <p className="error-message">{error}</p>} {/* Prikaz greške */}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Lozinka:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button">Prijavi se</button>
        </form>
        {showResetPassword && (
          <div className="reset-password">
            <p>Pogrešna lozinka. Da li želite da resetujete lozinku?</p>
            <button type="button" className="button" onClick={handlePasswordReset}>Resetujte lozinku</button>
          </div>
        )}
        <div className="social-login">
          <button type="button" className="button google-login" onClick={handleGoogleLogin}>
            <img src={google} alt="" />
            Prijavi se putem Google naloga
          </button>
        </div>
        <div className="register-link">
          <p>Nemate nalog? <Link to='/register'>Registrujte se lako u par koraka!</Link></p>
        </div>
      </div>
      <div className="image-section">
        <img src={forma_gif} alt="" />
      </div>
    </div>
  );
};

export default Login;









