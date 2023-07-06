import React from 'react';

function StarRating({ rating }) {
  const stars = [];

  // Ajouter les étoiles pleines
  for (let i = 0; i < rating; i++) {
    stars.push(<i className="fas fa-lg fa-star" key={i}></i>);
  }

  // Ajouter les étoiles vides
  for (let i = rating; i < 5; i++) {
    stars.push(<i className="fas empty fa-lg fa-star" key={i}></i>);
  }

  return <div className="star-rating">{stars}</div>;
}

export default StarRating;