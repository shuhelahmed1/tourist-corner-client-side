import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <div className='footer-section p-3 m-auto my-2 text-white d-grid'>
                    <div className='footer-address'>
                        <h3>Tourist Corner</h3>
                        <p>Tourist Corner is the country’s first and leading online travel aggregator. Initially started with the name Travel Booking BD, we had a dream to make travel easier for people.</p>
                    </div>
                    <div className='footer-branch'>
                        <h3>Total Branches:</h3>
                        <ul>
                            <li>Dhaka</li>
                            <li>Chittagong</li>
                            <li>Sylhet</li>
                        </ul>
                    </div>
                    <div className='footer-contact'>
                        <h3>GET US</h3>
                        <ul>
                            <li>21 Shyamoli, Mirpur Road, Dhaka-1207, Bangladesh</li>
                            <li>10633, +8809666700100</li>
                            <li>info@tc.com.bd, tc.dhaka@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <p className='text-center text-white'>Copyright 2022 <span >&copy;</span> || Tourist Corner</p>
            </div>
        </div> 
    );
};

export default Footer;