import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem/NavItem';

const NavBar = () => {
    return (
        <>
        <nav>
        <a href="/"></a>
        <ul>
           <NavItem content='Home' href='/home'/>
        </ul>
        </nav>  
        </>
    );
};

export default NavBar;