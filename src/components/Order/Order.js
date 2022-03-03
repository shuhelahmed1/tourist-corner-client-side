import React from 'react';

const Order = ({order}) => {
    return (
        <div>
            <h2>{order.name}</h2>
            <h2>{order.email}</h2>
        </div>
    );
};

export default Order;