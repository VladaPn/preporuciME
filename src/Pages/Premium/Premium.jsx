import React, { useContext, useEffect, useRef } from 'react';
import './Premium.css';
import { ThemeContext } from '../../Context/ThemeContext';
import premium from '../../assets/premium/premium.png';
import userImage1 from '../../assets/users/user1.jpg'; // Add appropriate image paths
import userImage2 from '../../assets/users/user2.jpg';
import userImage3 from '../../assets/users/user3.jpg';

const Premium = () => {
    const { theme } = useContext(ThemeContext);
    const ponudeRef = useRef([]);
    const testimonialsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('ponuda-visible');
                    } else {
                        entry.target.classList.remove('ponuda-visible');
                    }
                });
            },
            { threshold: 0.1 } // 10% of the element must be visible before the animation triggers
        );

        // Observing each "ponuda" div
        ponudeRef.current.forEach((ponuda) => {
            if (ponuda) {
                observer.observe(ponuda);
            }
        });

        return () => {
            ponudeRef.current.forEach((ponuda) => {
                if (ponuda) {
                    observer.unobserve(ponuda);
                }
            });
        };
    }, [theme]); // Restart observer when theme changes

    return (
        <div className={`premium-container ${theme ? 'theme-dark' : 'theme-light'}`}>
            <div className="premium-title">
                <img src={premium} alt="" />
                <h2>Premium</h2>
            </div>
            <div className="premium-desc">
                <h2>Zašto kupiti premium?</h2>
                <p>Kupovina <b>Premium članstva</b> na sajtu <b>PreporučiMe</b> donosi vam brojne prednosti koje će vam pomoći da se izdvojite u moru ponuda i privučete više klijenata. Sa <b>Premium članstvom</b>, vaša usluga će biti prioritetno prikazana u pretragama, što povećava vašu vidljivost i šanse da vas korisnici odmah primete. Takođe, dobijate mogućnost da istaknete preporuke i ocene svojih zadovoljnih klijenata, što dodatno gradi poverenje i kredibilitet. Uz <b>Premium</b>, otključavate i napredne alate za analitiku koji vam omogućavaju da pratite performanse vaših oglasa i optimizujete ih za još bolje rezultate. <b>Premium članstva</b> nije samo ulaganje u oglas, već i u vaš profesionalni uspeh!</p>
            </div>
            <div className="premium-ponude">
                <h3>U ponudi su četiri osnovna paketa Premium naloga:</h3>
                <div className="premium-ponude-grid">
                    <div 
                        className={`ponuda ${theme ? 'ponuda-dark' : ''}`} 
                        ref={(el) => (ponudeRef.current[0] = el)}
                    >
                        <h2>⭐ </h2>
                        <ul>
                            <li><b>Trajanje:</b> 14 dana</li>
                            <li><b>Broj oglasa:</b> 5</li>
                            <li><b>Broj preporuka:</b> 5</li>
                            <li><b>Lajkova i komentara:</b> 30</li>
                            <li><b>Cena:</b> 520 din</li>
                        </ul>
                        <button className="kupi-btn">Kupi</button>
                    </div>
                    <div 
                        className={`ponuda ${theme ? 'ponuda-dark' : ''}`} 
                        ref={(el) => (ponudeRef.current[1] = el)}
                    >
                        <h2>⭐⭐ </h2>
                        <ul>
                            <li><b>Trajanje:</b> 14 dana</li>
                            <li><b>Broj oglasa:</b> 10</li>
                            <li><b>Broj preporuka:</b> 10</li>
                            <li><b>Lajkova i komentara:</b> NEOGRANIČENO</li>
                            <li><b>Cena:</b> 800 din</li>
                        </ul>
                        <button className="kupi-btn">Kupi</button>
                    </div>
                    <div 
                        className={`ponuda ${theme ? 'ponuda-dark' : ''}`} 
                        ref={(el) => (ponudeRef.current[2] = el)}
                    >
                        <h2>⭐⭐⭐ </h2>
                        <ul>
                            <li><b>Trajanje:</b> 30 dana</li>
                            <li><b>Broj oglasa:</b> 20</li>
                            <li><b>Broj preporuka:</b> 20</li>
                            <li><b>Lajkova i komentara:</b> NEOGRANIČENO</li>
                            <li><b>Cena:</b> 1100 din</li>
                        </ul>
                        <button className="kupi-btn">Kupi</button>
                    </div>
                    <div 
                        className={`ponuda ${theme ? 'ponuda-dark' : ''}`} 
                        ref={(el) => (ponudeRef.current[3] = el)}
                    >
                        <h2>⭐⭐⭐⭐ </h2>
                        <ul>
                            <li><b>Trajanje:</b> 30 dana</li>
                            <li><b>Broj oglasa:</b> NEOGRANIČENO</li>
                            <li><b>Broj preporuka:</b> NEOGRANIČENO</li>
                            <li><b>Lajkova i komentara:</b> NEOGRANIČENO</li>
                            <li><b>Cena:</b> 2400 din</li>
                        </ul>
                        <button className="kupi-btn">Kupi</button>
                    </div>
                </div>
            </div>
            <div className="testimonials-section">
                <h3>Šta korisnici kažu o Premium nalogu:</h3>
                <div className="testimonials-grid">
                    <div
                        className={`testimonial ${theme ? 'testimonial-dark' : ''}`}
                        ref={(el) => (testimonialsRef.current[0] = el)}
                    >
                        <div className="testimonial-img">

                        </div>
                        <p>"Premium članstvo mi je donelo mnogo više klijenata! Preporučujem svima."</p>
                        <span>- Ivan Petrović</span>
                    </div>
                    <div
                        className={`testimonial ${theme ? 'testimonial-dark' : ''}`}
                        ref={(el) => (testimonialsRef.current[1] = el)}
                    >
                        <div className="testimonial-img t-2"></div>
                        <p>"Sjajna investicija! Povećala sam broj preporuka za 50%."</p>
                        <span>- Ana Jovanović</span>
                    </div>
                    <div
                        className={`testimonial ${theme ? 'testimonial-dark' : ''}`}
                        ref={(el) => (testimonialsRef.current[2] = el)}
                    >
                        <div className="testimonial-img t-3"></div>
                        <p>"Najbolji način da se izdvojite u moru ponuda."</p>
                        <span>- Marko Marković</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Premium;



