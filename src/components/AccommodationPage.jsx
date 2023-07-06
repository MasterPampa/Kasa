
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import dataArray from '../components/data/housingData.js';
import '../styles/accommodation.css'
import StarRating from '../components/StarRating'
import Accordion from './Accordion.jsx';
import Carousel from './Carousel.jsx';

function AccommodationPage() {

    const dataIds = dataArray.map(accommodation => accommodation.id)
    const navigate = useNavigate()
    const { id } = useParams()
      
    const idSelected = dataArray.find(item => item.id === id)
    const pictures = idSelected ? idSelected.pictures : [];


    useEffect(() => {
        if(!dataIds.includes(id)){
            navigate('/lost')
        }
    }, [id, navigate, dataIds])
 

    if (dataIds.includes(id)){
        return(
            <div className='rent'>
                    <Carousel idSelected={pictures} />
                <div className='rent__details'>
                    <div className='rent__details__title'>
                        <h2>{idSelected.title}</h2>
                        <p>{idSelected.location}</p>
                    </div>
                    <div className='rent__details__host'>
                        <p className='hostName'>{idSelected.host.name}</p>
                        <div className='pictureContainer'>
                            <img src={idSelected.host.picture}alt='pitcture'></img>
                        </div>
                    </div>
                </div>
                <div className='rent__tagsStars'>
                    <div className='rent__tagsStars__tags'>
                        {idSelected.tags.map((tag, index) =>
                        <div className='tag' key={index}><p>{tag.split(' ')[0]}</p></div>)}
                    </div>
                    <div className='rent__tagsStars__stars'>
                        <StarRating rating={idSelected.rating} />
                    </div>
                </div>
                <div className='rent__categories'>
                    <Accordion description={idSelected.description} equipments={idSelected.equipments} />
                </div>
            </div>
        )
    }
}

export default AccommodationPage