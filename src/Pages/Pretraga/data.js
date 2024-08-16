import photo from '../../assets/photo.jpg';

const sampleData = [
  {
    id: 1,
    title: 'Preporuka za SEO optimizaciju',
    author: 'Marko Jovanović',
    price: '15000 RSD',
    recommendations: 25,
    image: photo,
    desc: 'SEO optimizacija je ključna za poboljšanje vidljivosti vaše veb stranice na pretraživačima. Marko Jovanović nudi profesionalne usluge SEO optimizacije koje će poboljšati rangiranje vaše stranice i privući više posetilaca. Sa iskustvom u industriji, Marko vam može pomoći da postignete najbolje rezultate.'
  },
  {
    id: 2,
    title: 'Konsultacije za digitalni marketing',
    author: 'Ana Petrović',
    price: '20000 RSD',
    recommendations: 18,
    image: photo,
    desc: 'Ana Petrović pruža konsultacije za digitalni marketing koje vam mogu pomoći da unapredite svoje marketinške strategije. Sa detaljnim analizama i preporukama, Ana vam može pomoći da dosegnete ciljnu publiku i poboljšate rezultate vaših kampanja. Ova usluga je idealna za sve koji žele da unaprede svoje prisustvo na mreži.'
  },
  {
    id: 3,
    title: 'Web dizajn za male biznise',
    author: 'Igor Nikolić',
    price: '30000 RSD',
    recommendations: 12,
    image: photo,
    desc: 'Igor Nikolić nudi usluge web dizajna specijalizovane za male biznise. Sa fokusom na korisnički interfejs i iskustvo, Igor vam može pomoći da izradite veb sajt koji je privlačan i funkcionalan. Ova usluga uključuje sve od dizajna do implementacije, kako biste dobili savršenu prezentaciju za vašu firmu.'
  },
  {
    id: 4,
    title: 'Vođenje društvenih mreža',
    author: 'Milica Savić',
    price: '12000 RSD',
    recommendations: 22,
    image: photo,
    desc: 'Milica Savić se bavi vođenjem društvenih mreža i pomaže firmama da izgrade svoj brend i angažuju publiku na mrežama kao što su Facebook, Instagram i Twitter. Sa strategijama koje su prilagođene vašim potrebama, Milica će vam pomoći da poboljšate prisustvo na mreži i postignete bolje rezultate.'
  },
  {
    id: 5,
    title: 'Izrada logotipa',
    author: 'Vladimir Popović',
    price: '8000 RSD',
    recommendations: 17,
    image: photo,
    desc: 'Vladimir Popović nudi usluge izrade logotipa koji su ključni za prepoznatljivost vašeg brenda. Sa profesionalnim pristupom dizajnu, Vladimir će vam pomoći da stvorite jedinstven i prepoznatljiv vizualni identitet koji će ostaviti snažan utisak na vaše kupce.'
  },
  {
    id: 6,
    title: 'Pisanje blogova',
    author: 'Jelena Petrović',
    price: '10000 RSD',
    recommendations: 14,
    image: photo,
    desc: 'Jelena Petrović pruža usluge pisanja blogova koji su informativni, zanimljivi i SEO optimizovani. Ako vam je potrebna pomoć u kreiranju sadržaja koji će privući i angažovati čitatelje, Jelena je tu da vam pomogne. Ova usluga uključuje istraživanje tema, pisanje i optimizaciju za pretraživače.'
  },
  {
    id: 7,
    title: 'Video montaža',
    author: 'Nikola Ilić',
    price: '25000 RSD',
    recommendations: 30,
    image: photo,
    desc: 'Nikola Ilić nudi profesionalne usluge video montaže za kreiranje kvalitetnih video sadržaja. Sa iskustvom u industriji, Nikola vam može pomoći da kreirate video materijal koji je atraktivan i efektivan. Ova usluga uključuje sve aspekte montaže, od snimanja do finalne obrade.'
  },
  {
    id: 8,
    title: 'Fotografisanje proizvoda',
    author: 'Dragana Todorović',
    price: '15000 RSD',
    recommendations: 20,
    image: photo,
    desc: 'Dragana Todorović specijalizuje se za fotografisanje proizvoda koji će istaknuti vaše proizvode u najboljem svetlu. Sa profesionalnim pristupom i kvalitetnom opremom, Dragana vam može pomoći da stvorite privlačne slike koje će poboljšati vaš marketing i prodaju.'
  },
  {
    id: 9,
    title: 'Prevodilačke usluge',
    author: 'Bojan Đorđević',
    price: '7000 RSD',
    recommendations: 10,
    image: photo,
    desc: 'Bojan Đorđević nudi profesionalne prevodilačke usluge koje obuhvataju različite jezike i oblasti. Bilo da vam je potreban prevod za poslovne dokumente, literaturu ili druge materijale, Bojan vam može pružiti tačan i kvalitetan prevod.'
  },
  {
    id: 10,
    title: 'Usluge virtuelnog asistenta',
    author: 'Ivana Stanković',
    price: '22000 RSD',
    recommendations: 16,
    image: photo,
    desc: 'Ivana Stanković nudi usluge virtuelnog asistenta koje vam mogu pomoći da organizujete svoje poslovanje i uštedite vreme. Od administrativnih zadataka do upravljanja projektima, Ivana će vam pomoći da poboljšate efikasnost i produktivnost.'
  },
  {
    id: 11,
    title: 'Saveti za Google Ads kampanje',
    author: 'Petar Kostić',
    price: '18000 RSD',
    recommendations: 27,
    image: photo,
    desc: 'Petar Kostić pruža savete za Google Ads kampanje kako bi vam pomogao da optimizujete vaše oglase i postignete bolje rezultate. Sa stručnim znanjem i iskustvom, Petar će vam pomoći da maksimalno iskoristite budžet za oglase i povećate ROI.'
  },
  {
    id: 12,
    title: 'Upravljanje email marketing kampanjama',
    author: 'Tijana Milosavljević',
    price: '14000 RSD',
    recommendations: 23,
    image: photo,
    desc: 'Tijana Milosavljević nudi usluge upravljanja email marketing kampanjama koje vam mogu pomoći da poboljšate komunikaciju sa vašim klijentima. Sa strategijama koje su prilagođene vašim potrebama, Tijana vam može pomoći da povećate otvorenost i angažman vaših emailova.'
  },
  {
    id: 13,
    title: 'Kreiranje sadržaja za društvene mreže',
    author: 'Andrija Pantić',
    price: '13000 RSD',
    recommendations: 19,
    image: photo,
    desc: 'Andrija Pantić pruža usluge kreiranja sadržaja za društvene mreže koje su osmišljene da privuku i angažuju vašu publiku. Sa kreativnim pristupom i strategijama, Andrija će vam pomoći da poboljšate prisustvo na mrežama i postignete bolje rezultate.'
  },
  {
    id: 14,
    title: 'Održavanje WordPress sajtova',
    author: 'Jovana Đukić',
    price: '17000 RSD',
    recommendations: 15,
    image: photo,
    desc: 'Jovana Đukić nudi usluge održavanja WordPress sajtova koje obuhvataju sve od redovnih ažuriranja do rešavanja tehničkih problema. Ako vam je potreban pouzdan i stručan servis za vaš WordPress sajt, Jovana vam može pomoći da osigurate nesmetan rad vašeg sajta.'
  },
  {
    id: 15,
    title: 'Kreiranje vizuelnih identiteta',
    author: 'Stefan Ristić',
    price: '35000 RSD',
    recommendations: 13,
    image: photo,
    desc: 'Stefan Ristić se bavi kreiranjem vizuelnih identiteta koji uključuju logotipe, boje, tipografiju i druge vizualne elemente. Sa fokusom na dizajn i brendiranje, Stefan će vam pomoći da razvijete prepoznatljiv i profesionalan vizualni identitet za vaš brend.'
  },
  {
    id: 16,
    title: 'Obuka za UX/UI dizajn',
    author: 'Marija Ilić',
    price: '45000 RSD',
    recommendations: 21,
    image: photo,
    desc: 'Marija Ilić pruža obuku za UX/UI dizajn, pokrivajući sve aspekte korisničkog iskustva i korisničkog interfejsa. Ova obuka je pogodna za sve koji žele da unaprede svoje veštine u dizajnu i stvore korisnički prijatne proizvode. Marija će vas uputiti u najbolje prakse i najnovije trendove u industriji.'
  },
  {
    id: 17,
    title: 'Dizajn promotivnih materijala',
    author: 'Luka Nikolić',
    price: '9000 RSD',
    recommendations: 8,
    image: photo,
    desc: 'Luka Nikolić nudi usluge dizajna promotivnih materijala kao što su flajeri, brošure i plakati. Sa kreativnim pristupom i pažnjom na detalje, Luka će vam pomoći da stvorite materijale koji efikasno komuniciraju vašu poruku i privuku pažnju potencijalnih klijenata.'
  },
  {
    id: 18,
    title: 'Pisanje tehničke dokumentacije',
    author: 'Miloš Lazić',
    price: '16000 RSD',
    recommendations: 11,
    image: photo,
    desc: 'Miloš Lazić se bavi pisanjem tehničke dokumentacije koja je jasna, precizna i lako razumljiva. Ako vam je potrebna dokumentacija za softverske proizvode, hardver ili druge tehničke projekte, Miloš će vam pomoći da stvorite kvalitetnu i profesionalnu dokumentaciju.'
  },
  {
    id: 19,
    title: 'Saveti za vođenje online prodavnica',
    author: 'Vesna Marković',
    price: '30000 RSD',
    recommendations: 24,
    image: photo,
    desc: 'Vesna Marković pruža savete za vođenje online prodavnica, uključujući strategije za poboljšanje prodaje i upravljanje zalihama. Sa iskustvom u e-commerce industriji, Vesna će vam pomoći da optimizujete svoje poslovanje i postignete bolje rezultate.'
  },
  {
    id: 20,
    title: 'Obuka za vođenje timova',
    author: 'Nemanja Matić',
    price: '35000 RSD',
    recommendations: 26,
    image: photo,
    desc: 'Nemanja Matić nudi obuku za vođenje timova koja je usmerena na razvoj veština liderstva i upravljanja. Ova obuka je pogodna za menadžere i lidere koji žele da poboljšaju svoje sposobnosti i unaprede rad svojih timova.'
  },
  {
    id: 21,
    title: 'Digitalizacija poslovanja',
    author: 'Aleksandar Petrović',
    price: '50000 RSD',
    recommendations: 32,
    image: photo,
    desc: 'Aleksandar Petrović pruža usluge digitalizacije poslovanja koje vam mogu pomoći da unapredite efikasnost i konkurentnost vašeg preduzeća. Sa savremenim rešenjima i strategijama, Aleksandar će vam pomoći da implementirate digitalne alate i procese koji će unaprediti vaše poslovanje.'
  },
  {
    id: 22,
    title: 'Analiza konkurencije na tržištu',
    author: 'Sofija Milić',
    price: '25000 RSD',
    recommendations: 28,
    image: photo,
    desc: 'Sofija Milić nudi analizu konkurencije na tržištu kako bi vam pomogla da razumete svoje konkurente i prilagodite svoje strategije. Sa detaljnim izveštajima i preporukama, Sofija će vam pomoći da poboljšate svoje tržišne pozicije i postignete bolje rezultate.'
  },
  {
    id: 23,
    title: 'SEO auditi i preporuke',
    author: 'Dimitrije Ivanović',
    price: '20000 RSD',
    recommendations: 29,
    image: photo,
    desc: 'Dimitrije Ivanović pruža SEO audite i preporuke kako bi vam pomogao da unapredite vidljivost vaše veb stranice. Sa detaljnom analizom i stručnim savetima, Dimitrije će vam pomoći da optimizujete vašu stranicu i poboljšate njeno rangiranje na pretraživačima.'
  },
  {
    id: 24,
    title: 'Konsultacije za razvoj mobilnih aplikacija',
    author: 'Milan Simić',
    price: '60000 RSD',
    recommendations: 20,
    image: photo,
    desc: 'Milan Simić nudi konsultacije za razvoj mobilnih aplikacija koje vam mogu pomoći da razvijete uspešne i funkcionalne aplikacije. Sa iskustvom u industriji mobilnih aplikacija, Milan će vam pomoći da provedete svoje ideje od koncepta do realizacije.'
  },
  {
    id: 25,
    title: 'Osnivanje startup kompanija',
    author: 'Sara Stojanović',
    price: '80000 RSD',
    recommendations: 35,
    image: photo,
    desc: 'Sara Stojanović pruža usluge osnivanja startup kompanija, uključujući pravne, finansijske i strategijske savete. Ako planirate da pokrenete novi biznis, Sara vam može pomoći da postavite temelje za uspeh i navigujete kroz izazove pokretanja startupa.'
  }
];

export default sampleData;

  