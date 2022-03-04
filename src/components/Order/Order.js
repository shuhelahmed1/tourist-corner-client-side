import React from 'react';
import './Order.css';

const Order = ({order}) => {
    return (
        <>
        <div className='ordered-items d-grid'>
            <h5>{order.name}</h5>
            <h5>{order.email}</h5>
            <h5>{order.address}</h5>
            <h5>{order.phone}</h5>
        </div>
        </>
    );
};

export default Order;