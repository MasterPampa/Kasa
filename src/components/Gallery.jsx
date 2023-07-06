import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/gallery.css';
import housingData from '../components/data/housingData';

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__cards">
        {housingData.map((location) => (
          <Link to={`/accommodation/${location.id}`} className="gallery__card" key={location.id}>
            <img className='gallery__card__img' src={location.cover} alt="" />
            <div className="gallery__card__title">{location.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;