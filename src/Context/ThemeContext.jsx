import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Učitavanje početnog stanja iz localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    // Čuvanje stanja u localStorage prilikom promene
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};