import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {user} = useAuth();
    const [details, setDetails] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/offers/${id}`)
        .then(res=>res.json())
        .then(data=> setDetails(data))
    },[])
    const handlePurchase = () =>{
        
    }
    return (
        <>
        <section>
            <h2 className='mt-3 text-center'>Details information</h2>
            <div className='w-50 mx-auto my-4'>
                <div>
                    <img className='w-75 border rounded' src={details.imgUrl} alt="" />
                </div>
                    <h3>{details.name}</h3>
                    <p>{details.description}</p>
                    <hr />
                    <p>User name: {user.displayName}</p>
                    <p>Email: {user.email}</p>
                    <button className='btn btn-danger'>Purchase ticket</button>
            </div>
        </section>
        </>
    );
};

export default Details;