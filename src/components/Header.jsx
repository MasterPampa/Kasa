import '../styles/header.css'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'

function Header({ currentPage }) {

    let underlineHome = "null"
    let underlineAbout = "null"

    if(currentPage === "about"){
        underlineAbout = "underline"
        underlineHome = "null"
    }     
    if (currentPage === "home"){
        underlineAbout = "null"
        underlineHome = "underline"
    }
    return (
        <header>
            <Link to='/'>
                <img src={logo} alt='logo Kasa'></img>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link className={underlineHome} to='/'>Accueil</Link>
                    </li>
                    <li>
                        <Link className={underlineAbout} to='/About'>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Header