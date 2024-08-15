import './App.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Context/ThemeContext'
import Hero from './Components/Hero/Hero';
import Zasto from './Components/Zasto/Zasto';

const App = () => {
  return (
    <div className='app'>
      <ThemeProvider>
      <Navbar/>
      <Hero/>
      <Zasto/>
      </ThemeProvider>
    </div>
  )
}

export default App
