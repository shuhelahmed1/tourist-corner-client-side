import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = ({offer}) => {
    return (
        <div>
            <div className='offer-card py-2 px-2'>
                <img className='offer-img w-full' src={offer.imgUrl} alt="" />
                <div className='py-2'>
                    <h4>{offer.name}</h4>
                    <p>{offer.description}</p>
                    <Link to={`/offers/details/${offer._id}`} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Buy ticket</Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;