import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import './Purchase.css';

const Purchase = () => {
    const {user} = useAuth();
const userRef = useRef()
const emailRef = useRef()
const addressRef = useRef()
const phoneRef = useRef()
const handleAddOrder = e =>{
    const name = userRef.current.value;
    const email = emailRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const newOrder = {name, email, address, phone};
    fetch('https://guarded-inlet-05054.herokuapp.com/orders', {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newOrder)
    })
    .then(res=>res.json())
    .then(result=>{
        alert('Successfully offer added....');
        e.target.reset();
    })
    e.preventDefault();
}
    return (
        <div>
            <form className='purchase-form' onSubmit={handleAddOrder}>
                <p>Name: <input type="text" value={user.displayName} ref={userRef}/></p>
                <p>Email: <input type="email" value={user.email} ref={emailRef}/></p>
                <p><input placeholder="address" type="text" ref={addressRef}/></p>
                <p><input placeholder="phone" type="text" ref={phoneRef}/></p>
                <p><input type="submit" value="submit"/></p>
            </form>
        </div>
    );
};

export default Purchase;