import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './OglasDetalj.css';
import ProfilData from '../Profil/ProfilData';
import { ThemeContext } from '../../Context/ThemeContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const OglasDetalj = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const oglas = ProfilData.oglasi.find((oglas) => oglas.id === parseInt(id));

  const { theme } = useContext(ThemeContext);

  const handleDelete = () => {
    if (window.confirm("Da li ste sigurni da želite da obrišete ovaj oglas?")) {
      console.log(`Deleting ad with id: ${id}`);
      // Perform delete operation here
      navigate('/profil'); // Redirect back to the profile page after deleting
    }
  };

  return (
    <div className={`oglas-detalj ${theme ? 'theme-dark' : 'theme-light'}`}>
      <h2>{oglas.naslov}</h2>
      <img src={oglas.glavnaSlika} alt={oglas.naslov} className="oglas-slika" />
      <p>{oglas.tekst}</p>

      {/* Conditional rendering of the Carousel */}
      {oglas.galerijaSlike && oglas.galerijaSlike.length > 0 && (
        <Carousel className="oglas-karousel" showThumbs={false} dynamicHeight={true} infiniteLoop>
          {oglas.galerijaSlike.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slika ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      )}

      <button className="obrisi-oglas" onClick={handleDelete}>
        Obriši oglas
      </button>
    </div>
  );
};

export default OglasDetalj;


