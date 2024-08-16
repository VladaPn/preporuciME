import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Preporuka.css';

const Preporuka = ({ item }) => {
  const [preporuke, setPreporuke] = useState(item.recommendations);
  const [preporuceno, setPreporuceno] = useState(false);

  const handlePreporuku = () => {
    if (preporuceno) {
      setPreporuke(preporuke - 1);
    } else {
      setPreporuke(preporuke + 1);
    }
    setPreporuceno(!preporuceno);
  };

  return (
    <li>
      <div className="service-container">
        <div className="service">
          <h3 className='item-title'>{item.title}</h3>
          <img src={item.image} alt="" />
        </div>
        <div className="service-spec">
          <p><strong>Autor:</strong> {item.author}</p>
          <p><strong>Cena:</strong> {item.price}</p>
          <p><strong>Broj preporuka:</strong> {preporuke}</p>
        </div>
      </div>
      <div className="preporuci">
        {/* Dodaj Link komponentu za navigaciju */}
        <Link to={`/preporuka/${item.id}`}>
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


