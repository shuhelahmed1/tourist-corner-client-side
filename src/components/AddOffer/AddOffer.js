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
        <>
            <div  className='addOfferFormSection my-5 py-4 mx-auto'>
            <h3 className='text-center my-3'>Add an Offer</h3>
            <form className='addOfferForm' onSubmit={handleAddOffer}>
                <input placeholder='Img url' className='w-full border-1 rounded my-3 p-2' type="text" ref={urlRef}/>
                <input placeholder='Offer name' className='w-full border-1 rounded p-2' type="text" ref={nameRef}/>
                <textarea placeholder='Offer description' className='w-full my-3 border-1 rounded p-2' name="" id="" cols="30" rows="5" ref={descriptionRef}></textarea>
                <input className='btn btn-primary' type="submit" value='Submit'/>
            </form>
            </div>
        </>
    );
};

export default AddOffer;