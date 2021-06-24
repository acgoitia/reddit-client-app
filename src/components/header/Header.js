import React from 'react';
import './header.css';

function Header (props) {

    // need to do events and event handlers to pass in search results over to fetch methods


    return (
        <header>
            <p>Home</p>
            <input type="text" placeholder="search..." />
        </header>
    );
}

export default Header;