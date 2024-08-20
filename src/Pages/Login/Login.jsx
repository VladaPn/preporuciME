import React, { useContext, useState } from 'react';
import './Login.css';
import { ThemeContext } from '../../Context/ThemeContext';
import forma_gif from '../../assets/forma.gif'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {theme} = useContext(ThemeContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // Dodajte logiku za prijavu ovde
  };

  return (
    <div className={`login-container ${theme?'theme-dark':''}`}>
      <div className="login-form">
        <h1>Prijavite se</h1>
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
        <div className="social-login">
          <button className="button google-login">Prijavi se putem Google naloga</button>
        </div>
        <div className="register-link">
          <p>Nemate nalog? <a href="/register">Registrujte se lako u par koraka!</a></p>
        </div>
      </div>
      <div className="image-section">
        <img src={forma_gif} alt="" />
      </div>
    </div>
  );
};

export default Login;




