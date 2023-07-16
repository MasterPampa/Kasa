import { useLocation } from 'react-router';
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';

import '../styles/banner.css';

function Banner() {
    const location = useLocation();
    let image = location.pathname === '/' ? banner : banner2;

    return (
        <div className={location.pathname === '/' ? 'banner bannerClass' : 'banner2 bannerClass'}>
            <img src={image} alt="Banniere" />
            <div className="banner__title">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
}

export default Banner;