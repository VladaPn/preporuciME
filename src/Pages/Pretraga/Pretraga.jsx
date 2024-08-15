import React, { useState, useEffect, useContext } from 'react';
import './Pretraga.css';
import { ThemeContext } from '../../Context/ThemeContext';
import search_icon from '../../assets/search_icon.png';
import sampleData from './data'; // Importujte sampleData iz data.js

const Pretraga = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [sortOption, setSortOption] = useState('none'); // Add sorting option
  const { theme } = useContext(ThemeContext);

  // Function to sort results based on sortOption
  const sortResults = (data) => {
    switch (sortOption) {
      case 'recommendations':
        return data.sort((a, b) => b.recommendations - a.recommendations);
      case 'price':
        return data.sort((a, b) => {
          const priceA = parseInt(a.price.replace(' RSD', '').replace(/,/g, ''));
          const priceB = parseInt(b.price.replace(' RSD', '').replace(/,/g, ''));
          return priceA - priceB;
        });
      default:
        return data;
    }
  };

  // useEffect to filter and sort results whenever query or sortOption changes
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      let filteredResults = sampleData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      filteredResults = sortResults(filteredResults);
      setResults(filteredResults);
    }
  }, [query, sortOption]); // Runs every time `query` or `sortOption` changes

  return (
    <div className={`pretraga ${theme ? 'theme-dark' : 'theme-light'}`}>
      <h2>Tražite nešto specifično?</h2>
      <img className='search-img' src={search_icon} alt="Search Icon" />
      <p className='pretraga-opis'>Naša sekcija za pretragu omogućava vam da brzo pronađete usluge, preporuke i informacije koje vas zanimaju. Bilo da tražite određene usluge, preporuke za profesionalce, ili želite da istražite različite opcije, jednostavno unesite ključne reči u pretraživač i dobićete relevantne rezultate.</p>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Unesite ključne reči..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => { /* Optional: additional search logic */ }}>
          Pretraži
        </button>
      </div>
      
      {/* Show sort options only if there are results */}
      {query.trim() !== '' && (
        <div className="sort-options">
          <label>Sortiraj po:</label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="none">Nema sortiranja</option>
            <option value="recommendations">Preporukama</option>
            <option value="price">Ceni</option>
          </select>
        </div>
      )}
      
      <div className="search-results">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                <h3 className='item-title'>{item.title}</h3>
                <p><strong>Autor:</strong> {item.author}</p>
                <p><strong>Cena:</strong> {item.price}</p>
                <p><strong>Broj preporuka:</strong> {item.recommendations}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>{query.trim() === '' ? 'Unesite ključne reči za pretragu.' : 'Nema rezultata za vašu pretragu.'}</p>
        )}
      </div>
    </div>
  );
};

export default Pretraga;


