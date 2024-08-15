import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext';
import Footer from './Components/Footer/Footer';
import Pretraga from './Pages/Pretraga/Pretraga';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <ThemeProvider>
          <Navbar />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/pretraga" element={<Pretraga />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;