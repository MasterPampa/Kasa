import '../styles/header.css';
import logo from '../assets/LOGO.png';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    console.log(location.pathname)

    return (
        <header>
            <Link to='/'>
                <img src={logo} alt='logo Kasa'></img>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className={location.pathname === '/' ? 'underline' : ''}>Accueil</Link>
                    </li>
                    <li>
                        <Link to='/About' className={location.pathname === '/About' ? 'underline' : ''}>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
