import React, { useRef } from 'react';
import './AddOffer.css';

const AddOffer = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const urlRef = useRef();
    // const textRef = useRef();
    const handleAddOffer = e =>{
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const imgUrl = urlRef.current.value;
        const newOffer = {name, description, imgUrl};
        fetch('https://guarded-inlet-05054.herokuapp.com/offers', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOffer)
        })
        .then(res=>res.json())
        .then(result=>{
            alert('Successfully offer added....');
            e.target.reset();
        })
        e.preventDefault();
    }
    return (
        <div>
            <h3 className='text-center my-3'>Add an offer</h3>
            <form className='addOfferForm' onSubmit={handleAddOffer}>
                <p>Img url: <input className='w-75' type="text" ref={urlRef}/></p>
                <p>Offer name: <input className='w-75' type="text" ref={nameRef}/></p>
                <p>Offer description: <textarea className='w-75' name="" id="" cols="30" rows="5" ref={descriptionRef}></textarea></p>
                <input className='btn btn-primary' type="submit" value='Submit'/>
            </form>
        </div>
    );
};

export default AddOffer;