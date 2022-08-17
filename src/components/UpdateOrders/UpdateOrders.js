import React from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

const UpdateOrders = () => {
    const addressRef = useRef()
    const phoneRef = useRef()
    const {id} = useParams();
    const address = addressRef?.current?.value;
    const phone = addressRef?.current?.value;
    const updatedOrder = (address, phone)

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
        alert('order update success')
    })

    return (
        <div>
            <h1>Order ID: {id}</h1>
            <p>Adress: <input type="text" ref={addressRef}/></p>
            <p>Phone: <input type="text" ref={phoneRef}/></p>
            <button onClick={UpdateOrders}>Update</button>
        </div>
    );
};

export default UpdateOrders;