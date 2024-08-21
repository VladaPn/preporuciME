import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
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
    <div className="register-container">
      <h1>Registrujte se</h1>
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
