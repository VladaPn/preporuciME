import profile_pic from '../../assets/profile_pic.png';

const ProfilData = {
    ime: 'Marijana',
    prezime: 'Stojanović',
    email: 'makisto89@gmail.com',
    premium: true,
    trajanje: 20,
    img: profile_pic,
    preporuke: [
        { id: 1, naslov: 'Profesionalno čišćenje', tekst: 'Nudim usluge dubinskog čišćenja stanova i kuća.' },
        { id: 2, naslov: 'Učenje matematike', tekst: 'Instrukcije iz matematike za osnovce i srednjoškolce.' },
        { id: 3, naslov: 'Popravka računara', tekst: 'Brza i efikasna popravka svih vrsta računara.' },
        { id: 4, naslov: 'Kurs šivenja', tekst: 'Naučite osnovne i napredne tehnike šivenja.' },
        { id: 5, naslov: 'Privatni časovi engleskog', tekst: 'Časovi engleskog jezika za sve uzraste.' },
    ],
    preporuke_remain: 2,
    oglasi: [
        { id: 1, naslov: 'Prodam bicikl', tekst: 'Polovan bicikl u odličnom stanju, cena po dogovoru.' },
        { id: 2, naslov: 'Iznajmljivanje stana', tekst: 'Jednosoban stan u centru grada, potpuno namešten.' },
        { id: 3, naslov: 'Prodaja polovnih knjiga', tekst: 'Knjige različitih žanrova u odličnom stanju.' },
    ],
    oglasi_remain: 4,
    lozinka: 'ad2kfs'
};

export default ProfilData;

