import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Offer from '../Offer/Offer';
import './Offers.css';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    useEffect(()=>{
        fetch('https://tourist-corner.vercel.app/offers')
        .then(res=>res.json())
        .then(data=> setOffers(data));
    },[])
    return (
        <>
        <h2 className='text-center my-4 text-3xl font-bold'> Main Offers</h2>
        { offers.length === 0 ?
            <div className='spinner-section'>
                <Spinner className='spinner' animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
             :
        <div className='offers-section grid grid-cols-3 my-1.5'>
            {
                offers.map(offer => <Offer key={offer._id} offer={offer}></Offer>)
            }
        </div>
        }
        </>
    );
};

export default Offers;