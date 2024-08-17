import './Profil.css'
import React, { useContext } from 'react'
import ProfilData from './ProfilData'
import { ThemeContext } from '../../Context/ThemeContext'
import profile_icon from '../../assets/profile_icon.png'

const Profil = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <div className={`profil ${theme ? 'theme-dark' : 'theme-light'}`}>
        <div className="profil-title">
        <img src={profile_icon} alt="" /><h2>Profil</h2>
        </div>
      <div className="profil-container">
        <div className="profil-basic-info">
            <img src={ProfilData.img} alt="" />
            <div className="profil-inputi">
                <input type="text" className="profile-name" value={ProfilData.ime} />
            <input type="text" className="profile-surname" value={ProfilData.prezime} />
            <input type="text" className="profile-username" value={ProfilData.email} />
            </div>
            {ProfilData.premium && <div>Premium je</div>}
            <button>Izmeni profil</button>
        </div>
        <div className="profile-additional">
            <div className="profile-additional-top">
            {ProfilData.premium && <div>Premium nalog je aktivan jos ${ProfilData.trajanje}</div>}
            <div className="najnovije-preporuke">
                ovde ce stojati najnovije preporuke

                <p className="preostale-preporuke">Imate još ${ProfilData.preporuke_remain} besplatnih preporuka ovog meseca</p>
                <button className="kupi">Kupite nove preporuke</button>
            </div>
            <div className="najnoviji-oglasi">
                ovde ce stojati najnoviji oglasi

                <p className="preostali-oglasi">Imate još ${ProfilData.oglasi_remain} besplatnih oglasa ovog meseca</p>
                <button className="kupi">Kupite nove oglase</button>
            </div>
            </div>
            <div className="profile-additional-bottom">
<button>Logout</button><button>Izbrisi profil</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Profil
