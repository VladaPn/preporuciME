import profile_pic from '../../assets/profile_pic.png';
import oglas_detalj_img from '../../assets/oglas_detalj_img.jpg';
import carouselPic from '../../assets/instaa.jpg'

const ProfilData = {
    ime: '',
    prezime: '',
    email: 'makisto89@gmail.com',
    premium: true,
    trajanje: 20,
    img: profile_pic,
    preporuke: [
        { id: 1, naslov: 'Profesionalno čišćenje', tekst: 'Nudim usluge dubinskog čišćenja stanova i kuća. Moje usluge uključuju čišćenje tepiha, nameštaja, prozora, kao i detaljno čišćenje kuhinjskih aparata. Korišćenjem profesionalnih sredstava osiguravam da vaši prostori budu besprekorno čisti.' },
        { id: 2, naslov: 'Učenje matematike', tekst: 'Instrukcije iz matematike za osnovce i srednjoškolce. Pomažem učenicima da savladaju osnovne koncepte matematike, pripreme za testove i poboljšaju svoje ocene. Svaka lekcija je prilagođena potrebama i tempu učenika.' },
        { id: 3, naslov: 'Popravka računara', tekst: 'Brza i efikasna popravka svih vrsta računara. Usluge uključuju dijagnostiku hardverskih i softverskih problema, zamenu oštećenih delova, kao i instalaciju i podešavanje operativnih sistema i aplikacija. Garancija na izvršen posao.' },
        { id: 4, naslov: 'Kurs šivenja', tekst: 'Naučite osnovne i napredne tehnike šivenja na našem kursu. Učenje će obuhvatiti osnove krojenja, šivanja i dorade odeće. Pruža se individualna pažnja i podrška tokom celog kursa kako bi se svaki polaznik usavršio u veštini šivenja.' },
        { id: 5, naslov: 'Privatni časovi engleskog', tekst: 'Časovi engleskog jezika za sve uzraste, od početnika do naprednih. Fokus na poboljšanju konverzacijskih veština, razumevanju gramatike i proširivanju vokabulara. Pristup učenju je fleksibilan i prilagođen potrebama svakog učenika.' },
    ],
    preporuke_remain: 2,
    oglasi: [
        { id: 1, naslov: 'Prodajem bicikl', tekst: 'Polovan bicikl u odličnom stanju, cena po dogovoru. Bicikl je redovno održavan i u savršenom je funkcionalnom stanju. Ima sve potrebne dodatke, uključujući svetla, zvono i nosioca za torbu. Idealno za svakodnevne vožnje i rekreaciju.', glavnaSlika:oglas_detalj_img, galerijaSlike:[carouselPic,carouselPic,carouselPic] },
        { id: 2, naslov: 'Iznajmljivanje stana', tekst: 'Jednosoban stan u centru grada, potpuno namešten. Stan se nalazi u mirnom delu grada, u neposrednoj blizini svih važnih sadržaja kao što su prodavnice, restorani i prevoz. Uključuje moderne aparate, klimatizaciju i pristup internetu.', glavnaSlika:oglas_detalj_img, galerijaSlike:[carouselPic,carouselPic,carouselPic] },
        { id: 3, naslov: 'Prodaja polovnih knjiga', tekst: 'Knjige različitih žanrova u odličnom stanju. Imamo roman, beletristiku, knjige o samopomoći i mnoge druge naslove. Sve knjige su pažljivo očuvane i spremne za nove čitatelje. Idealno za ljubitelje knjiga koji žele proširiti svoju biblioteku.', glavnaSlika:oglas_detalj_img, galerijaSlike:[carouselPic,carouselPic,carouselPic] },
    ],
    oglasi_remain: 4,
    lozinka: 'ad2kfs'
};

export default ProfilData;


