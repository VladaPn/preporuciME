import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Footer from './Components/Footer/Footer';
import Pretraga from './Pages/Pretraga/Pretraga';
import Home from './Pages/Home/Home';
import PreporukaDetalj from './Pages/PreporukaDetalj/PreporukaDetalj';
import Profil from './Pages/Profil/Profil';
import IzmeniProfil from './Pages/IzmeniProfil/IzmeniProfil';
import OglasiDetalj from './Pages/OglasiDetalj/OglasiDetalj';


const App = () => {
  return (
    <div className='app'>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/pretraga" element={<Pretraga />} />
            <Route path="/preporuka/:id" element={<PreporukaDetalj/>} />
            <Route path="/profil" element={<Profil/>} />
            <Route path="/izmeniprofil" element={<IzmeniProfil/>} />
            <Route path="/oglasi/:id" element={<OglasiDetalj/>} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;