import React, { useRef } from 'react';

import './AddOffer.css';

const AddOffer = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const urlRef = useRef();
    const fileRef = useRef('');
    // const textRef = useRef();
    const handleAddOffer = e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const description = descriptionRef.current.value;
        const imgUrl = urlRef.current.value;
        const file = fileRef.current.value;
        console.log(file)
        const newOffer = {name, description, imgUrl};
        fetch('https://tourist-corner.vercel.app/offers', {
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
    }
    return (
        <>
            <div  className='addOfferFormSection my-5 py-4 mx-auto'>
            <h3 className='text-center my-3 text-xl font-bold'>Add an Offer</h3>
            <form className='addOfferForm' onSubmit={handleAddOffer}>
                <input placeholder='Img url' className='w-full border-2 rounded my-3 p-2' type="text" ref={urlRef}/>
                <input placeholder='Upload file' className='w-full border-2 rounded my-3 p-2' type="file" ref={fileRef}/>
                <input placeholder='Offer name' className='w-full border-2 rounded p-2' type="text" ref={nameRef}/>
                <textarea placeholder='Offer description' className='w-full my-3 border-2 rounded p-2' name="" id="" cols="30" rows="5" ref={descriptionRef}></textarea>
                <input className='font-bold border-2 px-2 cursor-pointer' type="submit" value='Submit'/>
            </form>
            </div>
        </>
    );
};

export default AddOffer;