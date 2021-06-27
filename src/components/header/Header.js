import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header (props) {

    // need to do events and event handlers to pass in search results over to fetch methods
    const [endpoint, setEndpoint] = useState("");
    const { handleSubmit } = props;

    // clear text field after submiting search
    useEffect(()=>{
        setEndpoint("");
    }, [handleSubmit])

    const handleChange = ({target}) => {
        setEndpoint(target.value)
    };

    return (
        <header>
            <Link to="/">
                <p>Home</p>
            </Link>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="search..."  value={endpoint} onChange={handleChange}/>
            </form>
        </header>
    );
}

export default Header;