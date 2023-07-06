import Header from '../components/Header'
import Error from '../components/Error'
import Footer from '../components/Footer'
import '../styles/styles.css'
import '../styles/error.css'

function Lost() {
    return (
        <div>
            <div className='container'>
                <Header />
                <Error />
            </div>
            <Footer />
        </div>
    )
}

export default Lost