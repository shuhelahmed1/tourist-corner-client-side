import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [details, setDetails] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/offers/${id}`)
        .then(res=>res.json())
        .then(data=> setDetails(data))
    },[])
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
            </div>
        </section>
        </>
    );
};

export default Details;