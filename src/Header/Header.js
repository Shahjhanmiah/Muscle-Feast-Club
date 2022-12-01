import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='siteName'>
                <img alt="logo" />
                <h4>Muscle Feast Club</h4>
            </div>
            <div className='links'>
                <a href="/Home">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;