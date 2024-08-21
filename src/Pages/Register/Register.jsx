import React, { useContext, useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import reg from '../../assets/reg.png'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Email validation: at least 3 characters before @
    const emailParts = email.split('@');
    if (emailParts[0].length < 3) {
      setError('Email mora da ima bar 3 karaktera pre @ znaka.');
      return;
    }

    // Password validation: at least 5 characters and must contain letters and numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if (!passwordRegex.test(password)) {
      setError('Lozinka mora da bude kombinacija slova i brojeva, sa najmanje 5 karaktera.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Registrovan korisnik:', user);
      navigate('/profil'); // Preusmeravanje na profil nakon registracije
    } catch (error) {
      setError(error.message);
      console.error('Greška pri registraciji:', error.message);
    }
  };

  return (
    <div className={`register-container ${theme ? 'theme-dark' : 'theme-light white-shadow'}`}>
      <div className="register-top">
        <img src={reg} alt="" />
      <h1>Registrujte se</h1>
      </div>
      
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleRegister}>
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
        <button type="submit" className="button">Registrujte se</button>
      </form>
    </div>
  );
};

export default Register;

