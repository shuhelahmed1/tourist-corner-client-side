import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://guarded-inlet-05054.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=> setOrders(data))
    },[])
    return (
        <div>
            <h2 className='my-3 text-center'>My Orders</h2>
            {
                orders.map(order=> <Order key={order.phone} order={order}></Order>)
            }
        </div>
    );
};

export default MyOrders;