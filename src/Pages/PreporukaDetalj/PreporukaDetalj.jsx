import React from 'react';
import { useParams } from 'react-router-dom';
import sampleData from '../Pretraga/data'; // Uvozimo podatke

const PreporukaDetalj = () => {
  const { id } = useParams(); // Dobijamo ID iz URL-a
  const preporuka = sampleData.find(item => item.id === parseInt(id)); // Nalazimo preporuku sa tim ID-om

  if (!preporuka) {
    return <p>Preporuka nije pronađena.</p>;
  }

  return (
    <div>
      <h1>{preporuka.title}</h1>
      <img src={preporuka.image} alt={preporuka.title} />
      <p><strong>Autor:</strong> {preporuka.author}</p>
      <p><strong>Cena:</strong> {preporuka.price}</p>
      <p><strong>Broj preporuka:</strong> {preporuka.recommendations}</p>
      <p><strong>Opis:</strong> Detalji o preporuci...</p>
    </div>
  );
};

export default PreporukaDetalj;
