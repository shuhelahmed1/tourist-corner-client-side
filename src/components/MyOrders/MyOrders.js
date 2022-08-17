import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://guarded-inlet-05054.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=> setOrders(data))
    },[])

    // delete an order
    const handleDeleteOrder = id =>{
        const confirm = window.confirm('Are you sure to cancel the order.');
        if(confirm){
            const url = `https://guarded-inlet-05054.herokuapp.com/orders/${id}`;
        fetch(url , {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert('Successfully cancelled the order.');
                const remainingOrders = orders.filter(order => order._id !== id)
                setOrders(remainingOrders)
            }
        })
        }
    }

    return (
        <div className='w-75 mx-auto'>
            <h2 className='my-3 text-center'>My Orders</h2>
            {
                orders.map(order=> <li key={order._id}>{order.name} - {order.email} - {order.address} - {order.phone} -Id: {order._id} <button onClick={()=>handleDeleteOrder(order._id)}>Cancel</button>
                <Link to={`/orders/${order._id}`}>Update Order</Link>
                </li>)
            }
        </div>
    );
};

export default MyOrders;