import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Preporuka.css';
import sampleData from '../../data/data'; // Import sampleData from data.js

const Preporuka = ({ item }) => {
  const [preporuke, setPreporuke] = useState(item.recommendations);
  const [preporuceno, setPreporuceno] = useState(false);

  // Load initial state from localStorage if available
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('preporukeData')) || [];
    const storedItem = storedData.find(dataItem => dataItem.id === item.id);
    if (storedItem) {
      setPreporuke(storedItem.recommendations);
      setPreporuceno(storedItem.preporuceno);
    }
  }, [item.id]);

  const handlePreporuku = () => {
    const newCount = preporuceno ? preporuke - 1 : preporuke + 1;
    setPreporuke(newCount);
    setPreporuceno(!preporuceno);

    // Update localStorage
    const updatedData = (JSON.parse(localStorage.getItem('preporukeData')) || sampleData).map(dataItem => 
      dataItem.id === item.id 
        ? { ...dataItem, recommendations: newCount, preporuceno: !preporuceno } 
        : dataItem
    );
    localStorage.setItem('preporukeData', JSON.stringify(updatedData));
  };

  return (
    <li>
      <div className="service-container">
        <Link to={`/preporuka/${item.id}`} target="_blank">
          <div className="service">
            <h3 className='item-title'>{item.title}</h3>
            <img src={item.image} alt="" />
          </div>
        </Link>
        <div className="service-spec">
          <p><strong>Autor:</strong> {item.author}</p>
          <p><strong>Cena:</strong> {item.price}</p>
          <p><strong>Broj preporuka:</strong> {preporuke}</p>
        </div>
      </div>
      <div className="preporuci">
        <Link to={`/preporuka/${item.id}`} target="_blank">
          <button className='pogledaj-btn'>Pogledaj</button>
        </Link>
        <button onClick={handlePreporuku}>
          {preporuceno ? 'Otkaži preporuku' : 'Preporuči'}
        </button>
      </div>
    </li>
  );
};

export default Preporuka;





