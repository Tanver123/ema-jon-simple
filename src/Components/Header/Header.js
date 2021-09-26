import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header-area">
            <img src={logo} alt="" />
            <nav>
                <a href="/Shop">Shop</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;