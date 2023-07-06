import Header from '../components/Header'
import Footer from '../components/Footer'
import AccommodationPage from '../components/AccommodationPage'


function Accommodation() {
    return (
        <div>
            <div className='container'>
                <Header currentPage="accommodation" />
                <AccommodationPage />
            </div>
            <Footer />
        </div>
    )
}
export default Accommodation