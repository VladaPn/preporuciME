import React, { useState, useEffect, useContext } from 'react';
import './Pretraga.css';
import { ThemeContext } from '../../Context/ThemeContext';
import search_icon from '../../assets/search_icon.png';
import sampleData from './data'; // Importujte sampleData iz data.js
import Preporuka from '../../Components/Preporuka/Preporuka';

const Pretraga = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [sortOption, setSortOption] = useState('none');
  const { theme } = useContext(ThemeContext);

  const sortResults = (data) => {
    switch (sortOption) {
      case 'recommendations-asc':
        return data.sort((a, b) => a.recommendations - b.recommendations);
      case 'recommendations-desc':
        return data.sort((a, b) => b.recommendations - a.recommendations);
      case 'price-asc':
        return data.sort((a, b) => {
          const priceA = parseInt(a.price.replace(' RSD', '').replace(/,/g, ''));
          const priceB = parseInt(b.price.replace(' RSD', '').replace(/,/g, ''));
          return priceA - priceB;
        });
      case 'price-desc':
        return data.sort((a, b) => {
          const priceA = parseInt(a.price.replace(' RSD', '').replace(/,/g, ''));
          const priceB = parseInt(b.price.replace(' RSD', '').replace(/,/g, ''));
          return priceB - priceA;
        });
      default:
        return data;
    }
  };

  useEffect(() => {
    const savedResults = localStorage.getItem('searchResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      localStorage.removeItem('searchResults');
    } else {
      let filteredResults = sampleData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      filteredResults = sortResults(filteredResults);
      setResults(filteredResults);
      localStorage.setItem('searchResults', JSON.stringify(filteredResults));
    }
  }, [query, sortOption]);

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
      
      {query.trim() !== '' && (
        <div className="sort-options">
          <label>Sortiraj po:</label>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="none">Nema sortiranja</option>
            <option value="recommendations-asc">Preporuke (Rastuće)</option>
            <option value="recommendations-desc">Preporuke (Opadajuće)</option>
            <option value="price-asc">Cena (Rastuće)</option>
            <option value="price-desc">Cena (Opadajuće)</option>
          </select>
        </div>
      )}
      
      <div className="search-results">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <Preporuka key={item.id} item={item} />
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










