import React, { useState, useEffect, useContext } from 'react';
import './Pretraga.css';
import { ThemeContext } from '../../Context/ThemeContext';
import search_icon from '../../assets/search_icon.png';
import sampleData from '../../data/data.js'; // Import sampleData iz data.js
import Preporuka from '../../Components/Preporuka/Preporuka';
import { Link } from 'react-scroll';

const Pretraga = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [visibleResults, setVisibleResults] = useState(5); // Početno prikazujemo 5 rezultata
  const [sortOption, setSortOption] = useState('none');
  const { theme } = useContext(ThemeContext);

  // Funkcija za sortiranje rezultata
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

  // Učitavanje sačuvanih rezultata iz localStorage
  useEffect(() => {
    const savedResults = localStorage.getItem('searchResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  // Filtriranje i sortiranje rezultata na osnovu unetih ključnih reči i opcija sortiranja
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

  // Funkcija za prikazivanje više rezultata
  const handleShowMoreResults = () => {
    setVisibleResults((prevVisibleResults) => prevVisibleResults + 5);
  };

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
          <>
            <ul>
              {results.slice(0, visibleResults).map((item) => (
                <Preporuka key={item.id} item={item} />
              ))}
            </ul>
            {visibleResults < results.length && (
              <Link className="prikazi-vise" onClick={handleShowMoreResults}>
                Prikaži više
              </Link>
            )}
          </>
        ) : (
          <p>{query.trim() === '' ? 'Unesite ključne reči za pretragu.' : 'Nema rezultata za vašu pretragu.'}</p>
        )}
      </div>

      {/* Dodaj baner pre futera */}
      <div className="banner-container">
        <div className="scroll-banner">
          <div className={`banner-item ${theme ? 'banner-item-dark' : ''}`}>najbolje</div>
          <div className={`banner-item ${theme ? 'banner-item-dark' : ''}`}>najpovoljnije</div>
          <div className={`banner-item ${theme ? 'banner-item-dark' : ''}`}>najbrže</div>
          <div className={`banner-item preporuka-item ${theme ? 'banner-item-dark preporuka-dark-item' : ''}`}>PreporuciME</div>
          <div className={`banner-item ${theme ? 'banner-item-dark' : ''}`}>najbolje</div>
          <div className={`banner-item ${theme ? 'banner-item-dark' : ''}`}>najpovoljnije</div>
          <div className={`banner-item ${theme ? 'banner-item-dark' : ''}`}>najbrže</div>
          <div className={`banner-item preporuka-item ${theme ? 'banner-item-dark preporuka-dark-item' : ''}`}>PreporuciME</div>
        </div>
      </div>

    </div>
  );
};

export default Pretraga;












