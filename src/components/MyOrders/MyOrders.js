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
            {
                orders.map(order=> <Order key={order.phone} order={order}></Order>)
            }
        </div>
    );
};

export default MyOrders;