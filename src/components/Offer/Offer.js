import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = ({offer}) => {
    return (
        <div>
            <div className='offer-card py-2 px-2'>
                <img className='offer-img w-100' src={offer.imgUrl} alt="" />
                <div className='py-2'>
                    <h4>{offer.name}</h4>
                    <p>{offer.description}</p>
                    <Link to={`/offers/details/${offer._id}`} className='btn btn-danger'>Buy ticket</Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;