import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer-div'>


            <Link to="/" className="navBarItem">HOME</Link>
            <Link to="about" className="navBarItem">About</Link>
            <div className='info'> FLASH CARDS</div>
        </div>
    );
};

export default Footer;