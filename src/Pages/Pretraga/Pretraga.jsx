import React, { useState, useEffect, useContext } from 'react';
import './Pretraga.css';
import { ThemeContext } from '../../Context/ThemeContext';
import search_icon from '../../assets/search_icon.png';

const Pretraga = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { theme } = useContext(ThemeContext);

  // Sample data for search (in a real application, this would be fetched from an API)
  const sampleData = [
    { id: 1, title: 'Preporuka 1', author: 'Autor 1', price: '1000 RSD', recommendations: 12 },
    { id: 2, title: 'Preporuka 2', author: 'Autor 2', price: '2000 RSD', recommendations: 8 },
    { id: 3, title: 'Usluga 1', author: 'Autor 3', price: '1500 RSD', recommendations: 5 },
    { id: 4, title: 'Usluga 2', author: 'Autor 4', price: '2500 RSD', recommendations: 15 },
    { id: 5, title: 'Trpanje u mesnoj', author: 'Vlada', price: 'iz ubedjenje', recommendations: 500 }
    ,
    { id: 6, title: 'Mučko i čoky', author: 'Mučko', price: 'bude', recommendations: 1 }
    ,
    { id: 7, title: 'Laza skače sa tobogana', author: 'Lazin bata', price: 'mnogo', recommendations: 0 }
  ];

  // useEffect to filter results whenever query changes
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      setResults(sampleData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      ));
    }
  }, [query]); // Runs every time `query` changes

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
      
      <div className="search-results">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
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


