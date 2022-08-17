import React, { useState } from 'react';
import NavItem from './NavItem/NavItem';
import {HiOutlineMenuAlt2,HiOutlineMenuAlt3} from 'react-icons/hi'
import useAuth from '../../hooks/useAuth';

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const {user,logout} = useAuth();
    return (
        <>
        <nav className='md:flex justify-between items-center bg-white sticky top-0 z-20'>
            <div className="flex items-center justify-between">
                <a href="/">
                <img className='w-12 h-12 p-2' src="https://png.pngtree.com/element_origin_min_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg" alt="logo" />
                </a>
                {
                    showNav ?
                    <HiOutlineMenuAlt3 onClick={()=> setShowNav(!showNav)} className='md:hidden block w-10 h-10 p-2 cursor-pointer'/>  : 
                    <HiOutlineMenuAlt2 onClick={()=> setShowNav(!showNav)} className='md:hidden block w-10 h-10 p-2 cursor-pointer'/>
                    
                }
                
            </div>
        
        <ul className={(showNav ? 'left-0' : '-left-full' )+ ' fixed md:static md:flex bottom-0 top-12 bg-gray-500 w-10/12 text-white md:space-y-0 space-y-5 p-2 justify-between items-center md:bg-transparent md:text-gray-500 md:w-auto md:space-x-4 transition-left'}>
           <NavItem content='Home' href='/home'/>
           <NavItem content='Add Offer' href='/addoffer'/>
           <NavItem content='My Orders' href='/myorders'/>
           {
          user.email ? <button style={{padding: '0',marginRight: '10px'}} className='btn btn-danger' onClick={logout}>Log Out</button> : 
          <NavItem  href='/login' content='Log In' />
        }
        </ul>
        </nav>  
        </>
    );
};

export default NavBar;