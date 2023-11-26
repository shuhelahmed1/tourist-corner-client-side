import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MyOrders.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://tourist-corner.vercel.app/orders')
        .then(res=>res.json())
        .then(data=> setOrders(data))
    },[])

    // delete an order
    const handleDeleteOrder = id =>{
        const confirm = window.confirm('Are you sure to cancel the order.');
        if(confirm){
            const url = `https://tourist-corner.vercel.app/orders/${id}`;
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
            <h2 className='my-3 text-center text-xl font-bold'>My Orders</h2>
            {
                orders.map(order=> 
                    <table className='order-table' key={order._id}>
                        <tr>        
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.address}</td>
                            <td>{order.phone}</td>
                            <td>{order._id}</td>
                            <td><button onClick={()=>handleDeleteOrder(order._id)}>Cancel</button></td>
                            <td><Link to={`/orders/${order._id}`}>Update Order</Link></td>
                        </tr>
                    </table>
                // <li key={order._id}>{order.name} - {order.email} - {order.address} - {order.phone} -Id: {order._id} <button onClick={()=>handleDeleteOrder(order._id)}>Cancel</button>
                // <Link to={`/orders/${order._id}`}>Update Order</Link>
                // </li>
                )
            }
        </div>
    );
};

export default MyOrders;