import arrowLeft from "../assets/arrow_left.png"
import arrowRight from "../assets/arrow_right.png"
import { useState } from "react"
import '../styles/Carousel.css'

export default function Carousel ({idSelected}) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentImage = idSelected[currentIndex]

    const slideLeft = () => {
        setCurrentIndex(currentIndex === 0 ? idSelected.length - 1 : currentIndex - 1)
    }
    
    const slideRight = () => {
        setCurrentIndex(currentIndex === idSelected.length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className="rent__pictures">
            <img src={currentImage}
                alt="Logement"
                className="pictures" />
            {idSelected.length === 1 ? null : (
                <div className="overlay">
                    <div className="count">
                        <p>
                            {currentIndex + 1}/{idSelected.length}
                        </p>
                    </div>
                    <div className="arrows">
                        <img onClick={() => slideLeft()}
                            src={arrowLeft}
                            alt="Précédente" />
                        <img onClick={() => slideRight()}
                            src={arrowRight}
                            alt="Suivante" />
                    </div>
                    
                </div>
            )}
        </div>
    )
}