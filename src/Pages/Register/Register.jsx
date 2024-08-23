import React, { useContext, useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import reg from '../../assets/reg.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import the eye icons

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding password
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleRegister = async (e) => {
    e.preventDefault();

    const emailParts = email.split('@');
    if (emailParts[0].length < 3) {
      setError('Email mora da ima bar 3 karaktera pre @ znaka.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if (!passwordRegex.test(password)) {
      setError('Lozinka mora da bude kombinacija slova i brojeva, sa najmanje 5 karaktera.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Registrovan korisnik:', user);
      navigate('/profil');
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
        <div className="input-group password-group">
          <label htmlFor="password">Lozinka:</label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="toggle-password-visibility"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button type="submit" className="button">Registrujte se</button>
      </form>
    </div>
  );
};

export default Register;


