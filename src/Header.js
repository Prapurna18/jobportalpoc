import React from 'react';
import logo from './logo.png';
import './Header.css';



function Header(){
    return(
        <div className="Header-container">
                    <header className="header">
            <h1 className="header-title">jobportal</h1>
            <img src={logo} className="Header-logo" alt="logo" />
            <ul className="header-list">
                <li>jobs</li>
                <li>companies</li>
                <li>resumes</li>
            </ul>
        </header>
        </div>
    )
}
export default Header;