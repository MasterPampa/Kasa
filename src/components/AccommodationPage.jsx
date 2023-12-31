import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataArray from '../components/data/housingData.js';
import '../styles/accommodation.css';
import StarRating from '../components/StarRating';
import Accordion from './Accordion.jsx';
import Carousel from './Carousel.jsx';

function AccommodationPage() {
  const dataIds = dataArray.map(accommodation => accommodation.id);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isValidId, setIsValidId] = useState(false);
  
  const idSelected = dataArray.find(item => item.id === id);
  const pictures = idSelected ? idSelected.pictures : [];
  
  useEffect(() => {
    if (dataIds.includes(id)) {
      setIsValidId(true);
    } else {
      navigate('/lost');
    }
  }, [id, navigate, dataIds]);

  if (!isValidId) {
    return null;
  }

  return (
    <div className="rent">
      <Carousel idSelected={pictures} />
      <div className="rent__details">
        <div className="rent__details__title">
          <h2>{idSelected.title}</h2>
          <p>{idSelected.location}</p>
          <div className="tags">
            {idSelected.tags.map((tag, index) => (
              <div className="tag" key={index}>
                <p>{tag.split(' ')[0]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rent__details__host">
          <div className="rent__details__host__profile">
            <p className="hostName">{idSelected.host.name}</p>
            <div className="pictureContainer">
              <img src={idSelected.host.picture} alt="pitcture" />
            </div>
          </div>
          <div className="rent__details__host__stars">
            <StarRating rating={idSelected.rating} />
          </div>
        </div>
      </div>
      <div className="rent__categories">
        <Accordion description={idSelected.description} equipments={idSelected.equipments} />
      </div>
    </div>
  );
}

export default AccommodationPage;
