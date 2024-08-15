import './App.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext'
import Hero from './Components/Hero/Hero';
import Zasto from './Components/Zasto/Zasto';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <ThemeProvider>
      <Navbar/>
      <Hero/>
      <Zasto/>
      <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
