import React, { useState, useContext, useEffect } from 'react';
import './Komentar.css';
import comment_icon from '../../assets/comment_icon.png';
import comment_icon_main from '../../assets/comment_icon_main.png';
import komentariData from '../../data/komentariData'; // Učitajte komentare
import { ThemeContext } from '../../Context/ThemeContext';
import like_icon from '../../assets/like_icon.png';
import dislike_icon from '../../assets/dislike_icon.png';
import { useParams } from 'react-router-dom';

const Komentar = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams(); // ID preporuke iz URL-a
  const [komentari, setKomentari] = useState(() => {
    const savedComments = localStorage.getItem('komentari');
    return savedComments ? JSON.parse(savedComments) : komentariData;
  });

  const [hasCommented, setHasCommented] = useState(() => {
    const savedCommentStatus = localStorage.getItem(`hasCommented_${id}`);
    return savedCommentStatus === 'true';
  });

  const [newComment, setNewComment] = useState('');
  const [currentUser, setCurrentUser] = useState('Ti'); // Pretpostavljeni korisnik za ovu sesiju

  // Paginacija
  const [visibleCommentsCount, setVisibleCommentsCount] = useState(5);
  const [showMore, setShowMore] = useState(true);

  // Sortiranje
  const [sortOption, setSortOption] = useState('chronologically');

  useEffect(() => {
    localStorage.setItem('komentari', JSON.stringify(komentari));
  }, [komentari]);

  useEffect(() => {
    localStorage.setItem(`hasCommented_${id}`, JSON.stringify(hasCommented));
  }, [hasCommented, id]);

  const handleLike = (id) => {
    setKomentari(prevKomentari =>
      prevKomentari.map(komentar =>
        komentar.id === id
          ? {
              ...komentar,
              lajkovi: komentar.lajkovi + 1,
              liked: true,
              disliked: false,
              dislajkovi: komentar.dislajkovi > 0 ? komentar.dislajkovi - 1 : 0,
            }
          : komentar
      )
    );
  };

  const handleDislike = (id) => {
    setKomentari(prevKomentari =>
      prevKomentari.map(komentar =>
        komentar.id === id
          ? {
              ...komentar,
              dislajkovi: komentar.dislajkovi + 1,
              disliked: true,
              liked: false,
              lajkovi: komentar.lajkovi > 0 ? komentar.lajkovi - 1 : 0,
            }
          : komentar
      )
    );
  };

  const handleAddComment = (text) => {
    if (text.trim() === '') return; // Ignoriši prazne komentare

    const newCommentObj = {
      id: Date.now(),
      autor: currentUser,
      tekst: text,
      lajkovi: 0,
      dislajkovi: 0,
      liked: false,
      disliked: false
    };

    setKomentari(prevKomentari => [newCommentObj, ...prevKomentari]);
    setNewComment('');
    setHasCommented(true); // Postavi da je komentar dodat
  };

  const handleDeleteComment = (id) => {
    setKomentari(prevKomentari => {
      const updatedComments = prevKomentari.filter(komentar => komentar.id !== id);
      if (updatedComments.length === prevKomentari.length) {
        // Ako nema više komentara, ponovo prikaži deo za unos komentara
        setHasCommented(false);
      }
      return updatedComments;
    });
  };

  const handleLoadMore = () => {
    setVisibleCommentsCount(prevCount => {
      const newCount = prevCount + 5;
      if (newCount >= komentari.length) {
        setShowMore(false); // Sakrij link "Prikazi više" ako nema više komentara
      }
      return newCount;
    });
  };

  const handleShowLess = () => {
    setVisibleCommentsCount(5);
    setShowMore(true); // Ponovno prikazi link "Prikazi više"
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedKomentari = [...komentari].sort((a, b) => {
    if (sortOption === 'chronologically') {
      return b.id - a.id; // Sort by date (newest first)
    } else if (sortOption === 'likes') {
      return b.lajkovi - a.lajkovi; // Sort by likes (most liked first)
    }
    return 0;
  });

  const visibleKomentari = sortedKomentari.slice(0, visibleCommentsCount);

  return (
    <div className='komentari'>
      <div className="komentari-top">
        <img src={`${theme ? comment_icon : comment_icon_main}`} alt="" /> <h2>Komentari</h2>
      </div>
      <div className="sort-options">
        <select value={sortOption} onChange={handleSortChange}>
          <option value="chronologically">Sortiraj po datumu</option>
          <option value="likes">Sortiraj po broju lajkova</option>
        </select>
      </div>
      <div className="lista-komentara">
        {visibleKomentari.map(komentar => (
          <div key={komentar.id} className="komentar">
            <div className="komentar-top">
              <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="Avatar" />
              <div>
              <h4>{komentar.autor}</h4>
              {komentar.autor === currentUser && (
                <a href="#" className="delete-button" onClick={() => handleDeleteComment(komentar.id)}>Obriši komentar</a>
              )}
              </div>
            </div>
            <div className={`komentar-bottom ${theme ? 'dark-bottom' : ''}`}>
              <p>{komentar.tekst}</p>
              <div className="spanovi">
                <span className="lajkovi">Broj lajkova: {komentar.lajkovi}</span>
                <span className="dislajkovi">Broj dislajkova: {komentar.dislajkovi}</span>
              </div>
              <button
                onClick={() => handleLike(komentar.id)}
                className={`like-button ${komentar.liked ? 'disabled' : ''}`}
              >
                <img src={like_icon} alt="Like" />
              </button>
              <button
                onClick={() => handleDislike(komentar.id)}
                className={`dislike-button ${komentar.disliked ? 'disabled' : ''}`}
              >
                <img src={dislike_icon} alt="Dislike" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="show-links">
      {showMore && komentari.length > visibleCommentsCount && (
        <a href="#" className="show-more-link" onClick={handleLoadMore}>Prikazi više</a>
      )}
      {!showMore && (
        <a href="#" className="show-less-link" onClick={handleShowLess}>Prikazi manje</a>
      )}
      </div>
      {!hasCommented && (
        <div className="tvoj-komentar">
          <div className="tvoj-komentar-body">
          <p>Napisi komentar</p>
          <textarea
            name="tvoj-kom"
            id="tvoj-kom"
            placeholder='Tvoj komentar'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleAddComment(newComment);
              }
            }}
          ></textarea>
          </div>
          <div className="tvoj-komentar-desc">
            <h4>Pravila komentarisanja</h4>
            <p>

Da bismo osigurali kvalitetnu diskusiju i prijatno okruženje za sve korisnike, molimo vas da se pridržavate sledećih pravila kada ostavljate komentare: <br />
<ul>
  <li><strong>Dužina komentara:</strong> Komentari ne smeju biti predugi. Pokušajte da se izražavate jasno i koncizno kako bi vaš komentar bio lak za čitanje.</li>
  <li><strong>Pristojnost:</strong> Komentari ne smeju sadržati uvrede, govor mržnje, ili bilo kakav oblik diskriminacije ili nepoštovanja. Svi komentari treba da budu konstruktivni i poštovani.</li>
  <li><strong>Jedan komentar po preporuci:</strong>Svaki korisnik može ostaviti samo jedan komentar po preporuci. Ako želite da ostavite više komentara, morate imati premium nalog.</li>
</ul>

Zahvaljujemo vam se na razumevanju i saradnji! Vaša konstruktivna povratna informacija nam pomaže da unapredimo našu platformu i učinimo je boljom za sve korisnike.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Komentar;











