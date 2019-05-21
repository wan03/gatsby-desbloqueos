import React from 'react';

import './Footer.css'



const Footer = props => (
    <header className="footer">
        <nav className="footer_nav">
            <div className="footer_spacer" />
            <div className="footer_nav_items">
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/celulares">CELULARES</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/contact">CONTACT</a></li>
            </ul>
            </div>
        </nav>
    </header>
);

export default Footer;
