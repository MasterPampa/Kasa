import Header from '../../components/Header.jsx'
import Banner from '../../components/Banner.jsx'
import Gallery from '../../components/Gallery.jsx'
import Footer from '../../components/Footer.jsx'
import '../../styles/styles.css'

function Home() {
  return (
    <div>
      <div className='container'>
        <Header currentPage="home" />
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </div>

  );
}

export default Home;
