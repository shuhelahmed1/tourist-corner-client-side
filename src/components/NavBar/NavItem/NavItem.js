import React from 'react';

const NavItem = ({href,content}) => {
    return (
        <>
        <li>
            <a href={href}>{content}</a>
        </li>
        </>
    );
};

export default NavItem;