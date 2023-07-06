import banner from '../assets/banner.png'
import banner2 from '../assets/banner2.png'

import '../styles/banner.css'

function Banner({ currentPage }) {
    let image = banner;
  
    if (currentPage === 'about') {
      image = banner2;
    }
    
    return (
        <div className='banner'>
            <img src={image} alt="Banniere" />
            <div className='banner__title'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    )
}

export default Banner