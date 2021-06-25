import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header (props) {

    // need to do events and event handlers to pass in search results over to fetch methods


    return (
        <header>
            <Link to="/">
                <p>Home</p>
            </Link>
            <input type="text" placeholder="search..." />
        </header>
    );
}

export default Header;