import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {user} = useAuth();
    const [details, setDetails] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`https://guarded-inlet-05054.herokuapp.com/offers/${id}`)
        .then(res=>res.json())
        .then(data=> setDetails(data))
    },[])
    return (
        <>
        <section>
            <h2 className='mt-3 text-center'>Details information</h2>
            <div className='w-50 mx-auto my-1.5'>
                <div>
                    <img className='w-75 border rounded' src={details.imgUrl} alt="" />
                </div>
                    <h3>{details.name}</h3>
                    <p>{details.description}</p>
                    <hr />
                        <Link to="/offers/details/purchase" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Buy ticket</Link>
            </div>
        </section>
        </>
    );
};

export default Details;