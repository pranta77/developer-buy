import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className='title'>
                    <h3>Developer Hub</h3>
                </div>
                <div className='all-menu'>
                    <ul>
                        <a href="/home">Home</a>
                        <a href="/developer">Developer</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact us</a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;