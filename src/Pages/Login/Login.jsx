import React, { useContext, useState, useEffect } from 'react';
import './Login.css';
import { ThemeContext } from '../../Context/ThemeContext';
import forma_gif from '../../assets/forma.gif';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profil');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        setError('Nalog sa ovim email-om ne postoji.');
      } else if (error.code === 'auth/wrong-password') {
        setError('Pogrešna lozinka.');
        setShowResetPassword(true);
      } else if (error.code === 'auth/invalid-email') {
        setError('Nevažeća email adresa.');
      } else if (error.code === 'auth/invalid-credential') {
        setError('Nevažeći kredencijali.');
      } else {
        setError('Greška pri prijavi. Molimo pokušajte ponovo.');
      }
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Email za resetovanje lozinke je poslat.');
      setShowResetPassword(false);
    } catch (error) {
      setError('Greška pri slanju email-a za resetovanje lozinke.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Prijavljen putem Google-a:', user);
      navigate('/profil');
    } catch (error) {
      console.error('Greška pri prijavi putem Google-a:', error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/profil');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className={`login-container ${theme ? 'theme-dark' : ''}`}>
      <div className="login-form">
        <h1>Prijavite se</h1>
        {error && <p className="error-message">{error}</p>}
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
          <div className="input-group password-group">
            <label htmlFor="password">Lozinka:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {password && (
              <button
                type="button"
                className="toggle-password-visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            )}
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











