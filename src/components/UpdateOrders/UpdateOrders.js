import React from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

const UpdateOrders = () => {
    const addressRef = useRef()
    const phoneRef = useRef()
    const {id} = useParams();
    const handleUpdate = id =>{
        const address = addressRef?.current?.value;
        const phone = phoneRef?.current?.value;
        const updatedOrder = {address, phone}
        fetch(`https://guarded-inlet-05054.herokuapp.com/orders/${id}`,{
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        }
    ,
    body: JSON.stringify(updatedOrder)}
    )
    .then(res=>res.json())
    .then(data=> {
        alert('Order details updated')
    })
    }
    
    

    return (
        <div>
            <h1>Order ID: {id}</h1>
            <p>Adress: <input className='border-2' type="text" ref={addressRef}/></p>
            <p>Phone: <input className='border-2' type="text" ref={phoneRef}/></p>
            <button className='border-2 px-2' onClick={()=>handleUpdate(id)}>Update</button>
        </div>
    );
};

export default UpdateOrders;