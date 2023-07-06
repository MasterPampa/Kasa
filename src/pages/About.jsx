import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import Guideline from '../components/Guideline.jsx'
import '../styles/styles.css'

function About(){
    return(
        <div>
            <div className="container">
                <Header currentPage="about"/>
                <Banner currentPage="about" />
                <Guideline />
            </div>
            <Footer />
        </div>
    )
}

export default About